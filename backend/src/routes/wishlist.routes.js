import { Router } from 'express';
import { addWishlist, getWishlist, removeWishlist } from '../controllers/wishlist.controller.js';
import { authenticate } from '../middleware/auth.js';

const router = Router();
router.get('/', authenticate, getWishlist);
router.post('/', authenticate, addWishlist);
router.delete('/:id', authenticate, removeWishlist);

export default router;
