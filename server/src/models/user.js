export default function (sequelize, DataTypes) {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    userName: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    displayName: {
      type: DataTypes.STRING,
    },
    avatarUrl: {
      type: DataTypes.STRING,
    },
    dateOfBirth: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM('online', 'invisible', 'idle', 'dnd'),
      defaultValue: 'online',
      allowNull: false,
    },
  });

  User.associate = (models) => {
    // Owned servers
    User.hasMany(models.Server, { foreignKey: 'ownerId', as: 'OwnedServers' });

    // Many-to-many servers
    User.belongsToMany(models.Server, {
      through: models.UserServerMapping,
      foreignKey: 'userId',
      otherKey: 'serverId',
      as: 'UserServers',
    });

    User.belongsToMany(models.Channel, {
      through: models.UserChannelMapping,
      foreignKey: 'userId',
      otherKey: 'ChannelId',
      as: 'UserChannels',
    });

    // For include chaining
    User.hasMany(models.UserServerMapping, { foreignKey: 'userId' });
    User.hasMany(models.UserChannelMapping, { foreignKey: 'userId' });

    // Other relationships
    User.hasMany(models.Message, { foreignKey: 'userId' });
    User.hasMany(models.FriendRequest, {
      foreignKey: 'senderId',
      as: 'SentRequests',
    });
    User.hasMany(models.FriendRequest, {
      foreignKey: 'receiverId',
      as: 'ReceivedRequests',
    });
    User.hasMany(models.Channel, {
      foreignKey: 'creatorId',
      as: 'CreatedChannels',
    });
    User.hasMany(models.ChannelCategory, {
      foreignKey: 'creatorId',
      as: 'CreatedCategories',
    });
  };

  return User;
}
