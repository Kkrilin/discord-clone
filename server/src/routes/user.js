import express from 'express';
import { getUser, updateUserStatus } from '../services/user.js';

const router = express().router;

router.get('/', getUser);
router.post('/', updateUserStatus);

export default router;
