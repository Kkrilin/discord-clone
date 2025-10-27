export default function (sequelize, DataTypes) {
  const Channel = sequelize.define(
    'Channel',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4, // Or DataTypes.UUIDV1
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {},
  );

  Channel.associate = (models) => {
    Channel.belongsTo(models.User, {
      foreignKey: 'creatorId',
      as: 'ChannelCreator',
    });
    Channel.belongsTo(models.Server, { foreignKey: 'serverId' });
    Channel.hasMany(models.Message, { foreignKey: 'channelId' });
    Channel.belongsTo(models.ChannelCategory, {
      foreignKey: 'channelCategoryId',
    });
    Channel.belongsToMany(models.User, {
      through: 'UserChannelMapping',
      foreignKey: 'channelId',
      otherKey: 'userId',
      as: 'ChannelMembers',
    });

    //  for include chaining
    Channel.hasMany(models.UserChannelMapping, { foreignKey: 'channelId' })
  };

  return Channel;
}
