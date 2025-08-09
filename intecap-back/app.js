require('dotenv').config();
const express = require('express');
const sequelize = require('./config/db');
// setup cors
const cors = require('cors');



const authRoutes = require('./routes/auth');
const productRoutes = require('./routes/products');

const User = require('./models/User');
const Product = require('./models/Product');

const app = express();
app.use(express.json());
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  credentials: true // si usas cookies o autenticación con credenciales
}));

app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
const PORT = process.env.PORT || 3000;

sequelize.sync({ alter: true }).then(() => {
  console.log('Base de datos conectada');
  app.listen(PORT, () => {
    console.log(`Servidor escuchando en puerto ${PORT}`);
  });
}).catch(err => console.error('Error al conectar con la base de datos:', err));
