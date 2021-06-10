const User = require('../models/userModel');

const userController = {};

userController.findUser = async (req, res, next) => {
  try {
    const user = await User.findOne({ authToken: req.params.authToken }).exec();
    res.locals.user = user;
    return next();
  } catch (error) {
    // ! update error handling
    console.log({ error });
  }
};

userController.createUser = async (req, res, next) => {
  // skip the create user middleware if the user already exists
  if (res.locals.user) {
    return next();
  }
  try {
    const user = await User.create({
      authToken: req.params.authToken,
      companyList: [],
    });
    res.locals.user = user;
    return next();
  } catch (error) {
    // ! update error handling
    console.log({ error });
  }
};

userController.addCompany = async (req, res, next) => {
  try {
    // destructure the request body fields to be used in the user document update
    const { companyName, role, city, applied, contacts, notes } = req.body;

    // find the user document with the matching auth token
    const user = await User.findOne({ authToken: req.body.authToken }).exec();

    // access the user's companyList and push the new company
    const companyList = user.companyList;
    companyList.push({ companyName, role, city, applied, contacts, notes });

    // update the user document in the database
    const updatedUser = await User.findOneAndUpdate(
      { authToken: req.body.authToken },
      { $set: { companyList: companyList } },
      { new: true }
    ).exec();

    // save the updated user in res.locals to send back to frontend in response
    res.locals.companyList = updatedUser.companyList;

    return next();
  } catch (e) {
    // ! update error handling
    console.log({ error });
  }
};

module.exports = userController;
