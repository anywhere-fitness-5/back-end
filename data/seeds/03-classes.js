
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('classes').del()
    .then(function () {
      // Inserts seed entries
      return knex('classes').insert([
        {classname: 'Yoga', intensity:4},
        {classname: 'Swim', intensity: 5},
        {classname: 'Cycle', intensity:6},
        {classname: 'Kickboxing', intensity:10}
      ]);
    });
};
