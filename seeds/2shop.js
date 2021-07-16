export const seed = function (knex) {
  // Deletes ALL existing entries
  return knex("shops")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("shops").insert([
        {
          id: 1,
          name: "Loja de Artigos Musicais",
          description: "Vendemos todo tipo de instrumento",
        },
      ]);
    });
};
