
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('classes').del()
    .then(function () {
      // Inserts seed entries
      return knex('classes').insert([
        { classname: 'Yoga', classdescription: 'Class description ...' },
        { classname: 'Water Aerobics', classdescription: 'Class description ...' },
        { classname: 'Walking', classdescription: 'Class description ...' },
        { classname: 'Dancing', classdescription: 'Class description ...' },
        { classname: 'Swimming', classdescription: 'Class description ...' }
      ]);
    });
};
