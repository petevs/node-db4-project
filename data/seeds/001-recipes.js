
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {id: 1, name: "Grandma's Soup"},
        {id: 2, name: "Good Cookies"},
        {id: 3, name: "Homemade Pizza"}
      ]);
    });
};
