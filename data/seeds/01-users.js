const bcrypt = require('bcrypt');
const password1 = bcrypt.hashSync('password1', 10);
const password2 = bcrypt.hashSync('password2', 10);
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { username: "madrigal", password: password1, firstname: "Eddie", lastname: "Madrigal" },
        { username: "erikamadrigal", password: password2, firstname: "Erika", lastname: "Madrigal" }
      ]);
    });
};