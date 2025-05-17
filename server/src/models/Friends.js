export default function (sequelize, DataTypes) {
  const Friend = sequelize.define(
    'Friend',
    {
      user1_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4, // Or DataTypes.UUIDV1
        primaryKey: true,
      },
      user2_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4, // Or DataTypes.UUIDV1
        primaryKey: true,
      },
      //   status: {
      //     type: DataTypes.ENUM,
      //     allowNull: false,
      //     defaultValue: 'pending',
      //     values: ['pending', 'accepted', 'rejected'],
      //   },
    },
    {
      paranoid: true,
      indexes: [
        {
          unique: true,
          fields: ['user1_id', 'user2_id'],
        },
      ],
    },
  );

  Friend.associate = (models) => {
    Friend.belongsTo(models.User, { foreignKey: 'user1_id', as: 'User1' });
    Friend.belongsTo(models.User, { foreignKey: 'user2_id', as: 'User2' });
  };

  return Friend;
}
