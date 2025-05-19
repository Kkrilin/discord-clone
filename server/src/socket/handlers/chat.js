import MessageController from '../../controllers/message.js';

export const registerChatHandlers = (socket, io) => {
  socket.on('chat message', async (msg) => {
    try {
      const userName = socket.user.userName;
      const userId = socket.user.id;
      const { directMessageId, content, createdAt } = msg;
      const values = {
        userId,
        dmId: directMessageId,
        content,
        timeStamp: createdAt,
      };
      let message = await MessageController.createMessage(values);
      console.log('message', message);
      io.emit('chat message', {
        ...msg,
        content,
        userName,
      });
    } catch (error) {
      console.error('Failed to save message:', error);
    }
  });

  // Add more socket events here...
};
