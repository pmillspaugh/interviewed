require('dotenv').config();

const authController = {};

authController.googleClientId = (req, res, next) => {
  try {
    res.locals.googleClientId = process.env.GOOGLE_OAUTH_CLIENT_ID;
    return next();
  } catch (e) {
    // TODO: error handling
    console.log({ error: e });
  }
};

// not used currently
// TODO: set up proper backend auth
authController.googleSignIn = (req, res, next) => {
  return next();
};

module.exports = authController;
