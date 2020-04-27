
exports.up = function(knex) {
  return knex.schema

  // users table
  .createTable('users', users => {
    users
      .increments();
    users
      .unique('username', 30)
      .notNullable();      
    users
      .string('password', 30)
      .notNullable();
    users
      .string('fname', 30);
    users
      .string('lname', 30);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users');
};
