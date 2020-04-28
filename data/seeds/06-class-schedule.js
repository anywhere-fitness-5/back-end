
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('class_schedule').del()
    .then(function () {
      // Inserts seed entries
      return knex('class_schedule').insert([
        {id: 0, instructorid: '3',classid: 1,start_date:2020-05-10, end_date:2020-05-17,start_time:"12:00:", end_time:"13:00"},
        {id: 1, instructorid: '4',classid:4,start_date:2020-06-12, end_date:2020-06-19,start_time:"8:00", end_time: "9:00"}
      ]);
    });
};
