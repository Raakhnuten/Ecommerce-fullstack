import { Router } from 'express';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import { authenticate, authorize } from '../middleware/auth.js';

const uploadDir = 'uploads/products';
fs.mkdirSync(uploadDir, { recursive: true });

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => cb(null, uploadDir),
  filename: (_req, file, cb) => cb(null, `${Date.now()}-${file.originalname.replace(/\s+/g, '-')}`)
});

const upload = multer({ storage });
const router = Router();

router.post('/product-image', authenticate, authorize('admin'), upload.single('image'), (req, res) => {
  res.json({ imageUrl: `/uploads/products/${path.basename(req.file.path)}` });
});

export default router;
