import { Router } from 'express';
import { listUsers, updateUser } from '../controllers/user.controller.js';
import { authenticate, authorize } from '../middleware/auth.js';

const router = Router();
router.get('/', authenticate, authorize('admin'), listUsers);
router.put('/:id', authenticate, authorize('admin'), updateUser);

export default router;
