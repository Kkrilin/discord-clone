export default function (sequelize, DataTypes) {
  const DirectMessage = sequelize.define(
    'DirectMessage',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4, // Or DataTypes.UUIDV1
        primaryKey: true,
      },
      user1_id: {
        type: DataTypes.UUID,
        allowNull: false,
        // defaultValue: DataTypes.UUIDV4, // Or DataTypes.UUIDV1
        // primaryKey: true,
      },
      user2_id: {
        type: DataTypes.UUID,
        allowNull: false,
        // defaultValue: DataTypes.UUIDV4, // Or DataTypes.UUIDV1
        // primaryKey: true,
      },
      active: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
      },
    },
    {
      //   indexes: [
      //     {
      //       unique: true,
      //       fields: ['user1_id', 'user2_id'],
      //     },
      //   ],
    },
  );

  DirectMessage.associate = (models) => {
    DirectMessage.belongsTo(models.User, {
      foreignKey: 'user1_id',
      as: 'User1',
    });
    DirectMessage.belongsTo(models.User, {
      foreignKey: 'user2_id',
      as: 'User2',
    });
    DirectMessage.hasMany(models.Message, { foreignKey: 'dmId' });
  };

  return DirectMessage;
}
