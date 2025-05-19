import jwt from 'jsonwebtoken';
import config from '../config/config.js';
import UserController from '../controllers/user.js';

export const socketAuthMiddleware = (io) => {
  io.use(async (socket, next) => {
    const token = socket.handshake?.auth?.token;
    console.log('token111111111', socket.handshake.auth.token);
    if (!token) {
      return next(new Error('Authentication error: Token required'));
    }
    try {
      const decoded = jwt.verify(token, config.secretKey);
      const user = await UserController.findOneById(decoded.id);
      socket.user = user;
      next();
    } catch (err) {
      console.error('Socket auth error:', err.message);
      next(new Error('Authentication error: Invalid token'));
    }
  });
};
