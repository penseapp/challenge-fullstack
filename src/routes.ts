import { Router } from 'express'

import { AuthController } from './controllers/AuthController'
import { UsersController } from './controllers/UsersController'
import { ProductsController } from './controllers/ProductController'

const routes = Router()

const authController = new AuthController()
const usersController = new UsersController()
const productController = new ProductsController()

// Authentication routes
routes.post('/auth/login', authController.login)
// routes.put('/auth/renew', authMiddleware.required, authController.renew_token)

// User Routes
routes.post("/user", usersController.create)
routes.put("/user/:id", usersController.update)
routes.delete("/user/:id", usersController.delete)

// Products Routes
routes.post("/product", productController.create)
routes.put("/product/:id", productController.update)
routes.delete("/product/:id", productController.delete)
routes.get("/products", productController.list_all)
routes.get("/product/:id", productController.listById)

export { routes }