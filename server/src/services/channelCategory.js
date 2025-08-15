import ChannelCategoryController from '../controllers/channelCategory.js';

export const createChannelCategory = async (req, res, next) => {
  const { userId } = req;
  const { serverId } = req.params;
  const { channelCategoryName } = req.body;
  console.log(userId, serverId, channelCategoryName, 777777777);
  const values = {
    creatorId: userId,
    name: channelCategoryName,
    serverId,
  };
  try {
    let channelCategory = await ChannelCategoryController.create(values);
    if (!channelCategory) {
      throw new Error('error while creating channelCategory');
    }
    return res.status(200).json({
      sucess: 1,
      channelCategory: { ...channelCategory.toJSON(), Channels: [] },
    });











































































































































































































     













  } catch (error) {
    error.status = 403;
    next(error);
  }
};
