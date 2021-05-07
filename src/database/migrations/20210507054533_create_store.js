exports.up = function(knex) {
  return knex.schema.createTable('store', function (table) {
    table.increments();
    table.string('name').notNullable();
    table.string('description').nullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('store');
};
