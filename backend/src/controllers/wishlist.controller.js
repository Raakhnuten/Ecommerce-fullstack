import { query } from '../services/query.js';

export const getWishlist = async (req, res) => {
  const rows = await query(
    `SELECT w.id, p.id product_id, p.name, p.price
     FROM wishlists w JOIN products p ON w.product_id=p.id
     WHERE w.user_id=?`,
    [req.user.id]
  );
  res.json(rows);
};

export const addWishlist = async (req, res) => {
  await query('INSERT IGNORE INTO wishlists (user_id, product_id) VALUES (?, ?)', [req.user.id, req.body.product_id]);
  res.status(201).json({ message: 'Added to wishlist' });
};

export const removeWishlist = async (req, res) => {
  await query('DELETE FROM wishlists WHERE id=? AND user_id=?', [req.params.id, req.user.id]);
  res.json({ message: 'Wishlist item removed' });
};
