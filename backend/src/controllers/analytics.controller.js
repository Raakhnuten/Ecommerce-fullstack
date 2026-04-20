import { query } from '../services/query.js';

export const getOverview = async (_req, res) => {
  const [users] = await query('SELECT COUNT(*) totalUsers FROM users');
  const [products] = await query('SELECT COUNT(*) totalProducts FROM products');
  const [orders] = await query('SELECT COUNT(*) totalOrders, COALESCE(SUM(total),0) revenue FROM orders');
  const [pendingOrders] = await query("SELECT COUNT(*) pendingOrders FROM orders WHERE status='pending'");
  res.json({ ...users, ...products, ...orders, ...pendingOrders });
};
