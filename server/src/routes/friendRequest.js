import express from 'express';
import {
  acceptFriendRequest,
  allRequest,
  createFriendRequest,
  rejectFriendRequest,
} from '../services/friendRequest.js';
const router = express();

router.post('/', createFriendRequest);
router.post('/:id/accept', acceptFriendRequest);
router.post('/:id/reject', rejectFriendRequest);
router.get('/', allRequest);

export default router;
