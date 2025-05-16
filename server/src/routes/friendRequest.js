import express from 'express';
import { allRequest, createFriendRequest } from '../services/friendRequest.js';
const router = express();

router.post('/', createFriendRequest);
router.get('/', allRequest);

export default router;
