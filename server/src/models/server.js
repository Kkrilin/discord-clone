export default function (sequelize, DataTypes) {
  const Server = sequelize.define(
    'Server',
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

  Server.associate = (models) => {
    Server.belongsTo(models.User, { foreignKey: 'ownerId', as: 'Owner' });
    Server.hasMany(models.Channel, { foreignKey: 'serverId' });
    Server.hasMany(models.ChannelCategory, { foreignKey: 'serverId' });
    Server.belongsToMany(models.User, { through: 'UserServerMapping' });
    Server.hasMany(models.UserServerMapping, { foreignKey: 'ServerId' });
  };

  return Server;
}
