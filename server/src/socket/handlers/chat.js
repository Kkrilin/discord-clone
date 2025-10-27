import MessageController from '../../controllers/message.js';

export const registerChatHandlers = (socket, io) => {
  // Handle user disconnect once
  socket.on('disconnect', () => {
    console.log(`User ${socket.user?.userName || 'unknown'} disconnected`);
  });

  // Handle chat messages
  socket.on('chat message', async (msg) => {
    try {
      const { directMessageId, content, createdAt } = msg;
      const { id: userId, userName } = socket.user;

      const values = {
        userId,
        dmId: directMessageId,
        content,
        timeStamp: createdAt,
      };

      // Save message in DB
      const message = await MessageController.createMessage(values);
      console.log('Message saved:', message);

      if (directMessageId) {
        const room = `dm:${directMessageId}`;
        // Ensure user is in the room
        socket.join(room);

        // Send message to room
        io.to(room).emit('chat message', {
          ...msg,
          content,
          userName,
        });
        return;
      }

      // Fallback: broadcast to everyone if not a DM
      io.emit('chat message', {
        ...msg,
        content,
        userName,
      });
    } catch (error) {
      console.error('Failed to save message:', error);
    }
  });
};

