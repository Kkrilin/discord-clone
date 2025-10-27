import express from 'express';
import {
  createServer,
  getAllServer,
  getOneServer,
  sendServerInvite,
} from '../services/server.js';
const router = express();

router.post('/', createServer);
router.get('/:serverId', getOneServer);
router.get('/', getAllServer);
router.post('/invite', sendServerInvite);

export default router;
