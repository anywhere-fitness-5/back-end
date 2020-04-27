const bcrypt = require('bcrypt');
const password1 = bcrypt.hashSync('password1', 10);
const password2 = bcrypt.hashSync('password2', 10);
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { username: "edmadrigal", password: password1, fname: "Eddie", lname: "Madrigal" },
        { username: "erikamadrigal", password: password2, fname: "Erika", lname: "Madrigal" }
      ]);
    });
};