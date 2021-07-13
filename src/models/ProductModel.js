import knex from "../database/index.js";

export async function create(product) {
  return await knex("products").insert(product).returning("*");
}

export async function list() {
  return await knex.from("products").select();
}

export async function update(id, product) {
  return await knex("products").where('id', id).update(product).returning("*");
}

export async function deleteById(id) {
  return await knex("products").where('id', id).delete(id);
}
