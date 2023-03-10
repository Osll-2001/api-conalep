const express=require('express');
const UsersController = require('../controllers/users');
const UsersRouter=express.Router();

UsersRouter.get('/',UsersController.get);
UsersRouter.get('/:id',UsersController.getById);
UsersRouter.post('/',UsersController.create);
UsersRouter.put('/:id',UsersController.updateComplete);
UsersRouter.delete('/:id',UsersController.delete);

module.exports=UsersRouter