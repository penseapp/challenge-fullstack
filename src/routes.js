import express from "express";
import dotenv from "dotenv-safe"
import { withJWTAuthMiddleware } from "express-kun";

import { Register, Login, getInfos } from "./controllers/UserController.js";
import { Create as CreateProduct, List as ListProducts, Update as UpdateProduct, Delete as DeleteProduct } from "./controllers/ProductController.js";
import { readWishlistByid, addProductInWishlist, readWishlistByUserId, removeProductInWishlist } from "./controllers/WishlistController.js";

dotenv.config()

const routes = express.Router();

const protectedRoute = withJWTAuthMiddleware(routes, process.env.SECRET);

routes.post("/register", Register);
routes.post("/login", Login);

routes.get("/users/read/:id", getInfos)

protectedRoute.post("/product/create", CreateProduct);
protectedRoute.get("/products/", ListProducts);
protectedRoute.put("/product/update/:id", UpdateProduct);
protectedRoute.delete("/product/delete/:id", DeleteProduct);

protectedRoute.get("/wishlist/:id", readWishlistByid)
protectedRoute.get("/wishlist/user/:id", readWishlistByUserId)
protectedRoute.post("/wishlist/addProduct", addProductInWishlist)
protectedRoute.delete("/wishlist/removeProduct/:wishlist_id/:product_id", removeProductInWishlist)

export default routes;
