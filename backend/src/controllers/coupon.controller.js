import { query } from '../services/query.js';

export const listCoupons = async (_req, res) => res.json(await query('SELECT * FROM coupons ORDER BY created_at DESC'));
export const createCoupon = async (req, res) => {
  const { code, discount_percent, min_order_amount, expires_at } = req.body;
  const result = await query(
    'INSERT INTO coupons (code, discount_percent, min_order_amount, expires_at, is_active) VALUES (?, ?, ?, ?, 1)',
    [code, discount_percent, min_order_amount, expires_at]
  );
  res.status(201).json({ id: result.insertId, message: 'Coupon created' });
};
export const updateCoupon = async (req, res) => {
  const { discount_percent, min_order_amount, expires_at, is_active } = req.body;
  await query('UPDATE coupons SET discount_percent=?, min_order_amount=?, expires_at=?, is_active=? WHERE id=?', [discount_percent, min_order_amount, expires_at, is_active, req.params.id]);
  res.json({ message: 'Coupon updated' });
};
