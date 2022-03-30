import express from 'express';
import usersController from '../controllers/Users';
import middlewares from '../middlewares';

const usersRouter = express.Router();

usersRouter.post(
  '/',
  middlewares.userValidation,
  usersController.create,
);

export default usersRouter;