const router = require('express').Router();
const Classes = require('./classes-model');
const authMW = require('../api/authMW');

router.get('/', authMW, (req, res) => {
    Classes.find()
      .then(classes => {
        res.json(classes)
      })
      .catch(err => res.send(err));
  })


  module.exports = router;