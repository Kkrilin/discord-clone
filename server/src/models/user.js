export default function (sequelize, DataTypes) {
  const User = sequelize.define(
    'User',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4, // Or DataTypes.UUIDV1
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
        // unique: true,
        // allowNull: false,
      },
      avatarUrl: {
        type: DataTypes.STRING,
      },
      dateOfBirth: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      status: {
        type: DataTypes.ENUM,
        allowNull: false,
        defaultValue: 'online',
        values: ['online', 'invisible', 'idle', 'dnd'],
      },
      userSettings: {
        type: DataTypes.JSON,
        allowNull: false,
        defaultValue: () => ({}),
      },
    },
    {},
  );

  User.associate = (models) => {
    User.hasMany(models.Server, { foreignKey: 'ownerId', as: 'Owner' });
    User.hasMany(models.Message, { foreignKey: 'userId' });
    User.hasMany(models.FriendRequest, {
      foreignKey: 'senderId',
      as: 'Sender',
    });
    User.hasMany(models.FriendRequest, {
      foreignKey: 'receiverId',
      as: 'Receiver',
    });
    User.hasMany(models.Channel, {
      foreignKey: 'creatorId',
      as: 'ChannelCreator',
    });
    User.hasMany(models.ChannelCategory, {
      foreignKey: 'creatorId',
      as: 'ChannelCategoryCreator',
    });
    User.belongsToMany(models.Server, { through: 'UserServerMapping' });
    User.belongsToMany(models.Channel, { through: 'UserChannelMapping' });
    User.hasMany(models.UserServerMapping, { foreignKey: 'UserId' });
  };
  return User;
}
