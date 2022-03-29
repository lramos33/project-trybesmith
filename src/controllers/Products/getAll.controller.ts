import { Request, Response, NextFunction } from 'express';
import productService from '../../services/Products';

const getAll = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await productService.getAll();
    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

export default getAll;