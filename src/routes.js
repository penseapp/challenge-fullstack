import express from "express";
import dotenv from "dotenv-safe"
import { withJWTAuthMiddleware } from "express-kun";

import { Register, Login } from "./controllers/UserController.js";
import { Create as CreateProduct } from "./controllers/ProductController.js";

dotenv.config()

const routes = express.Router();

const protectedRouter = withJWTAuthMiddleware(routes, process.env.SECRET);

routes.post("/register", Register);
routes.post("/login", Login);

export default routes;
