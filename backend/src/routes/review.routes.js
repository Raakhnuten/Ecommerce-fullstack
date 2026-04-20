import { Router } from 'express';
import { addReview, listReviews } from '../controllers/review.controller.js';
import { authenticate } from '../middleware/auth.js';

const router = Router();
router.get('/', listReviews);
router.post('/', authenticate, addReview);

export default router;
