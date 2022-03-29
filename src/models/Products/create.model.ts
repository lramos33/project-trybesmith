import { ResultSetHeader } from 'mysql2';
import connection from '../connection';
import Product from '../../interfaces/products.interface';
import Created from '../../interfaces/created.interface';

const create = async (product: Product): Promise<Created> => {
  const { name, amount } = product;
  const [result] = await connection.execute<ResultSetHeader>(
    `INSERT INTO Trybesmith.Products
    (name, amount) VALUES (?, ?)`,
    [name, amount],
  );
  return result;
};

export default create;