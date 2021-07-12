import jwt from "jsonwebtoken";
import dotenv from "dotenv-safe";

import { create, read, update, deleteById } from "../models/ProductModel.js";

dotenv.config();

export async function Create(req, res) {
  try {
    const product = await create(req.body)

    console.log(product)

    res.status(201),json(product)
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
}


//export async function Create(req, res) {
  //try {
  //} catch (error) {
    //console.log(error);
    //res.status(500).send(error);
  //}
//}

//export async function Create(req, res) {
  //try {
  //} catch (error) {
    //console.log(error);
    //res.status(500).send(error);
  //}
//}

//export async function Create(req, res) {
  //try {
  //} catch (error) {
    //console.log(error);
    //res.status(500).send(error);
  //}
//}
