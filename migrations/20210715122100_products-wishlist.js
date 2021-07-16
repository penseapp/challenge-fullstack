export const up = function (knex) {
  return knex.schema.createTable("products_wishlist", function (table) {
    table.increments();
    table.integer("wishlist_id").references("wishlists.id").notNullable();
    table.integer("product_id").references("products.id")
  });
};

export const down = function (knex) {
  return knex.schema.dropTable("products_wishlist");
};
