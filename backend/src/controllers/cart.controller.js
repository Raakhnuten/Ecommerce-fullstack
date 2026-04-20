import { query } from '../services/query.js';

const ensureCart = async (userId) => {
  const rows = await query('SELECT id FROM carts WHERE user_id=?', [userId]);
  if (rows.length) return rows[0].id;
  const result = await query('INSERT INTO carts (user_id) VALUES (?)', [userId]);
  return result.insertId;
};

export const getCart = async (req, res) => {
  const cartId = await ensureCart(req.user.id);
  const items = await query(
    `SELECT ci.id, ci.quantity, p.id product_id, p.name, p.price
     FROM cart_items ci JOIN products p ON ci.product_id=p.id
     WHERE ci.cart_id=?`,
    [cartId]
  );
  res.json(items);
};

export const addToCart = async (req, res) => {
  const cartId = await ensureCart(req.user.id);
  const { product_id, quantity } = req.body;
  await query(
    `INSERT INTO cart_items (cart_id, product_id, quantity)
     VALUES (?, ?, ?)
     ON DUPLICATE KEY UPDATE quantity = quantity + VALUES(quantity)`,
    [cartId, product_id, quantity]
  );
  res.status(201).json({ message: 'Added to cart' });
};

export const removeCartItem = async (req, res) => {
  await query('DELETE FROM cart_items WHERE id=?', [req.params.id]);
  res.json({ message: 'Removed from cart' });
};
