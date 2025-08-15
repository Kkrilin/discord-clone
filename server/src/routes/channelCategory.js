import express from 'express';
import { createChannelCategory } from '../services/channelCategory.js';
const router = express();

router.post('/:serverId', createChannelCategory);
// router.get('/', getAllServer);

export default router;
