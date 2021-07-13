export const up = function (knex) {
  return knex.schema.createTable("shops", function (table) {
    table.increments();
    table.string("name").notNullable();
    table.string("description");
  });
};

export const down = function (knex) {
  return knex.schema.dropTable("shops");
};
