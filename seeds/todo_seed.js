
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('todo').del()
    .then(function () {
      // Inserts seed entries
      return knex('todo').insert([
        {text:'Tester 1', completed: true},
        {text: 'Test 2'}
      ]);
    });
};
