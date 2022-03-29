import { Request, Response, NextFunction } from 'express';
import productService from '../../services/Products';

const create = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const product = req.body;
    const result = await productService.create(product);
    return res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

export default create;