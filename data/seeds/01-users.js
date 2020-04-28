const bcrypt = require('bcrypt');
const saltRounds = 10;

const salt1 = bcrypt.genSaltSync(saltRounds);
const salt2 = bcrypt.genSaltSync(saltRounds);
const salt3 = bcrypt.genSaltSync(saltRounds);
const salt4 = bcrypt.genSaltSync(saltRounds);
const salt5 = bcrypt.genSaltSync(saltRounds);

const password1 = bcrypt.hashSync('password123', salt1);
const password2 = bcrypt.hashSync('password123', salt2);
const password3 = bcrypt.hashSync('password123', salt3);
const password4 = bcrypt.hashSync('password123', salt4);
const password5 = bcrypt.hashSync('password123', salt5);

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { username: "epresley", password: password1, fname: "Elvis", lname: "Presley" },
        { username: "jhendrix", password: password2, fname: "Jimi", lname: "Hendrix" },
        { username: "mjackson", password: password3, fname: "Michael", lname: "Jackson" },
        { username: "bdylan", password: password4, fname: "Bob", lname: "Dylan" },
        { username: "kcobain", password: password5, fname: "Curt", lname: "Cobain" }
      ]);
    });
};