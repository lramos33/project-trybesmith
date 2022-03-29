import productModel from '../../models/Products';
import Product from '../../interfaces/products.interface';

const create = async (product: Product): Promise<{ item: Product }> => {
  const { name, amount } = product;
  const createdProduct = await productModel.create(product);
  return { item: { id: createdProduct.insertId, name, amount } };
};

export default create;