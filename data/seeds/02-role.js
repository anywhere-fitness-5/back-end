
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('role').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('role').insert([
      {title:"client"},
      {title: "instructor"}
      ]);
    });
};
