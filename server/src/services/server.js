import ServerController from '../controllers/server.js';
import UserServerMappingController from '../controllers/userServerMapping.js';
export const createServer = async (req, res, next) => {
  const { userId } = req;
  const { serverName } = req.body;

  const values = {
    ownerId: userId,
    name: serverName,
  };
  try {
    let server = await ServerController.create(values);
    if (!server) {
      throw new Error('error while creating server');
    }
    await server.addUser(userId);
    // await createUsersServerMapping(server, [userId]);
    return res.status(200).json({ sucess: 1, server });
  } catch (error) {
    error.status = 403;
    next(error);
  }
};

export const getAllServer = async (req, res, next) => {
  const { userId } = req;
  try {
    const servers = await ServerController.getAllServer(userId);
    if (!servers) {
      throw new Error('error while fetching servers');
    }
    console.log('servers', servers);
    return res.status(200).json({ success: 1, servers });
  } catch (error) {
    error.status = 403;
    next(error);
  }
};
export const getOneServer = async (req, res, next) => {
  const { userId } = req;
  const { serverId } = req.params;
  try {
    const server = await ServerController.getOneById(userId, serverId);
    if (!server) {
      throw new Error('error while fetching servers');
    }
    console.log('servers', server);
    return res.status(200).json({ success: 1, server });
  } catch (error) {
    error.status = 403;
    next(error);
  }
};

export const createUsersServerMapping = async (server, users) => {
  try {
    const userIdAndServerIdArrays = users.map((userId) => {
      return {
        ServerId: server.id,
        UserId: userId,
      };
    });
    await UserServerMappingController.create(userIdAndServerIdArrays);
  } catch (error) {
    throw error;
  }
};
