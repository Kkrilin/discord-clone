import express from 'express';
import config from './config/config.js';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import cors from 'cors';
import { logger, transport } from './helper/logger.js';
import { Server } from 'socket.io';
import db from './models/index.js';

import { createServer } from 'node:http';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

// import router
import authRouter from './routes/auth.js';
import userRouter from './routes/user.js';
import friendRequestRouter from './routes/friendRequest.js';
import friendRouter from './routes/friend.js';
import directMessageRouter from './routes/directMessage.js';
import messageRouter from './routes/message.js';
import serverRouter from './routes/server.js';
import channelRouter from './routes/channel.js';
import channelCategoryRouter from './routes/channelCategory.js';

// soket
import { initSocket } from './socket/index.js';

// import  middleware
import errorHandler from './middleware/errorHandlers.js';
import { authenticate } from './middleware/userAuth.js';

const app = express();
const port = config.serverPort || 3000;
const corsOptions = {
  origin: config.clientUrl, // e.g., https://myapp.com
  credentials: true, // allow cookies to be sent
};
const server = createServer(app);

// initailize socket connection
initSocket(server, corsOptions);

// Handle errors in the transport
transport.on('error', (error) => {
  logger.error('Error in DailyRotateFile transport:', error);
});

// Handle log rotation events
transport.on('rotate', (oldFilename, newFilename) => {
  logger.info(`Log file rotated: ${oldFilename} -> ${newFilename}`);
});

// MiddleWare to log requests
app.use((req, res, next) => {
  logger.info(`Logger initialized successfully ${req.method} ${req.url}`);
  next();
});

app.use(morgan(config.env === 'development' ? 'dev' : 'combined'));

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));
app.use(express.static('public'));

// check server is running

// user router
app.use('/auth', authRouter);
app.use('/api', authenticate);
app.use('/api/user', userRouter);
app.use('/api/friend-request', friendRequestRouter);
app.use('/api/friends', friendRouter);
app.use('/api/direct-message', directMessageRouter);
app.use('/api/messages', messageRouter);
app.use('/api/servers', serverRouter);
app.use('/api/channels', channelRouter);
app.use('/api/channel-categories', channelCategoryRouter);

const __dirname = dirname(fileURLToPath(import.meta.url));

app.get('/', (req, res) => {
  res.status(200).json({ success: 1, message: ' server is running' });
});
// Middleware to handle "route not found" errors and log them
app.use((req, res, next) => {
  const errorMessage = `Route not found: ${req.method} ${req.originalUrl}`;
  logger.warn(errorMessage);
  res.status(404).json({ error: 'Router not Found', message: errorMessage });
});

// Middleware to handle all other errors and log them
app.use(errorHandler);

server.listen(port, '0.0.0.0', () => {
  logger.info(
    `server is running on http://10.249.138.198:${port}`,
  );
});
