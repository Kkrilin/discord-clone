export default function (sequelize, DataTypes) {
  const Message = sequelize.define(
    'Message',
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
      content: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      timeStamp: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
    },
    {},
  );

  Message.associate = (models) => {
    Message.belongsTo(models.User, { foreignKey: 'userId' });
    Message.belongsTo(models.Channel, { foreignKey: 'channelId' });
  };

  return Message;
}
