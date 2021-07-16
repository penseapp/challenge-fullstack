export const seed = function (knex) {
  // Deletes ALL existing entries
  return knex("wishlists")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("wishlists").insert([
        {
          id: 1,
          user_id: 1
        },
      ]);
    });
};
