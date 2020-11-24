const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("..");

const { genToken } = require("../../tools");

class Session extends Model {
  get accessTokenExpired() {
    return this.accessTokenExpiresAt < Date.now();
  }

  get refreshTokenExpired() {
    return this.refreshTokenExpiresAt < Date.now();
  }
}

exports.defineSessionModel = (sequelize) => {
  const { models } = sequelize;

  const sessionAttributes = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    accessToken: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: () => genToken(),
    },
    accessTokenExpiresAt: {
      type: DataTypes.DATE,
      allowNull: false,
      // defaultValue: () => new Date(Date.now() + 1000 * 60 * 60 * 24),
      defaultValue: () => new Date(Date.now())
    },

    refreshToken: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: () => generateToken(),
    },
    refreshTokenExpiresAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: () => new Date(Date.now() + 1000 * 60 * 60 * 24),
    },
  };

  Session.init(sessionAttributes, {
    sequelize,
    modelName: "session",
  });
};

exports.defineSessionRelations = (sequelize) => {
  const { models } = sequelize;
  
  models.session.belongsTo(models.user, {
    onDelete: "Cascade",
  });
};
