export const seed = function (knex) {
  // Deletes ALL existing entries
  return knex("products")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("products").insert([
        {
          name: "Violão",
          description: "Instrumento acustico de corda",
          price: 500,
          "promotional-price": 450,
          "flag-status": "ACTIVE",
          category: "instrumentos de corda",
          shop_id: 1,
        },
      ]);
    });
};
