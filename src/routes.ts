import { Router } from 'express'
import multer from 'multer'
import multerConfig from './config/multer'

import { AuthController } from './controllers/AuthController'
import { UsersController } from './controllers/UsersController'
import { ProductsController } from './controllers/ProductController'
import { FavoritesController } from './controllers/FavoriteController'

const routes = Router()

const authController = new AuthController()
const usersController = new UsersController()
const productController = new ProductsController()
const favoritesController = new FavoritesController()

// Authentication routes
routes.post('/auth/login', authController.login)

// User Routes
routes.post("/user", multer(multerConfig('/user')).single('file'), usersController.create)
routes.get("/user/:id", usersController.listById)
routes.put("/user/:id", multer(multerConfig('/user')).single('file'), usersController.update)
routes.delete("/user/:id", usersController.delete)

// Products Routes
routes.post("/product",multer(multerConfig('/product')).single('file'), productController.create)
routes.put("/product/:id", productController.update)
routes.delete("/product/:id", productController.delete)
routes.get("/products", productController.list_all)
routes.get("/product/:user_id/:product_id", productController.listById)

// Favorites
routes.post("/favorite/:user_id/:product_id", favoritesController.add)
routes.delete("/favorite/:user_id/:product_id", favoritesController.delete)
routes.get("/favorite/:user_id", favoritesController.list)

export { routes }