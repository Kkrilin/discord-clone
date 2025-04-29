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
    // Channel.belongsTo(models.User, { foreignKey: 'userId', as: 'Owner' });
    Channel.belongsTo(models.Channel, { foreignKey: 'serverId' });
  };

  return Channel;
}
