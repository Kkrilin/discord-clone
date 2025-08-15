import db from '../models/index.js';

// const user = db.Mesage;

const UserServerMappingController = {};

UserServerMappingController.create = async (values) => {
  console.log('db', db.UserServerMapping.create);
  const userServerMapping = await db.UserServerMapping.create(values);
  if (!userServerMapping) {
    throw new Error('something went wrong while creating userServerMapping');
  }
  return Server;
};

export default UserServerMappingController;
