import db from '../models/index.js';

// const channel = db.ChannelCategory;

const ChannelCategoryController = {};

ChannelCategoryController.create = async (values) => {
  console.log('channelController', values);
  const channelCategory = await db.ChannelCategory.create(values);
  if (!channelCategory) {
    throw new Error('something went wrong');
  }
  return channelCategory;
};

ChannelCategoryController.getOneById = async (channelCategoryId) => {
  const filter = {
    where: {
      id: channelCategoryId,
    },
  };
  return db.ChannelCategory.findOne(filter);
};

ChannelCategoryController.deleteById = async (channelCategoryId) => {
  const filter = {
    where: {
      id: channelCategoryId,
    },
  };
  return db.ChannelCategory.findOne(filter);
};

ChannelCategoryController.getAllByServerId = async (serverId) => {
  const filter = {
    where: {
      serverId,
    },
  };
  return db.ChannelCategory.findAll(filter);
};

export default ChannelCategoryController;
