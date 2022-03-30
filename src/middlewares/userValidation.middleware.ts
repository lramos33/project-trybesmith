import { Request, Response, NextFunction } from 'express';
import validations from '../services/Validations';

const userValidation = (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = req.body;
    const error = validations.userValidation(user);
    if (error) {
      return res.status(error.code).json({ error: error.message });
    }
    next();
  } catch (error) {
    next(error);
  }
};

export default userValidation;