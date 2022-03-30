import orderModel from '../../models/Orders';
import ServiceOrder from '../../interfaces/serviceOrder.interface';

const getAll = async (): Promise<ServiceOrder[]> => {
  const modelResult = await orderModel.getAll();

  const orders = modelResult.map((order) => {
    const splittedArray = order.products.split(','); // string[]
    const products = splittedArray.map((product: string) => Number(product)); // number[]

    return { ...order, products };
  });

  return orders;
};

export default getAll;