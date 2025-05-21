import express from 'express';
import { createServer, getAllServer, getOneServer } from '../services/server.js';
const router = express();

router.post('/', createServer);
router.get('/:serverId', getOneServer);
router.get('/', getAllServer);

export default router;
