import jwt from "jsonwebtoken";
import dotenv from "dotenv-safe";

import { createUser, readUser } from "../models/UserModel.js";

dotenv.config();

export async function Register(req, res) {
  try {
    const user = await createUser(req.body);

    const token = jwt.sign(
      {
        user: {
          email: user.email,
        },
      },
      process.env.SECRET
    );

    res.status(201).json({ token });
  } catch (error) {
    res.status(500).send(error);
  }
}

export async function Login(req, res) {
  try {
    const user = await readUser(req.body.email);

    if (!user[0]) {
      return res.status(404).json({ error: "usuario não encontrado" });
    }

    if (user[0].password !== req.body.password) {
      return res.status(401).json({ error: "senha errada" });
    }
    const token = jwt.sign(
      {
        user: {
          email: user.email,
        },
      },
      process.env.SECRET
    );

    res.status(200).json({ token });
  } catch (error) {
    res.status(500).send(error);
  }
}
