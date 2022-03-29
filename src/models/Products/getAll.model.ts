import connection from '../connection';
import Product from '../../interfaces/products.interface';

const getAll = async (): Promise<Product[]> => {
  const [result] = await connection.execute(`
    SELECT * FROM Trybesmith.Products
    ORDER BY id ASC`);
  return result as Product[];
};

export default getAll;