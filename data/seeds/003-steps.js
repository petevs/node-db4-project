
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {id: 1, step_number: 1, instructions: '', recipe_id: 1},
        {id: 2, step_number: 2, instructions: '', recipe_id: 2},
        {id: 3, step_number: 3, instructions: '', recipe_id: 3}
      ]);
    });
};
