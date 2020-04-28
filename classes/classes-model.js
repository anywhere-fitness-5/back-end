const db = require('../data/dbConfig');

module.exports = {
  add,
  find,
  updateClass,
  deleteclass
}

function find() {
  return db('classes').select('*')
}

function add(classInfo) {
  const classname = classInfo.classname;
  const classdescription = classInfo.classdescription;
  return db('classes').insert({
    classname, classdescription
  });
}

function updateClass(changes, id) {
  return db('classes')
    .update(changes)
    .where({ id })
}

function deleteclass(id) {
  return db('classes')
    .where({ id })
    .del()
}