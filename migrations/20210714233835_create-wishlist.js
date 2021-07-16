export const up = function (knex) {
  return knex.schema.createTable("wishlists", function (table) {
    table.increments();
    table.integer("user_id").references("users.id").notNullable();
  });
};

export const down = function (knex) {
  return knex.schema.dropTable("wishlists");
};
