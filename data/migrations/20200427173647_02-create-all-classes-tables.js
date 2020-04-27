
exports.up = function(knex) {
return knex.schema

    .createTable('role',role => {
        role.increments();
        role
          .string('title')
          .notNullable()
          .unique();
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
     
      .createTable('class_schedule', class_schedule => {
      class_schedule
          .increments();
   
      class_schedule
          //.integer('instructorid')
          .integer('classid')
          .references('id')
          .inTable('classes')
          .onUpdate('CASCADE')
          .onDelete('CASCADE');
      class_schedule
        .datetime('start_date');
      class_schedule
        .datetime('end_date');
      class_schedule
        .datetime('start_time');
      class_schedule
        .datetime('end_time');
      })

      .createTable('user_role',user_role =>{
        user_role
         .integer('userid')
         .primary()
         .unsigned()
         .references('id')
         .inTable('users');
        user_role
         .integer('roleid')
         .unsigned()
         .references('id')
         .inTable('role')
         .onUpdate('CASCADE')
         .onDelete('CASCADE');
       })

       .createTable('class_user',class_user => {
        class_user
          .integer('classid')
          .primary()
          .references('id')
          .inTable('classes');
        class_user
          .integer('userid')
          .notNullable()
          .references('id')
          .inTable('users')
          .onUpdate('CASCADE')
          .onDelete('CASCADE');
      })
};

exports.down = function(knex) {
  return knex.schema 
  .dropTableIfExists('class_user')
  .dropTableIfExists('user_role')
  .dropTableIfExists('class_schedule')
  .dropTableIfExists('classes')
  .dropTableIfExists('role');
//   .dropTableIfExists('role')
//   .dropTableIfExists('classes')
//   .dropTableIfExists('class_schedule')
//   .dropTableIfExists('user_role')
//   .dropTableIfExists('class_user');
};
