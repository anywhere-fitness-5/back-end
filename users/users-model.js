const db = require('../data/dbConfig');
const bcrypt = require('bcrypt');

module.exports = {
  add, 
  find,
  findBy,
  findById
}

function find() {
  return db('users').select('id', 'username', 'password', 'lname', 'fname')
}

function add(user) {
  const username = user.username;
  const password = user.password;
  const fname = user.fname;
  const lname = user.lname;
  return db('users').insert({
    username, fname, lname,
    password: bcrypt.hashSync(password, 10)
  });
}

function findBy(username) {
  return db('users')
    .where({username})
    .select('id', 'fname', 'lname', 'username')
    .first()
}

function findById() {
  
}