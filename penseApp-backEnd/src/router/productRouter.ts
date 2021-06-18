import {Router} from "express"
import createProduct from "../endpoints/products/createProduct"
import getProductById from "../endpoints/products/getProductById"
import getAllProduct from "../endpoints/products/getAllProducts"
import updateProduct from "../endpoints/products/updateProduct"
import deleteProduct from "../endpoints/products/deleteProduct"
import searchProduct from "../endpoints/products/searchProducts"

export const productRouter = Router()

productRouter.post("/", createProduct)
productRouter.get("/", getAllProduct)
productRouter.get("/detail/:id", getProductById)
productRouter.get("/:search", searchProduct)
productRouter.put("/update/:id", updateProduct)
productRouter.delete("/:id", deleteProduct)
