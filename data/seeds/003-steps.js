
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').del()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {id: 1, step_number: 1, instructions: 'mix it all up', recipe_id: 1},
        {id: 2, step_number: 1, instructions: 'give it a whirl', recipe_id: 2},
        {id: 3, step_number: 1, instructions: 'go for it', recipe_id: 3}
      ]);
    });
};
