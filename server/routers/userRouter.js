const express = require('express');
const userController = require('../controllers/userController');

const userRouter = express.Router();

// find the user in the database, or create user if no user with that token exists
userRouter.get(
  '/:authToken',
  userController.findUser,
  userController.createUser,
  (req, res) => {
    return res.status(200).json(res.locals.user);
  }
);

userRouter.post('/add-company', userController.addCompany, (req, res) => {
  return res.status(201).json(res.locals.companyList);
});

userRouter.put('/delete-company', userController.deleteCompany, (req, res) => {
  return res.status(201).json(res.locals.companyList);
})

module.exports = userRouter;
