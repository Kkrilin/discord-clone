import express from 'express';
import { registerUser, login } from '../services/user.js';
import { validateSignUp, validateLogin } from '../middleware/userAuth.js';

const router = express().router;

router.post('/signup', validateSignUp, registerUser);
router.post('/login', validateLogin, login);
// router.post('/', updateUser);

export default router;
