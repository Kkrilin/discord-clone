import db from '../models/index.js';
import DirectMessageController from '../controllers/directMessage.js';

export const createDirectMessage = async (req, res, next) => {
  const { userId } = req;
  const { user } = req.body;

  const [user1_id, user2_id] = [userId, user.id].sort();
  const values = {
    user1_id,
    user2_id,
  };
  try {
    let directMessage = await DirectMessageController.getDirectMessage(
      user1_id,
      user2_id,
    );
    if (!directMessage) {
      directMessage = await DirectMessageController.createDirectMessage(values);
    }
    return res.status(200).json({ success: 1, directMessage });
  } catch (error) {
    error.status = 403;
    next(error);
  }
};
