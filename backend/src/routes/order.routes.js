import { Router } from 'express';
import { createOrder, getAllOrders, getMyOrders, updateOrderStatus } from '../controllers/order.controller.js';
import { authenticate, authorize } from '../middleware/auth.js';

const router = Router();
router.post('/', authenticate, createOrder);
router.get('/me', authenticate, getMyOrders);
router.get('/', authenticate, authorize('admin'), getAllOrders);
router.patch('/:id/status', authenticate, authorize('admin'), updateOrderStatus);

export default router;
