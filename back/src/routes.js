const express = require("express");
const routes = express.Router();

const Users = require("./controllers/user");
const Product = require("./controllers/product");

routes.get("/", Users.index);

//Users Routes
routes.get("/api/user", Users.index);
routes.post("/api/user", Users.create);
routes.get("/api/user/:id", Users.show);
routes.delete("/api/user/:id", Users.delete);
routes.put("/api/user/:id", Users.update);

//Product Route
routes.get("/api/product", Product.index);
routes.post("/api/product", Product.create);
routes.get("/api/product/:id", Product.show);
routes.delete("/api/product/:id", Product.delete);
routes.put("/api/product/:id", Product.update);

module.exports = routes;
