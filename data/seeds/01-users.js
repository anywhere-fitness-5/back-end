const bcrypt = require('bcrypt');

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: "bobupndown", password: hasher("password1"), fname:"Bob", lname:"daBuilder"},
        {username:"superman", password: hasher("passowrd2"), fname:"Clark", lname:"Kent" },
        {username: "spiderman", password: hasher("passowrd3"), fname: "Peter", lname:"Parker"},
        {username:"firerider", password: hasher("passowrd4"), fname:"Ghost", lname:"Rider"}

      ]);
    });
};

function hasher(password) {
  return bcrypt.hashSync(password, 10)
} 