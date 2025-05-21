import ChannelController from '../controllers/channel.js';

export const createChannel = async (req, res, next) => {
  const { userId } = req;
  const { serverId } = req.params;
  const { channelName } = req.body;
  console.log(userId, serverId, channelName, 777777777);
  const values = {
    creatorId: userId,
    name: channelName,
    serverId,
  };
  try {
    let channel = await ChannelController.create(values);
    if (!channel) {
      throw new Error('error while creating channel');
    }
    return res.status(200).json({ sucess: 1, channel });
  } catch (error) {
    error.status = 403;
    next(error);
  }
};

// export const getAllServer = async (req, res, next) => {
//   const { userId } = req;
//   try {
//     const servers = await ServerController.getAllServer(userId);
//     if (!servers) {
//       throw new Error('error while fetching servers');
//     }
//     console.log('servers', servers);
//     return res.status(200).json({ success: 1, servers });
//   } catch (error) {
//     error.status = 403;
//     next(error);
//   }
// };
