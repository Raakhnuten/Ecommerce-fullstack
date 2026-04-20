import { query } from '../services/query.js';

export const listUsers = async (_req, res) => {
  const rows = await query('SELECT id, name, email, role, is_active, created_at FROM users ORDER BY created_at DESC');
  res.json(rows);
};

export const updateUser = async (req, res) => {
  const { name, role, is_active } = req.body;
  await query('UPDATE users SET name=?, role=?, is_active=? WHERE id=?', [name, role, is_active, req.params.id]);
  res.json({ message: 'User updated' });
};
