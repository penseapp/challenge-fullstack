import express from "express";
import dotenv from "dotenv-safe"
import { withJWTAuthMiddleware } from "express-kun";

import { Register, Login } from "./controllers/UserController.js";
import { Create as CreateProduct, List as ListProducts, Update as UpdateProduct, Delete as DeleteProduct } from "./controllers/ProductController.js";

dotenv.config()

const routes = express.Router();

const protectedRoute = withJWTAuthMiddleware(routes, process.env.SECRET);

routes.post("/register", Register);
routes.post("/login", Login);

protectedRoute.post("/product/create", CreateProduct);
protectedRoute.get("/products/", ListProducts);
protectedRoute.put("/product/update/:id", UpdateProduct);
protectedRoute.delete("/product/delete/:id", DeleteProduct);

export default routes;
