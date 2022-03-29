import express from 'express';
import productsController from '../controllers/Products/index';
import middlewares from '../middlewares';

const productsRouter = express.Router();

productsRouter.get(
  '/',
  productsController.getAll,
);

productsRouter.post(
  '/',
  middlewares.productValidation,
  productsController.create,
);

export default productsRouter;