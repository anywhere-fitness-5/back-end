
exports.up = function(knex) {
  return knex.schema

  // client table
  .createTable('client', client => {
    client
      .increments();
    client
      .string('username', 30)
      .unique()
      .notNullable();      
    client
      .string('password', 128)
      .notNullable();
    client
      .string('name', 30);
  })

  // instructor
  .createTable('instructor', instructor => {
    instructor
      .increments();
    instructor 
      .string('username', 30)
      .unique()
      .notNullable();      
    instructor
      .string('password', 128)
      .notNullable();
    instructor
      .string('name', 30);
  })

  // class
  .createTable('class', fitness_class => {
    fitness_class
      .increments();
    fitness_class
      .integer('instructor_id')
      .unsigned()
      .index()
      .inTable('instructor')
      .references('id');
    fitness_class
      .integer('client_id')
      .unsigned()
      .index()
      .inTable('client')
      .references('id');
    fitness_class
      .string('name', 30);
    fitness_class 
      .integer('num_registered');
    fitness_class 
      .integer('max_size');
    fitness_class
      .string('type');
    fitness_class
      .string('time');
    fitness_class
      .string('date');
    fitness_class
      .string('duration');
    fitness_class
      .string('intensity');
    fitness_class
      .string('location');
  })

  .createTable('user_class', user_class => {
    user_class
      .increments()
    user_class
      .integer('instructor_id')
      .unsigned()
      .index()
      .inTable('instructor')
      .references('id');
    user_class
      .integer('client_id')
      .unsigned()
      .index()
      .inTable('client')
      .references('id');
    user_class  
      .integer('class_id')
      .unsigned()
      .index()
      .inTable('class')
      .references('id');
  })

};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('user_class')
    .dropTableIfExists('class')
    .dropTableIfExists('instructor')
    .dropTableIfExists('client')
};
