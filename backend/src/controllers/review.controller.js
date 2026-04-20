import { query } from '../services/query.js';

export const addReview = async (req, res) => {
  const { product_id, rating, comment } = req.body;
  const result = await query('INSERT INTO reviews (user_id, product_id, rating, comment) VALUES (?, ?, ?, ?)', [req.user.id, product_id, rating, comment]);
  res.status(201).json({ id: result.insertId, message: 'Review submitted' });
};

export const listReviews = async (_req, res) => {
  const rows = await query(
    `SELECT r.*, u.name user_name, p.name product_name
     FROM reviews r JOIN users u ON r.user_id=u.id JOIN products p ON r.product_id=p.id
     ORDER BY r.created_at DESC`
  );
  res.json(rows);
};
