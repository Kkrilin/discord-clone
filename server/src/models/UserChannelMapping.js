export default function (sequelize, DataTypes) {
  const UserChannelMapping = sequelize.define(
    'UserChannelMapping',
    {},
    { timestamps: false },
  );
  return UserChannelMapping;
}
