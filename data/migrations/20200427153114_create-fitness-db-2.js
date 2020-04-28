exports.up = function(knex) {
  return knex.schema
  .createTable('users', users => {
    users
      .increments();
    users
      .string('username', 30)
      .notNullable()
      .unique();
    users
      .string('password', 128)
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

  .createTable('class_schedule', class_schedule => {
    class_schedule
      .increments();
    class_schedule 
      .integer('instructorid')
      .references('id')
      .inTable('users')
      .onDelete('cascade');
    class_schedule 
      .integer('classid')
      .references('id')
      .inTable('classes')
      .onDelete('cascade');
    class_schedule
      .datetime('start_date');
    class_schedule
      .datetime('end_date');
    class_schedule
      .datetime('start_time');
    class_schedule
      .datetime('end_time');
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

  .createTable('user_role',user_role =>{
   user_role
    .integer('userid')
    .references('id')
    .inTable('users')
    .onDelete('cascade');
   user_role
    .integer('roleid')
    .references('id')
    .inTable('role')
    .onDelete('cascade');
  })
  
  .createTable('class_user',class_user => {
    class_user
      .integer('classid')
      .references('id')
      .inTable('classes')
      .onDelete('cascade');
    class_user
      .integer('userid')
      .references('id')
      .inTable('users')
      .onDelete('cascade');
  })

  .createTable('user_registration', user_registration => {
    user_registration
      .integer('userid')
      .references('id')
      .inTable('users')
      .onDelete('cascade');
    user_registration
      .integer('scheduleid')
      .references('id')
      .inTable('class_schedule')
      .onDelete('cascade');
  })
  
};
exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('users')
    .dropTableIfExists('role')
    .dropTableIfExists('user_role')
    .dropTableIfExists('class_user')
    .dropTableIfExists('classes')
    .dropTableIfExists('class_schedule');
};