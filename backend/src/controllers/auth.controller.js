import { query } from '../services/query.js';
import { comparePassword, hashPassword } from '../utils/hash.js';
import { signToken } from '../utils/token.js';

export const register = async (req, res) => {
  const { name, email, password } = req.body;
  const existing = await query('SELECT id FROM users WHERE email = ?', [email]);
  if (existing.length) return res.status(409).json({ message: 'Email already in use' });

  const hashed = await hashPassword(password);
  await query('INSERT INTO users (name, email, password_hash, role) VALUES (?, ?, ?, ?)', [name, email, hashed, 'customer']);
  res.status(201).json({ message: 'Registered successfully' });
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  const users = await query('SELECT id, name, email, password_hash, role FROM users WHERE email = ?', [email]);
  const user = users[0];
  if (!user) return res.status(401).json({ message: 'Invalid credentials' });

  const ok = await comparePassword(password, user.password_hash);
  if (!ok) return res.status(401).json({ message: 'Invalid credentials' });

  const token = signToken({ id: user.id, role: user.role, email: user.email });
  res.json({ token, user: { id: user.id, name: user.name, email: user.email, role: user.role } });
};

export const me = async (req, res) => {
  const users = await query('SELECT id, name, email, role FROM users WHERE id = ?', [req.user.id]);
  res.json(users[0]);
};
