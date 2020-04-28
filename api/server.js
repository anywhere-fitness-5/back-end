const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const usersRouter = require('../users/users-router.js');
const classesRouter = require('../classes/classes-router');
const rolesRouter = require('../roles/roles-router');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/users', usersRouter);
server.use('/api/classes', classesRouter);
server.use('/api/roles', rolesRouter);

server.use('/', (req, res) => {
  res.send("API up ...");
}) 

module.exports = server;