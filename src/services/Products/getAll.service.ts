import productModel from '../../models/Products';
import Product from '../../interfaces/products.interface';

const getAll = async (): Promise<Product[]> => productModel.getAll();

export default getAll;