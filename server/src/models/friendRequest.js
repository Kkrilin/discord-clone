export default function (sequelize, DataTypes) {
  const FriendRequest = sequelize.define(
    'FriendRequest',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4, // Or DataTypes.UUIDV1
        primaryKey: true,
      },
      status: {
        type: DataTypes.ENUM,
        allowNull: false,
        values: ['pending', 'accepted', 'rejected'],
      },
    },
    {},
  );

  FriendRequest.associate = (models) => {
    FriendRequest.belongsTo(models.User, { foreignKey: 'senderId', as: 'Sender' });
    FriendRequest.belongsTo(models.User, { foreignKey: 'receiverId', as: 'Receiver' });
  };

  return FriendRequest;
}
