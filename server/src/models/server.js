export default function (sequelize, DataTypes) {
  const Server = sequelize.define('Server', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Server.associate = (models) => {
    // Server owner
    Server.belongsTo(models.User, { foreignKey: 'ownerId', as: 'Owner' });

    // Channels and categories
    Server.hasMany(models.Channel, { foreignKey: 'serverId' });
    Server.hasMany(models.ChannelCategory, { foreignKey: 'serverId' });

    // Many-to-many members
    Server.belongsToMany(models.User, {
      through: models.UserServerMapping,
      foreignKey: 'serverId',
      otherKey: 'userId',
      as: 'ServerMembers',
    });

    // For include chaining
    Server.hasMany(models.UserServerMapping, { foreignKey: 'serverId' });
  };

  return Server;
}
