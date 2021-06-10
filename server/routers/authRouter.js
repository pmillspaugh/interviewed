const express = require('express');
const authController = require('../controllers/authController');

const authRouter = express.Router();

authRouter.get(
  '/google/client-id',
  authController.googleClientId,
  (req, res) => {
    return res.status(200).json({ googleClientId: res.locals.googleClientId });
  }
);

// not used currently
// TODO: set up proper backend auth to verify token etc.
authRouter.get('/google', authController.googleSignIn, (req, res) => {
  return res.status(200).json({ message: '/api/sign-in/google response' });
});

module.exports = authRouter;
