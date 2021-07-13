import express from "express";
import dotenv from "dotenv-safe"

dotenv.config()

import routes from "./src/routes.js";

var port = process.env.PORT || 8080;

const app = express();

app.use(express.json());

app.use("/", routes);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
