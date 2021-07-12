import knex from "../database/index.js";

export async function createUser(user) {
  return await knex("users").insert(user).returning("*");
}

export async function readUser(email) {
  return await knex.from("users").select().where("email", email);
}
