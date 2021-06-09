require('dotenv').config();

const authController = {};

authController.googleClientId = (req, res, next) => {
  try {
    console.log('MIDDLEWARE: authController.googleClientId');
    res.locals.googleClientId = process.env.GOOGLE_OAUTH_CLIENT_ID;
    return next();
  } catch (e) {
    // TODO: error handling
    console.log({ error: e });
  }
};

authController.googleSignIn = (req, res, next) => {
  console.log('MIDDLEWARE: authController.googleSignIn');
  return next();
};

module.exports = authController;
