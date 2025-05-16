import FriendRequestController from '../controllers/friendRequest.js';
import UserController from '../controllers/user.js';

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
