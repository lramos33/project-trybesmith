import express from 'express';
import orderController from '../controllers/Orders';
// import middlewares from '../middlewares';

const ordersRouter = express.Router();

ordersRouter.get(
  '/',
  orderController.getAll,
);

export default ordersRouter;