export default function (sequelize, DataTypes) {
  const UserServerMapping = sequelize.define(
    'UserServerMapping',
    {},
    { timestamps: false },
  );
  return UserServerMapping;
}
