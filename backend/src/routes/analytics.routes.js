import { Router } from 'express';
import { getOverview } from '../controllers/analytics.controller.js';
import { authenticate, authorize } from '../middleware/auth.js';

const router = Router();
router.get('/overview', authenticate, authorize('admin'), getOverview);

export default router;
