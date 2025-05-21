import db from '../models/index.js';

// const user = db.Channel;

const ChannelController = {};

ChannelController.create = async (values) => {
  console.log('channelController', values);
  const Channel = await db.Channel.create(values);
  if (!Channel) {
    throw new Error('something went wrong');
  }
  return Channel;
};

ChannelController.getOneById = async (channelId) => {
  const filter = {
    where: {
      id: channelId,
    },
  };
  return db.Channel.findOne(filter);
};

ChannelController.deleteById = async (channelId) => {
  const filter = {
    where: {
      id: channelId,
    },
  };
  return db.Channel.findOne(filter);
};

ChannelController.getAllByServerId = async (serverId) => {
  const filter = {
    where: {
      serverId,
    },
  };
  return db.Channel.findAll(filter);
};

export default ChannelController;
