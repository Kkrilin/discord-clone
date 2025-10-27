export default function (sequelize, DataTypes) {
  const UserServerMapping = sequelize.define(
    'UserServerMapping',
    {
      userId: {
        type: DataTypes.UUID,
        primaryKey: true,
      },
      serverId: {
        type: DataTypes.UUID,
        primaryKey: true,
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

  UserServerMapping.associate = (models) => {
    UserServerMapping.belongsTo(models.User, { foreignKey: 'userId' });
    UserServerMapping.belongsTo(models.Server, { foreignKey: 'serverId' });
  };

  return UserServerMapping;
}
