import { Router } from 'express';
import { addToCart, getCart, removeCartItem } from '../controllers/cart.controller.js';
import { authenticate } from '../middleware/auth.js';

const router = Router();
router.get('/', authenticate, getCart);
router.post('/', authenticate, addToCart);
router.delete('/:id', authenticate, removeCartItem);

export default router;
