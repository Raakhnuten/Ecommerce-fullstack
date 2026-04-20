import { query } from '../services/query.js';

export const createOrder = async (req, res) => {
  const { address_id, payment_method, coupon_code } = req.body;
  const cartItems = await query(
    `SELECT ci.product_id, ci.quantity, p.price
     FROM carts c JOIN cart_items ci ON c.id=ci.cart_id
     JOIN products p ON p.id=ci.product_id
     WHERE c.user_id = ?`,
    [req.user.id]
  );
  if (!cartItems.length) return res.status(400).json({ message: 'Cart is empty' });

  let subtotal = cartItems.reduce((acc, item) => acc + Number(item.price) * item.quantity, 0);
  let discount = 0;
  if (coupon_code) {
    const coupon = (await query('SELECT * FROM coupons WHERE code=? AND is_active=1', [coupon_code]))[0];
    if (coupon) discount = (subtotal * Number(coupon.discount_percent)) / 100;
  }
  const total = subtotal - discount;

  const orderResult = await query(
    'INSERT INTO orders (user_id, address_id, subtotal, discount, total, status, payment_status) VALUES (?, ?, ?, ?, ?, ?, ?)',
    [req.user.id, address_id, subtotal, discount, total, 'pending', 'pending']
  );

  for (const item of cartItems) {
    await query('INSERT INTO order_items (order_id, product_id, quantity, unit_price) VALUES (?, ?, ?, ?)', [orderResult.insertId, item.product_id, item.quantity, item.price]);
  }

  await query('INSERT INTO payments (order_id, method, amount, status) VALUES (?, ?, ?, ?)', [orderResult.insertId, payment_method, total, 'initiated']);
  await query('DELETE ci FROM carts c JOIN cart_items ci ON c.id = ci.cart_id WHERE c.user_id=?', [req.user.id]);

  res.status(201).json({ message: 'Order placed', orderId: orderResult.insertId });
};

export const getMyOrders = async (req, res) => {
  const rows = await query('SELECT * FROM orders WHERE user_id=? ORDER BY created_at DESC', [req.user.id]);
  res.json(rows);
};

export const getAllOrders = async (_req, res) => {
  const rows = await query('SELECT o.*, u.name customer_name FROM orders o JOIN users u ON o.user_id=u.id ORDER BY o.created_at DESC');
  res.json(rows);
};

export const updateOrderStatus = async (req, res) => {
  await query('UPDATE orders SET status=? WHERE id=?', [req.body.status, req.params.id]);
  res.json({ message: 'Order status updated' });
};
