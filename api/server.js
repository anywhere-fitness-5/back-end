const express = require('express');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const helmet = require('helmet');

const usersRouter = require('../users/users-router');
const classesRouter = require('../classes/classes-router');
const secureAddClassRouter = require('../secure/addClassesRouter');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/users', usersRouter);
//server.use('https://aw-fitness-5.herokuapp.com/api/users', usersRouter);

server.use('/api/classes', classesRouter);
//server.use('https://aw-fitness-5.herokuapp.com/api/classes', classesRouter);

server.use('/api/addClass', secureAddClassRouter);

server.use('/', (req, res) => {
  res.send("=== API is running ===");
}) 

module.exports = server;

function verifyToken(req, res, next) {
  // token should be sent in the headeer as value to Authorization
  const bearerHeader = req.headers['authorization'];
  if (typeof bearerHeader !== 'undefined') {
    const bearer = bearerHeader.split(' ');
    const bearerToken = bearer[1];
    req.token = bearerToken;
    next();
  } else {
    res.sendStatus(403); // user is forbidden
  }
}