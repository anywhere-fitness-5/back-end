const router = require('express').Router();
const bcrypt = require('bcrypt');
const Users = require('./users-model');


router.get('/', (req, res) => {
  Users.find()
    .then(users => {
      res.json(users)
    })
    .catch(err => res.send(err));
}); 

router.post('/register', (req, res) => {
  const userInfo = req.body;
  if (!userInfo.username || !userInfo.password) {
    res.status(400);
    res.send('Invalid details');
  }
  Users.findBy(req.body.username)
    .then(() => {
        Users.add(req.body)
        .then(saved => {
          res.status(201).json({ message: 'user added!'});
        })
        .catch(error => {
          console.log(error);
          res.status(500).json({ errorMessage: error.message });
        });
    })
    .catch(err => {
      res.status(500).json({ errorMessage: err.message })
    })
});

router.post('/login', (req, res) => {
  Users.findBy(req.body.username)
    .first()
    .then(user => {
      if (user) {
        res.status(200).json({
          message: `Welcome ${user.username}!`
        })
      } else {
        res.status(401).json({ message: 'Invalid Credentials!' })
      }
    })
    .catch(error => {
      res.status(500).json(error.message)
    })
});

module.exports = router;