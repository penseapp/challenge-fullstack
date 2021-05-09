import { getCustomRepository } from 'typeorm';
import ProductsRepository from '../repositories/ProductsRepository';
import Product from '../models/Product';

interface Request {
    name: string;
    description: string;
    price: number;
    promoPrice: number;
    statusFlag: string;
    category: string;
}

class CreateProductService {
    public async execute({ name, description, price, promoPrice, statusFlag, category}: Request): Promise<Product> {
        const productsRepository = getCustomRepository(ProductsRepository);

        const product = productsRepository.create({
            name,
            description,
            price,
            promo_price: promoPrice,
            status_flag: statusFlag,
            category,
        });

        productsRepository.save(product);

        return product;
    }
}

export default CreateProductService;