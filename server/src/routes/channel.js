import express from 'express';
import { createChannel } from '../services/channel.js';
const router = express();

router.post('/:serverId', createChannel);
// router.get('/', getAllServer);

export default router;
