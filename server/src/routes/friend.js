import express from 'express';
import { allFriend } from '../services/friend.js';
const router = express();

router.get('/', allFriend);

export default router;
