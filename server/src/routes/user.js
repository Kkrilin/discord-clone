import express from 'express';
import { getUser } from '../services/user.js';

const router = express().router;

router.get('/', getUser);
// router.post('/', updateUser);

export default router;
