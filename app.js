const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');
const resultRoutes = require('./routes/resultRoutes');
const User = require('./database/models/User');
const Result = require('./database/models/Result');
const {verifyToken} = require('./utils');
require('dotenv').config({ path: 'cheie.env' });
require('dotenv').config({path: 'token.env'});

User.hasMany(Result);

const app = express();
const port = 8080;

const corsOptions = {
  origin: 'http://localhost:3000',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
  allowedHeaders: 'Content-Type, Authorization',
};

app.use(cors(corsOptions));

app.use(express.json());


async function startServer() {
  try {
    await User.sync();
    await Result.sync();
    console.log('Tables synchronized successfully.');

    app.use('/user', userRoutes);
    app.use('/auth', authRoutes);
    app.use('/result', verifyToken, resultRoutes);

    app.listen(port, () => {
      console.log(`Server is running at http://localhost:${port}`);
    });
  } catch (error) {
    console.error('Error synchronizing with the database:', error);
  }
}

startServer();
