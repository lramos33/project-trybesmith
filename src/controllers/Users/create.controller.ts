import { Request, Response, NextFunction } from 'express';
import usersService from '../../services/Users';

const create = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = req.body;
    const result = await usersService.create(user);
    return res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

export default create;