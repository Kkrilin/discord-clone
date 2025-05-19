import db from '../models/index.js';

// const user = db.Mesage;

const MessageController = {};

MessageController.createMessage = async (values) => {
  const Message = await db.Message.create(values);
  if (!Message) {
    throw new Error('something went wrong');
  }
  return Message;
};

MessageController.findAllMessageByDmId = async (dmId) => {
  const filter = {
    where: {
      dmId,
    },
    include: [
      {
        model: db.User,
        attributes: { exclude: ['password'] },
      },
    ],
    order: [['createdAt', 'ASC']],
  };
  return db.Message.findAll(filter);
};

export default MessageController;
