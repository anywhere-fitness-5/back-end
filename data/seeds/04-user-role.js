
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('user_role').del()
    .then(function () {
      // Inserts seed entries
      return knex('user_role').insert([
        { userid: '1',roleid:1},
        { userid: '2',roleid:1},
        { userid: '3',roleid:2},
        { userid: '4',roleid:2}
      ]);
    });
};
