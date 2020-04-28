const bcrypt = require('bcrypt');

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 0, username: "bobupndown", password: hasher("password1"), fname:"Bob", lname:"daBuilder"},
        {id: 1, username:"superman", password: hasher("passowrd2"), fname:"Clark", lname:"Kent" },
        {id: 2, username: "spiderman", password: hasher("passowrd3"), fname: "Peter", lname:"Parker"},
        {id: 3, username:"firerider", password: hasher("passowrd4"), fname:"Ghost", lname:"Rider"}

      ]);
    });
};

function hasher(password) {
  return bcrypt.hashSync(password, 10)
} 