const db = require('../data/dbConfig');

module.exports = {
  find,
  add
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