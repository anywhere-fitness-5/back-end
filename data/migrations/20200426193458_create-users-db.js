
exports.up = function(knex) {
  return knex.schema

  // users table
  .createTable('users', users => {
    users
      .increments('id');
    users
      .string('username', 255)
      .notNullable()
      .unique();
    users
      .string('password',255)
      .notNullable();
    users
      .string('fname', 255);
    users
      .string('lname', 255);
  })

  
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users');
                   
};
