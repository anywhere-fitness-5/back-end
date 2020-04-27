const db = require('../data/dbConfig');

module.exports = {
  add, 
  find,
  findBy 
}

function find() {
  return db('users').select('username')
}

// async function add(user) {
function add(user) {
  return db('users').insert(user);
  // const [id] = await db('users').insert(user);
  // return findById(id);
}

function findBy() {
  return db('users')
    .where({ id })
    .first();
}