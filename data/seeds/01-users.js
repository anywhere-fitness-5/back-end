const bcrypt = require('bcrypt');
const password1 = bcrypt.hashSync('password123', 10);
const password2 = bcrypt.hashSync('password123', 10);
const password3 = bcrypt.hashSync('password123', 10);
const password4 = bcrypt.hashSync('password123', 10);
const password5 = bcrypt.hashSync('password123', 10);
const password6 = bcrypt.hashSync('password123', 10);
const password7 = bcrypt.hashSync('password123', 10);
const password8 = bcrypt.hashSync('password123', 10);
const password9 = bcrypt.hashSync('password123', 10);
const password10 = bcrypt.hashSync('password123', 10);
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
        { username: "kcobain", password: password5, fname: "Curt", lname: "Cobain" },
        { username: "eclapton", password: password6, fname: "Eric", lname: "Clapton" },
        { username: "dbowie", password: password7, fname: "David", lname: "Bowie" },
        { username: "ejohn", password: password8, fname: "Elton", lname: "John" },
        { username: "tswift", password: password9, fname: "Taylor", lname: "Swift" },
        { username: "jcash", password: password10, fname: "Johnny", lname: "Cash" }
      ]);
    });
};