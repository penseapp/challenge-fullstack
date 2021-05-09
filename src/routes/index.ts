import { Router } from 'express';
import productsRouter from './products.router';

const routes = Router();

routes.use('/products', productsRouter)

export default routes;