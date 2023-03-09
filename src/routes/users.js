const express=require('express');
const UsersController = require('../controllers/users');
const UsersRouter=express.Router();

UsersRouter.get('/',UsersController.get);

module.exports=UsersRouter