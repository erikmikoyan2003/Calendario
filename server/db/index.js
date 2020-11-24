const { Sequelize } = require("sequelize");

const {
  defineSessionModel,
  defineSessionRelations,

  defineUserModel,
  defineUserRelations,
} = require("./models/index");

const sequelize = new Sequelize({
  dialect: "sqlite",
  host: "localhost",
  storage: "./db/data.sqlite",

  define: {
    timestamps: false,
  },
  logging: false,
});

defineSessionModel(sequelize);
defineUserModel(sequelize);

defineSessionRelations(sequelize);
defineUserRelations(sequelize);

// TODO определить модели
sequelize.sync().then(() => {
  console.log("[database] Synced successfully");
});

const { user: User, session: Session } = sequelize.models;

exports.sequelize = sequelize;

exports.User = User;
exports.Session = Session;
