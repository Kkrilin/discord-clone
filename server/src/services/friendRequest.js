import FriendRequestController from '../controllers/friendRequest.js';
import UserController from '../controllers/user.js';
import db from '../models/index.js';

export const createFriendRequest = async (req, res, next) => {
  const { requestTo } = req.body;
  const { userId } = req;
  console.log(userId, 'userId');
  try {
    const recieverUser = await UserController.findOneByName(requestTo);
    if (!recieverUser) {
      throw new Error(`${requestTo} user does not exist`);
    }
    const existRequest = await FriendRequestController.findOneByRevcieverId(
      recieverUser.id,
    );
    if (existRequest) {
      throw new Error('friend request already sent');
    }
    const values = {
      receiverId: recieverUser.id,
      senderId: userId,
      status: 'pending',
    };
    console.log('value', values);
    const friendRequest =
      await FriendRequestController.createFriendRequest(values);
    res.status(201).json({ success: 1, message: ' friend request send' });
  } catch (error) {
    error.status = 403;
    next(error);
  }
};

export const allRequest = async (req, res, next) => {
  const { userId } = req;
  try {
    const receivedRequest =
      await FriendRequestController.findAllByRevcieverId(userId);
    const sentRequest = await FriendRequestController.findAllBySenderId(userId);
    res
      .status(200)
      .json({ success: 1, data: { receivedRequest, sentRequest } });
  } catch (error) {
    error.status = 403;
    next(error);
  }
};

export const acceptFriendRequest = async (req, res, next) => {
  const { id } = req.params;
  const userId = req;
  try {
    const friendRequest = await FriendRequestController.findOneById(id);

    if (!friendRequest) {
      return res
        .status(404)
        .json({ success: 0, message: 'Friend request not found' });
    }
    const [user1_id, user2_id] = [
      friendRequest.senderId,
      friendRequest.receiverId,
    ].sort();

    friendRequest.status = 'accepted';
    await friendRequest.save();

    const friend = await db.Friend.create({ user1_id, user2_id });

    res.status(201).json({ success: 1, friend });
  } catch (error) {
    error.status = 403;
    next(error);
  }
};

export const rejectFriendRequest = async (req, res, next) => {
  const { id } = req.params;
  const userId = req;
  try {
    const friendRequest = await FriendRequestController.findOneById(id);
    if (!friendRequest) {
      throw new Error('request does not exist');
    }
    await db.FriendRequest.destroy({ where: { id } });
    res.status(201).json({ success: 1, message: 'request rejected' });
  } catch (error) {
    error.status = 403;
    next(error);
  }
};
