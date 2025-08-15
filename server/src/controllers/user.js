import db from '../models/index.js';

// const user = db.User;

const UserController = {};

//  find user by name
UserController.findOneByName = (userName) => {
  const filter = {
    where: {
      userName,
    },
  };

  return db.User.findOne(filter);
};

//  find user by id
UserController.findOneById = (id, options = {}) => {
  const filter = {
    where: {
      id,
    },
    attributes: { exclude: ['password'] },
  };
  return db.User.findOne(filter);
};

// find user by email
UserController.findOneByEmail = (email) => {
  const filter = {
    where: {
      email,
    },
  };
  return db.User.findOne(filter);
};

// register the user
UserController.registerUser = async (values = {}) => {
  const registeredUser = await db.User.create(values);
  if (!registeredUser) {
    throw new Error('user failed to create');
  }
  return registeredUser;
};

// add server to userServerMapping

UserController.creatUserServerMapping = async (serverId) => {

  return db.User.addServer(valserverIdues)
}



export default UserController;
