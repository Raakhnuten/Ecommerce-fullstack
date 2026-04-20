import { query } from '../services/query.js';

export const getProducts = async (req, res) => {
  const products = await query(
    `SELECT p.*, c.name category_name, b.name brand_name
     FROM products p
     LEFT JOIN categories c ON p.category_id = c.id
     LEFT JOIN brands b ON p.brand_id = b.id
     ORDER BY p.created_at DESC`
  );
  res.json(products);
};

export const getProduct = async (req, res) => {
  const rows = await query('SELECT * FROM products WHERE id = ?', [req.params.id]);
  if (!rows.length) return res.status(404).json({ message: 'Not found' });
  const images = await query('SELECT * FROM product_images WHERE product_id = ?', [req.params.id]);
  const reviews = await query('SELECT * FROM reviews WHERE product_id = ? ORDER BY created_at DESC', [req.params.id]);
  res.json({ ...rows[0], images, reviews });
};

export const createProduct = async (req, res) => {
  const { name, slug, description, price, stock, category_id, brand_id } = req.body;
  const result = await query(
    'INSERT INTO products (name, slug, description, price, stock, category_id, brand_id, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
    [name, slug, description, price, stock, category_id, brand_id, 'active']
  );
  res.status(201).json({ id: result.insertId, message: 'Product created' });
};

export const updateProduct = async (req, res) => {
  const { name, description, price, stock, category_id, brand_id, status } = req.body;
  await query(
    'UPDATE products SET name=?, description=?, price=?, stock=?, category_id=?, brand_id=?, status=? WHERE id=?',
    [name, description, price, stock, category_id, brand_id, status, req.params.id]
  );
  res.json({ message: 'Product updated' });
};

export const deleteProduct = async (req, res) => {
  await query('DELETE FROM products WHERE id = ?', [req.params.id]);
  res.json({ message: 'Product deleted' });
};
