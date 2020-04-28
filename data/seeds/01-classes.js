
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('classes').del()
    .then(function () {
      // Inserts seed entries
      return knex('classes').insert([
        { classname: 1 },
        { classname: 2 },
        { classname: 3 },
        { classname: 4 },
        { classname: 5 }
      ]);
    });
};
