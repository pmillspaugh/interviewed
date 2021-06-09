const express = require('express');
const authController = require('../controllers/authController');

const authRouter = express.Router();

authRouter.get(
  '/google/client-id',
  authController.googleClientId,
  (req, res) => {
    console.log('MIDDLEWARE: authRouter GET /google/client-id middleware');
    return res.status(200).json({ googleClientId: res.locals.googleClientId });
  }
);

authRouter.get('/google', authController.googleSignIn, (req, res) => {
  console.log('MIDDLEWARE: authRouter GET /google anon middleware');
  return res.status(200).json({ message: '/api/sign-in/google response' });
});

module.exports = authRouter;
