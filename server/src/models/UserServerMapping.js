export default function (sequelize, DataTypes) {
  const UserServerMapping = sequelize.define(
    'UserServerMapping',
    {},
    { timestamps: false },
  );
  
  UserServerMapping.associate = (models) => {
    UserServerMapping.belongsTo(models.User, { foreignKey: 'UserId' });
    UserServerMapping.belongsTo(models.Server, { foreignKey: 'ServerId' });
  };
  return UserServerMapping;
}
