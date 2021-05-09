import { EntityRepository, Repository, Not, Like, IsNull } from 'typeorm';
import Product from '../models/Product';

@EntityRepository(Product)
class ProductsRepository extends Repository<Product> {
    public async get(orderCriteria?: string, filterCriteria?: string): Promise<Product[]> {
        let products: Product[] = [];

        const filter = filterCriteria?.split('=');

        if (orderCriteria !== null) {
            products = await this.find({
                order: orderCriteria == 'name_asc' ? {
                    name: 'ASC',
                } : orderCriteria == 'name_desc' ? {
                    name: 'DESC',
                } : orderCriteria == 'price_asc' ? {
                    price: 'ASC',
                } : {
                    price: 'DESC',
                },
                where: [
                    filter && (filter[0] == 'name' ?
                    {
                        name: Like(`%${filter[1]}%`),
                    } : filter[0] == 'promo' && {
                        promo_price: Not(IsNull()),
                    }
                )]
            });                                                        
        } else {
            products = await this.find();
        }

        return products;
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