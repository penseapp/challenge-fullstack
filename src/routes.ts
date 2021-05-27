import { Router } from 'express'

import { UsersController } from './controllers/UsersController'

const routes = Router()

const usersController = new UsersController()

// User Routes
routes.post("/user", usersController.create)
routes.put("/user/:id", usersController.update)
routes.delete("/user/:id", usersController.delete)

// Products Routes

export { routes }