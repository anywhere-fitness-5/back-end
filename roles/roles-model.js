const db = require('../data/dbConfig');

module.exports = {
  add,
  find
}

function add(roleInfo) {
  const title = roleInfo.title;
  return db('classes').insert({
    title
  });
}

function find() {
  return db('roles')
    .select('*')
}