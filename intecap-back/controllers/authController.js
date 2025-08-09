
const User = require('../models/User');
const db = require('../config');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // console.log('Registering user with email:', db.models.User.findOne());

    const existingUser = await db.models.User.findOne({ where: { email } });
    if (existingUser) return res.status(400).json({ message: 'Email ya registrado' });

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await db.models.User.create({ username, email, password: hashedPassword });

    res.status(201).json({ message: 'Usuario creado', userId: newUser.id });
  } catch (error) {
    console.error('Error al registrar usuario:', error);
    res.status(500).json({ message: 'Error en el servidor' });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await db.models.User.findOne({ where: { email } });
    if (!user) {
      console.error('Usuario no encontrado con email:', email);
      return res.status(400).json({ message: 'Email o contraseña incorrectos' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      console.error('Contraseña incorrecta para el usuario:', email);
      return res.status(400).json({ message: 'Email o contraseña incorrectos' });
    }

    const token = jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ message: 'Error en el servidor' });
  }
};
