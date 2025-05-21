export default function (sequelize, DataTypes) {
  const ChannelCategory = sequelize.define(
    'ChannelCategory',
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

  ChannelCategory.associate = (models) => {
    ChannelCategory.belongsTo(models.User, { foreignKey: 'creatorId', as: 'ChannelCategoryCreator' });
    ChannelCategory.belongsTo(models.Server, { foreignKey: 'serverId' });
    ChannelCategory.hasMany(models.Channel, { foreignKey: 'channelCategoryId' });
  };

  return ChannelCategory;
}
