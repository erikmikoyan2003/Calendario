const {
  hash: bcryptHash,
  genSalt: bcryptGenSalt,
  compare: bcryptCompare
} = require('bcrypt');

const { Model, DataTypes } = require("sequelize");

class User extends Model {
}

async function genPasswordHash(user) {
  if (!user.changed("password")) {
    return;
  }

  const salt = await bcryptGenSalt();
  const hash = await bcryptHash(user.password, salt);

  user.password = hash;

  delete user.lastChangePasswordAt;
}

exports.defineUserModel = (sequelize) => {
  const userAttributes = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    login: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    mail: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    lastChangePasswordAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },

    profilePhoto: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  };

  User.init(userAttributes, {
    sequelize,
    modelName: "user",
  });

  User.beforeCreate(genPasswordHash);
  User.beforeUpdate(genPasswordHash);
};

exports.defineUserRelations = (sequelize) => {}