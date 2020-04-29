Database name:
    *local (sqlite) - fitness.db3 
    *Heroku (postgresql) - aw-fitness-5
        api url: https://aw-fitness-5.herokuapp.com/

//Heroku Postgresql//
Tables
*users - clients and instructors with an account
id          int4 (auto increment) PK
fname       varchar
lname       varchar
password    varchar
username    varchar

*role - roles available to registered users(client or instructor)
id          int4 (auto increment) PK
title       varchar

*classes - list of classes (Yoga, Swim, Crossfit, etc) and intensity level
id          int4 (auto increment) PK
classname   varchar
intensity   int4

*class_schedule
id              int4 (auto increment)
instructorid    int4 FK references id in users table
classid         int4 FK references id in classes table
start_date      date (format: '2020-05-10')
end_date        date (format: '2020-05-10')
start_time      time (format: '10:00:00')
end_time        time (format: '10:00:00')

*user_role - list of users with their role(client or instructor)
id              int4 (auto increment) PK
userid          int4 FK references id in users table
roleid          int4 FK references id in role table

*class_user - list of users and class they signed up for
id              int4 (auto increment) PK
classid         int4 FK references id in classes table
userid          int4 FK references id in users table

*user_registration - registered users and the class their schedules
id              int4 (auto increment) PK
userid          int4 FK references id in users table
scheduleid      int4 FK refences id in class_schedule table


