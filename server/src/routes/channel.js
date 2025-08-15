import express from 'express';
import { createChannel, getChannel } from '../services/channel.js';
const router = express();

router.post('/:serverId', createChannel);
router.get('/:channelId', getChannel);

export default router;
