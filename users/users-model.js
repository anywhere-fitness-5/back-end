const db = require('../data/dbConfig');
const bcrypt = require('bcrypt');

module.exports = {
  add, 
  find
}

function find() {
  return db('users')
}

// add user {
  function add(user) {
    const username = user.username;
    const password = user.password;
    const fname = user.fname;
    const lname = user.lname;
    const email = user.email;
    let roleid = 1;
    if (user.roleid) {
      roleid = user.roleid;
    } 
    return db('users')
      .insert({
        username, 
        fname, 
        lname, email,
        password: bcrypt.hashSync(password, 10)
      })
      .then(res => {
        return db('user_role')
          .insert({
            userid: res[0],
            roleid
          })
    });
  }

  