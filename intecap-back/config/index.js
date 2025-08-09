const Sequelize = require("sequelize");
const initModels = require("../models/init-models");
const sequelize  = require("./db");

const db = {
    db:sequelize,
    User: initModels(sequelize),
};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.models = initModels(sequelize);

const conection = async function() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

conection()
module.exports = db;