import { Router } from 'express';
import { createProduct, deleteProduct, getProduct, getProducts, updateProduct } from '../controllers/product.controller.js';
import { authenticate, authorize } from '../middleware/auth.js';

const router = Router();
router.get('/', getProducts);
router.get('/:id', getProduct);
router.post('/', authenticate, authorize('admin'), createProduct);
router.put('/:id', authenticate, authorize('admin'), updateProduct);
router.delete('/:id', authenticate, authorize('admin'), deleteProduct);

export default router;
