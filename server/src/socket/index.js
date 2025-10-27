import { Server } from 'socket.io';
import { socketAuthMiddleware } from './middleware.js';
import { registerChatHandlers } from './handlers/chat.js';

export const initSocket = (server, corsOptions) => {
  const io = new Server(server, {
    connectionStateRecovery: {},
    cors: corsOptions,
  });
  socketAuthMiddleware(io);

  io.on('connection', (socket) => {
    console.log('Authenticated socket user:', socket.user?.userName);

    registerChatHandlers(socket, io);
  });
  return io;
};
