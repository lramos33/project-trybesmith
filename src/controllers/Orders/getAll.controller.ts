import { Request, Response, NextFunction } from 'express';
import orderService from '../../services/Orders';

const getAll = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await orderService.getAll();
    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

export default getAll;