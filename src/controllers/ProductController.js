import jwt from "jsonwebtoken";
import dotenv from "dotenv-safe";

import { create, list, getById, update, deleteById } from "../models/ProductModel.js";

dotenv.config();

export async function Create(req, res) {
  try {
    const product = await create(req.body)

    res.status(201).json(product)
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
}

export async function List(req, res) {
  try {
    const products = await list()

    res.status(200).json(products)
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
}

export async function Update(req, res) {
  try {
    const { id } = req.params

    const product = await update(parseInt(id), req.body)

    res.status(200).json(product)
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
}

export async function Delete(req, res) {
  try {
    const { id } = req.params;

    const product = await deleteById(parseInt(id))

    res.status(200).send();
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
}

export async function readById(req, res) {
  try {
    const { id } = req.params;

    const product = await getById(id)

    res.status(200).json(product)
  } catch(error) {
    res.status(500).send(error)
  }

}
