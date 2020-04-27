
exports.up = function(knex) {
  return knex.schema

  // users table
  .createTable('users', users => {
    users
      .increments();
    users
      .string('username', 30)
      .notNullable()
      .unique();
    users
      .string('password', 30)
      .notNullable();
    users
      .string('fname', 30);
    users
      .string('lname', 30);
  })

  .createTable('role',role => {
    role.increments();
    role
      .string('title')
      .notNullable()
      .unique();
  })
  .createTable('user_role',user_role =>{
   user_role
    .integer('userid')
    .unsigned()
    .foreign('userid')
    .references('id')
    .inTable('users');
   user_role
    .integer('roleid')
    .unsigned()
    .foreign('roleid')
    .references('id')
    .inTable('role');
  })
  .createTable('classes', classes => {
    classes
    .increments();
    classes
      .integer('classname')
      .unsigned()
      .notNullable()
      .unique();
  })
  .createTable('class_user',class_user => {
    class_user
      .integer('classid')
      .foreign('classid')
      .references('id')
      .inTable('classes');
    class_user
      .integer('userid')
      .notNullable()
      .foreign()
      .references('id')
      .inTable('users');
  })
  .createTable('class_schedule', class_schedule => {
    class_schedule
      .increments();
    class_schedule 
      .integer('instructorid')
      .integer('classid')
      .references('id')
      .inTable('classes');
  class_schedule
    .datetime('start_date');
  class_schedule
    .datetime('end_date');
  class_schedule
    .datetime('start_time');
  class_schedule
    .datetime('end_time');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users')
                    .dropTableIfExists('role')
                    .dropTableIfExists('user_role')
                    .dropTableIfExists('class_user')
                    .dropTableIfExists('classes')
                    .dropTableIfExists('class_schedule');
};
