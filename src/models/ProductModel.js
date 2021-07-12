import knex from "../database/index.js";

export async function create(product) {
  return await knex("product").insert(product).returning("*");
}

export async function read(id) {
  return await knex.from("product").select().where("id", id);
}

export async function update(product) {
  return await knex("product").insert(product).returning("*");
}

export async function deleteById(id) {
  return await knex("product").insert(id).returning("*");
}
