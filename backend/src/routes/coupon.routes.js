import { Router } from 'express';
import { createCoupon, listCoupons, updateCoupon } from '../controllers/coupon.controller.js';
import { authenticate, authorize } from '../middleware/auth.js';

const router = Router();
router.get('/', authenticate, authorize('admin'), listCoupons);
router.post('/', authenticate, authorize('admin'), createCoupon);
router.put('/:id', authenticate, authorize('admin'), updateCoupon);

export default router;
