export default function (sequelize, DataTypes) {
  const UserChannelMapping = sequelize.define(
    'UserChannelMapping',
    {
      userId: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
      },
      channelId: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
      },
      role: {
        type: DataTypes.ENUM('owner', 'admin', 'moderator', 'member'),
        defaultValue: 'member',
      },
      nickname: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      joinedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    },
    { timestamps: false },
  );

  UserChannelMapping.associate = (models) => {
    UserChannelMapping.belongsTo(models.User, { foreignKey: 'userId' });
    UserChannelMapping.belongsTo(models.Channel, { foreignKey: 'channelId' });
  };
  return UserChannelMapping;
}
