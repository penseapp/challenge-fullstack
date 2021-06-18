import { userRouter } from "./router/userRouter"
import { productRouter } from "./router/productRouter"
import app from "./app"

app.use("/users", userRouter)

app.use("/product", productRouter)

app.use((req, res) => {
    res
    .status(404)
    .send(`Não encontramos a rota da sua requisição ${req.method} ${req.path}`)

})