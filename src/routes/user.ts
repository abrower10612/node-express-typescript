import { Router } from 'express';
import { createUser } from '../controllers/user'

const router = Router();

router.get('/create-user', createUser)

export default router;