
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {id: 1, name: 'cheese'},
        {id: 2, name: 'tomatoes'},
        {id: 3, name: 'butter'}
      ]);
    });
};
