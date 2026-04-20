import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import authRoutes from './routes/auth.routes.js';
import productRoutes from './routes/product.routes.js';
import categoryRoutes from './routes/category.routes.js';
import orderRoutes from './routes/order.routes.js';
import userRoutes from './routes/user.routes.js';
import cartRoutes from './routes/cart.routes.js';
import wishlistRoutes from './routes/wishlist.routes.js';
import couponRoutes from './routes/coupon.routes.js';
import reviewRoutes from './routes/review.routes.js';
import analyticsRoutes from './routes/analytics.routes.js';
import uploadRoutes from './routes/upload.routes.js';
import { errorHandler } from './middleware/error.js';

dotenv.config();
const app = express();

app.use(cors({ origin: process.env.CORS_ORIGIN }));
app.use(express.json());
app.use('/uploads', express.static(path.resolve('uploads')));

app.get('/api/health', (_req, res) => res.json({ ok: true }));
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/users', userRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/wishlist', wishlistRoutes);
app.use('/api/coupons', couponRoutes);
app.use('/api/reviews', reviewRoutes);
app.use('/api/analytics', analyticsRoutes);
app.use('/api/upload', uploadRoutes);

app.use(errorHandler);

export default app;
