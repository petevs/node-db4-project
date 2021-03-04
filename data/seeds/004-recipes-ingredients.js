
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {recipe_id: 1, ingredient_id: 1, quantity: 1.5},
        {recipe_id: 2, ingredient_id: 1, quantity: 1.5},
        {recipe_id: 3, ingredient_id: 1, quantity: 1.5}
      ]);
    });
};
