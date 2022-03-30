import connection from '../connection';
import ModelOrder from '../../interfaces/modelOrder.interface';

const getAll = async (): Promise<ModelOrder[]> => {
  const [result] = await connection.execute(`
  SELECT 
    orders.id,
    orders.userId,
    GROUP_CONCAT(products.id) AS products
  FROM Trybesmith.Orders AS orders
    INNER JOIN Trybesmith.Products AS products
    ON orders.id = products.orderId
  GROUP BY orders.id
  ORDER BY orders.userId ASC`);
  return result as ModelOrder[];
};

export default getAll;