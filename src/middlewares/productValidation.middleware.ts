import { Request, Response, NextFunction } from 'express';
import validations from '../services/Validations';

const productValidation = (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, amount } = req.body;
    const error = validations.productValidation(name, amount);
    if (error) {
      return res.status(error.code).json({ error: error.message });
    }
    next();
  } catch (error) {
    next(error);
  }
};

export default productValidation;