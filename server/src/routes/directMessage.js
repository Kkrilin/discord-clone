import express from 'express';
import { createDirectMessage } from '../services/directMessage.js';
const router = express();

router.post('/', createDirectMessage);

export default router;
