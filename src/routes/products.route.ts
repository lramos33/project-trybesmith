import express from 'express';
import productsController from '../controllers/Products/index';

const productsRouter = express.Router();

productsRouter.get(
  '/',
  productsController.getAll,
);

export default productsRouter;