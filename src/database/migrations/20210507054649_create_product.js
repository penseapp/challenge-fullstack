exports.up = function(knex) {
  return knex.schema.createTable('product', function (table) {
    table.increments();
    table.string('name').notNullable();
    table.string('description').nullable();
    table.decimal('price').nullable();
    table.decimal('promotional_price').nullable();
    table.string('status_flag').nullable();
    table.string('category').nullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('product');
};
