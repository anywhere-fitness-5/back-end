
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('classes').del()
    .then(function () {
      // Inserts seed entries
      return knex('classes').insert([
        { classname: 'Pure Barre' },
        { classname: 'Yoga' },
        { classname: 'Water Aerobics' },
        { classname: 'Walking' },
        { classname: 'Dancing' },
        { classname: 'Swimming' },
      ]);
    });
};
