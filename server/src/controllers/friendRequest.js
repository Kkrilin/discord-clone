import db from '../models/index.js';

// const friendRequest = db.FriendRequest;

const FriendRequestController = {};

//  create friend Request
FriendRequestController.createFriendRequest = async (values) => {
  const friendRequest = await db.FriendRequest.create(values);
  if (!friendRequest) {
    throw new Error('error sending request');
  }
  return friendRequest;
};

//  find one by recieverId

FriendRequestController.findOneByRevcieverId = async (receiverId) => {
  const filter = {
    where: {
      receiverId,
    },
  };
  return db.FriendRequest.findOne(filter);
};

//  find all by recieverId
FriendRequestController.findAllByRevcieverId = async (receiverId) => {
  const filter = {
    where: {
      receiverId,
    },
    include: [{ model: db.User, as: 'Receiver' }],
    include: [{ model: db.User, as: 'Sender' }],
  };
  return db.FriendRequest.findAll(filter);
};

//  find all by senderId
FriendRequestController.findAllBySenderId = async (senderId) => {
  const filter = {
    where: {
      senderId,
    },
    include: [{ model: db.User, as: 'Sender' }],
    include: [{ model: db.User, as: 'Receiver' }],
  };
  return db.FriendRequest.findAll(filter);
};

export default FriendRequestController;
