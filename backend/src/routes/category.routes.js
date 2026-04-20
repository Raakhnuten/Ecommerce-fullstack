import { Router } from 'express';
import { createCategory, deleteCategory, listCategories, updateCategory } from '../controllers/category.controller.js';
import { authenticate, authorize } from '../middleware/auth.js';

const router = Router();
router.get('/', listCategories);
router.post('/', authenticate, authorize('admin'), createCategory);
router.put('/:id', authenticate, authorize('admin'), updateCategory);
router.delete('/:id', authenticate, authorize('admin'), deleteCategory);

export default router;
