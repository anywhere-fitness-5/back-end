
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('user_registration').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('user_registration').insert([
        {userid:1, scheduleid:1},
        {userid:2, scheduleid:2}
      ]);
    });
};
