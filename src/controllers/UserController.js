import jwt from "jsonwebtoken";
import dotenv from "dotenv-safe";

import { createUser, readUser } from "../models/UserModel.js";
import { create as createWishlist, readByUserId } from "../models/WishlistModel.js";

dotenv.config();

export async function Register(req, res) {
  try {
    const user = await createUser(req.body);

    const wishlist = await createWishlist(user[0].id)

    const token = jwt.sign(
      {
        user: {
          email: user[0].email,
        },
      },
      process.env.SECRET
    );

    res.status(201).json({ token, user: { id: user[0].id, name: user[0].name, email: user[0].email, wishlist_id: wishlist[0].id } });
  } catch (error) {
    console.log(error)
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
          email: user[0].email,
        },
      },
      process.env.SECRET
    );

    const wishlist = await readByUserId(user[0].id)

    res.status(200).json({ token, user: { id: user[0].id, name: user[0].name, email: user[0].email, wishlist_id: wishlist.id } });
  } catch (error) {
    console.log(error)
    res.status(500).send(error);
  }
}

export async function getInfos(req, res) {
  try {
    const user = await createUser(req.body);

    res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error);

  }
}
