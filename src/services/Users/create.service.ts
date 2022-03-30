import userModel from '../../models/Users';
import User from '../../interfaces/user.interface';

const create = async (user: User): Promise<{ token: string }> => { 
  await userModel.create(user);
  return { token: 'example_token' };
};

export default create;