import db from '../models/index.js';

export const allFriend = async (req, res, next) => {
  const { userId } = req;
  try {
    const filter = {
      where: {
        [db.Op.or]: [{ user1_id: userId }, { user2_id: userId }],
      },
      include: [
        {
          model: db.User,
          as: 'User1',
          attributes: { exclude: ['password'] },
        },
        {
          model: db.User,
          as: 'User2',
          attributes: { exclude: ['password'] },
        },
      ],
    };
    const friends = await db.Friend.findAll(filter);
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
