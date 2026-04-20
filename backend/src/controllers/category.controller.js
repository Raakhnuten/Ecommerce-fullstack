import { query } from '../services/query.js';

export const listCategories = async (_req, res) => res.json(await query('SELECT * FROM categories ORDER BY name'));

export const createCategory = async (req, res) => {
  const { name, slug } = req.body;
  const result = await query('INSERT INTO categories (name, slug) VALUES (?, ?)', [name, slug]);
  res.status(201).json({ id: result.insertId, message: 'Category created' });
};

export const updateCategory = async (req, res) => {
  const { name, slug } = req.body;
  await query('UPDATE categories SET name=?, slug=? WHERE id=?', [name, slug, req.params.id]);
  res.json({ message: 'Category updated' });
};

export const deleteCategory = async (req, res) => {
  await query('DELETE FROM categories WHERE id=?', [req.params.id]);
  res.json({ message: 'Category deleted' });
};
