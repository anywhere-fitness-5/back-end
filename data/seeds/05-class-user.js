
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('class_user').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('class_user').insert([
        {classid: 1,userid:1},
        {classid: 2, userid:2}
      ]);
    });
};
