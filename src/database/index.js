import knexfile from "../../knexfile.js";
import knex from "knex";

export default knex(knexfile["development"]);
