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
// import  middleware
import errorHandler from './middleware/errorHandlers.js';
import { authenticate } from './middleware/userAuth.js';

const app = express();
const port = config.serverPort || 3000;
const server = createServer(app);
const io = new Server(server, {
  connectionStateRecovery: {},
});

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

const corsOptions = {
  origin: config.clientUrl, // e.g., https://myapp.com
  credentials: true, // allow cookies to be sent
};
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));
app.use(express.static('public'));

// check server is running

// user router
app.use('/auth', authRouter);

const __dirname = dirname(fileURLToPath(import.meta.url));

app.get('/', (req, res) => {
  res.sendFile(join(__dirname, 'index.html'));
});
// Middleware to handle "route not found" errors and log them
app.use((req, res, next) => {
  const errorMessage = `Route not found: ${req.method} ${req.originalUrl}`;
  logger.warn(errorMessage);
  res.status(404).json({ error: 'Router not Found', message: errorMessage });
});

// Middleware to handle all other errors and log them
app.use(errorHandler);

io.on('connection', (socket) => {
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });
});

server.listen(port, () => {
  logger.info(`server is running on ${port}`);
});
