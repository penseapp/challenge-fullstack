export const seed = function (knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("users").insert([
        {
          name: "daniel",
          email: "daniel@daniel.com",
          password: "123456",
        },
      ]);
    });
};
