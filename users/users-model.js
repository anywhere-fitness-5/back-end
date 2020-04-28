const db = require('../data/dbConfig');
const bcrypt = require('bcrypt');

module.exports = {
  add, 
  find,
  findBy
}

function find() {
  return db('users').select('*')
}

// async function add(user) {
function add(user) {
  const username = user.username;
  const password = user.password;
  const fname = user.fname;
  const lname = user.lname;
  return db('users').insert({
    username, fname, lname,
    password: bcrypt.hashSync(password, 10)
  });
  // const [id] = await db('users').insert(user);
  // return findById(id);
}

function findBy(username) {
  return db('users')
    .where({ username })
    .first();
}