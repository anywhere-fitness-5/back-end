const router = require('express').Router();
const bcrypt = require('bcrypt');
const Users = require('../secure/addClassesModel');
const jwt = require('jsonwebtoken');



function verifyToken(req, res, next) {
    // token should be sent in the header as value to Authorization
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
  
  module.exports = router;