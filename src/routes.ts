import { Router } from 'express'
import multer from 'multer'
import multerConfig from './config/multer'

import { AuthController } from './controllers/AuthController'
import { UsersController } from './controllers/UsersController'
import { ProductsController } from './controllers/ProductController'

const routes = Router()

const authController = new AuthController()
const usersController = new UsersController()
const productController = new ProductsController()

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
routes.get("/product/:id", productController.listById)

export { routes }