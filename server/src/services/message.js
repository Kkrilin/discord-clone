import db from '../models/index.js';
import MessageController from '../controllers/message.js';
import DirectMessageController from '../controllers/directMessage.js';

export const createMessage = async (req, res, next) => {
  const { userId } = req;
  const { dmId } = req.params;
  const { messageContent, timeStamp } = req.body;

  // const [user1_id, user2_id] = [userId, user.id].sort();
  const values = {
    userId,
    dmId,
    content: messageContent,
    timeStamp,
  };
  try {
    let message = await MessageController.createMessage(values);
    return res.status(200);
  } catch (error) {
    error.status = 403;
    next(error);
  }
};

export const getAllMessageByDmId = async (req, res, next) => {
  const { userId } = req;
  const { dmId } = req.params;
  try {
    if (!userId) {
      throw new Error('Authentication error: token required');
    }
    const directMessage =
      await DirectMessageController.getDirectMessageByUserID(userId, dmId);
    if (!directMessage) {
      throw new Error('Authentication error: token required');
    }

    let messages = await MessageController.findAllMessageByDmId(
      directMessage.id,
    );
    console.log('ssssssssssssss', messages[0].dataValues);
    messages = messages.map((msg) => {
      return {
        ...msg.toJSON(),
        userName: msg.User.userName,
      };
    });

    return res.status(200).json({ success: 1, messages });
  } catch (error) {
    error.status = 403;
    next(error);
  }
};
