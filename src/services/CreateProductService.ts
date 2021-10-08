import { getCustomRepository, getRepository } from 'typeorm';
import ProductsRepository from '../repositories/ProductsRepository';
import Product from '../models/Product';
import Category from '../models/Category';

interface Request {
  name: string;
  description: string;
  price: number;
  promoPrice: number;
  statusFlag: 'Ativo' | 'Inativo';
  imageUrl: string;
  categoryTitle: string;
}

class CreateProductService {
  public async execute({
    name,
    description,
    price,
    promoPrice,
    statusFlag,
    imageUrl,
    categoryTitle,
  }: Request): Promise<Product> {
    const productsRepository = getCustomRepository(ProductsRepository);
    const categoriesRepository = getRepository(Category);

    let category = await productsRepository.verifyCategory(categoryTitle);

    if (!category) {
      const newCategory = categoriesRepository.create({
        title: categoryTitle,
      });

      category = await categoriesRepository.save(newCategory);
    }

    const product = productsRepository.create({
      name,
      description,
      price,
      promo_price: promoPrice,
      status_flag: statusFlag,
      image_url: imageUrl,
      category,
    });

    productsRepository.save(product);

    return product;
  }
}

export default CreateProductService;
