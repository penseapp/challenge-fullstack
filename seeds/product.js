export const seed = function (knex) {
  // Deletes ALL existing entries
  return knex("products")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("products").insert([
          {
            name: "dada",
            description: "ddddd2121",
            price: 12,
            'promotional-price': 11,
            'flag-status': "ss",
            category: ""
        },
      ]);
    });
};