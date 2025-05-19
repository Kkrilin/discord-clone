import FriendController from '../controllers/friend.js';
import db from '../models/index.js';

export const allFriend = async (req, res, next) => {
  const { userId } = req;
  try {
    const friends = await FriendController.getAllFriend(userId);
    // Extract the *other* user from each friendship
    const result = friends.map((friend) => {
      const isUser1 = friend.user1_id === userId;
      const otherUser = isUser1 ? friend.User2 : friend.User1;

      return {
        id: otherUser.id,
        userName: otherUser.userName,
        displayName: otherUser.displayName,
        avatarUrl: otherUser.avatarUrl,
      };
    });

    return res.status(200).json({ success: 1, friends: result });
  } catch (error) {
    error.status = 403;
    next(error);
  }
};
