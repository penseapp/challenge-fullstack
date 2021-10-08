import {
  EntityRepository,
  Repository,
  Not,
  Like,
  IsNull,
  getRepository,
} from 'typeorm';
import Category from '../models/Category';
import Product from '../models/Product';

interface ProductWithCategory {
  id: string;
  name: string;
  description: string;
  price: number;
  promoPrice: number;
  statusFlag: string;
  imageUrl: string;
  category: string;
}

@EntityRepository(Product)
class ProductsRepository extends Repository<Product> {
  public async get(
    orderCriteria?: string,
    filterCriteria?: string,
  ): Promise<ProductWithCategory[]> {
    let products: Product[] = [];

    const filter = filterCriteria?.split('=');

    if (orderCriteria !== null) {
      products = await this.find({
        relations: ['category'],
        order:
          orderCriteria === 'name_asc'
            ? {
                name: 'ASC',
              }
            : orderCriteria === 'name_desc'
            ? {
                name: 'DESC',
              }
            : orderCriteria === 'price_asc'
            ? {
                price: 'ASC',
              }
            : {
                price: 'DESC',
              },
        where: [
          filter &&
            (filter[0] === 'name'
              ? {
                  name: Like(`%${filter[1]}%`),
                }
              : filter[0] === 'promo' && {
                  promo_price: Not(IsNull()),
                }),
        ],
      });
    } else {
      products = await this.find({
        relations: ['category'],
      });
    }

    const productsWithCategory: ProductWithCategory[] = products.map(
      product => {
        return {
          id: product.id,
          name: product.name,
          description: product.description,
          price: product.price,
          promoPrice: product.promo_price,
          statusFlag: product.status_flag,
          imageUrl: product.image_url,
          category: product.category.title,
        };
      },
    );

    return productsWithCategory;
  }

  public async verifyCategory(categoryTitle: string): Promise<Category | null> {
    const categoryRepository = getRepository(Category);

    const categoryExists = await categoryRepository.findOne({
      where: { title: categoryTitle },
    });

    return categoryExists || null;
  }
}

/*
const products = results.map(item => {
    return {
        id: item.id,
        name: item.name,
        description: item.description,
        price: item.price,
        promoPrice: item.promo_price,
        statusFlag: item.status_flag,
        category: item.category,
    }
});
*/

export default ProductsRepository;
