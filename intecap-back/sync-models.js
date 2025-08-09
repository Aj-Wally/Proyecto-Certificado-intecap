const { Sequelize } = require('sequelize');
const path = require('path');

const sequelize = new Sequelize('root', 'db_store', 'tienda_pass123', {
    host: 'localhost',
    dialect: 'mysql', // o el dialecto de tu base de datos
    directory: path.join(__dirname, 'models'), // directorio donde se generarán los modelos
    additional: {
      timestamps: false, // personaliza según tus necesidades
    },
  });


const initModels = require('./src/models/init-models');
const models = initModels(sequelize);

sequelize.sync({ force: true }) // o { alter: true }
  .then(() => {
    console.log("Base de datos sincronizada.");
  })
  .catch(console.error);