import express from 'express';
import { createMessage, getAllMessageByDmId } from '../services/message.js';
const router = express();

router.post('/', createMessage);
router.get('/direct-message/:dmId', getAllMessageByDmId);
// router.get('/channel/:channelId', getAllMessage);

export default router;
