import db from '../models/index.js';

// const user = db.Friend;

const FriendController = {};

//  find friend by UserId
FriendController.getAllFriend = (userId) => {
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
  return db.Friend.findAll(filter);
};

export default FriendController;
