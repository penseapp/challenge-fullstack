export const seed = function (knex) {
  // Deletes ALL existing entries
  return knex("products_wishlist")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("products_wishlist").insert([
        {
          id: 1,
          wishlist_id: 1,
          product_id: 1
        },
      ]);
    });
};
