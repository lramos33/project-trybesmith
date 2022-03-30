import { ResultSetHeader } from 'mysql2';
import connection from '../connection';
import User from '../../interfaces/user.interface';

const create = async (user: User): Promise<void> => {
  const { username, classe, level, password } = user;
  await connection.execute<ResultSetHeader>(
    `INSERT INTO Trybesmith.Users
    ( username, classe, level, password ) VALUES (?, ?, ?, ?)`,
    [username, classe, level, password],
  );
};

export default create;