import db from '../models/index.js';

// const user = db.DirectMesage;

const DirectMessageController = {};

//  find all Message by user and directMessage
DirectMessageController.getDirectMessage = (user1Id, user2Id) => {
  const filter = {
    where: {
      [db.Op.or]: [
        { [db.Op.and]: [{ user1_id: user1Id }, { user2_id: user2Id }] },
        { [db.Op.and]: [{ user1_id: user2Id }, { user2_id: user1Id }] },
      ],
    },
    // include: [
    //   {
    //     model: db.User,
    //     as: 'User1',
    //     attributes: { exclude: ['password'] },
    //   },
    //   {
    //     model: db.User,
    //     as: 'User2',
    //     attributes: { exclude: ['password'] },
    //   },
    // ],
  };
  return db.DirectMessage.findOne(filter);
};

DirectMessageController.getDirectMessageByUserID = async (userId, dmId) => {
  const filter = {
    where: {
      id: dmId,
      [db.Op.or]: [{ user1_id: userId }, { user2_id: userId }],
    },
  };
  return db.DirectMessage.findOne(filter);
};
DirectMessageController.createDirectMessage = async (values) => {
  const directMessage = await db.DirectMessage.create(values);
  if (!directMessage) {
    throw new Error(`can't open DM`);
  }
  return directMessage;
};

export default DirectMessageController;
