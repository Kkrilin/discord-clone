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

ChannelController.getOneById = async (userId, channelId) => {
  const filter = {
    where: {
      creatorId: userId,
      id: channelId,
    },
    include:[{
      model: db.Server,
      include: [ {
        model: db.UserServerMapping,
        include: [
          {
            model: db.User,
            attributes: ['id',  'userName', 'displayName', 'avatarUrl', 'status']
          }
        ]
      }
      ]
    }]
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
