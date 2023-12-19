const express = require('express');
const cors = require('cors');
//const session = require('express-session');
//const passport = require('passport');
//const LocalStrategy = require('passport-local').Strategy;
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');
const resultRoutes = require('./routes/resultRoutes');
const User = require('./database/models/User');
const Result = require('./database/models/Result');
const {verifyToken} = require('./utils');
require('dotenv').config({ path: 'cheie.env' });

User.hasMany(Result);

const app = express();
const port = 3000;

app.use(cors());
// Express middleware
app.use(express.json());

// Setup express-session middleware
// app.use(session({
//   secret: 'your-secret-key',
//   resave: false,
//   saveUninitialized: false,
// }));

// Initialize Passport
//app.use(passport.initialize());
//app.use(passport.session());

// Configure passport-local Strategy
// passport.use(new LocalStrategy(User.authenticate()));
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());

// Synchronize database and start the server
async function startServer() {
  try {
    await User.sync();
    await Result.sync();
    console.log('Tables synchronized successfully.');

    // Use userRoutes and resultRoutes
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
