import db from '../models/index.js';

// const user = db.Mesage;

const ServerController = {};

ServerController.create = async (values) => {
  const Server = await db.Server.create(values);
  if (!Server) {
    throw new Error('something went wrong');
  }
  return Server;
};

ServerController.getOneById = async (ownerId, serverId) => {
  const filter = {
    where: {
      ownerId,
      id: serverId,
    },
    include: [
      {
        model: db.Channel,
      },
    ],
  };
  return db.Server.findOne(filter);
};

ServerController.getAllServer = async (ownerId) => {
  const filter = {
    where: {
      ownerId,
    },
  };
  return db.Server.findAll(filter);
};

export default ServerController;
