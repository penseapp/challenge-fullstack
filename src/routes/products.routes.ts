import { Router } from 'express';
import { getCustomRepository } from 'typeorm';
import ProductsRepository from '../repositories/ProductsRepository';
import CreateProductService from '../services/CreateProductService';

const productsRouter = Router();

productsRouter.get('/:order/:filter?', async (request, response) => {
  try {
    const { order, filter } = request.params;
    const productsRepository = getCustomRepository(ProductsRepository);

    const params = [order || 'name_asc', filter || ''];

    const products = await productsRepository.get(...params);

    return response.json(products);
  } catch (err) {
    return response.json({ error: err.message });
  }
});

productsRouter.post('/', async (request, response) => {
  try {
    const { name, description, price, promoPrice, statusFlag, category } =
      request.body;

    const createProductService = new CreateProductService();

    const product = await createProductService.execute({
      name,
      description,
      price,
      promoPrice,
      statusFlag,
      categoryTitle: category,
    });

    return response.json(product);
  } catch (err) {
    return response.json({ error: err.message });
  }
});

productsRouter.put('/:id', async (request, response) => {
  try {
    const { id } = request.params;
    const { name, description, price, promoPrice, statusFlag, category } =
      request.body;

    const productsRepository = getCustomRepository(ProductsRepository);

    const product = await productsRepository.findOne(id);

    if (!product) {
      return response.status(400).json({ error: 'Produto não encontrado' });
    }

    const productUpdated = {
      id,
      name,
      description,
      price,
      promo_price: promoPrice,
      status_flag: statusFlag,
      category,
    };

    await productsRepository.save(productUpdated);

    return response.json(productUpdated);
  } catch (err) {
    return response.json({ error: err.message });
  }
});

productsRouter.delete('/:id', async (request, response) => {
  try {
    const { id } = request.params;
    const productsRepository = getCustomRepository(ProductsRepository);

    const product = await productsRepository.findOne(id);

    if (!product) {
      return response.status(400).json({ error: 'Produto não encontrado' });
    }

    await productsRepository.delete(product.id);

    return response.status(200).json();
  } catch (err) {
    return response.json({ error: err.message });
  }
});

export default productsRouter;
