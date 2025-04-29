export default function (sequelize, DataTypes) {
  const User = sequelize.define(
    'User',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4, // Or DataTypes.UUIDV1
        primaryKey: true,
      },
      userName: {
        type: DataTypes.STRING,
        // unique: true,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      displayName: {
        type: DataTypes.STRING,
        // unique: true,
        // allowNull: false,
      },
      avatarUrl: {
        type: DataTypes.STRING,
        // unique: true,
        // allowNull: false,
      },
    },
    {},
  );

  User.associate = (models) => {
    User.hasMany(models.Server, { foreignKey: 'ownerId', as: 'Owner' });
    User.hasMany(models.Message, { foreignKey: 'userId' });
  };

  return User;
}
