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
  if (!req.body.username || !req.body.password) {
    res.status(400);
    res.send('Invalid details');
  }
  Users.findBy(req.body.username)
    .then(data => {
      if (data.username == req.body.username) {
        res.status(400).json({ message: 'duplicate username found'});
      }      
    })
  Users.add(req.body)
  .then(() => {
    res.status(201).json({ message: 'user added!'});
  })
  .catch(error => {
    res.status(500).json(error)
  })
});

router.post('/login', (req, res) => {
  let { username, password } = req.body;
  Users.findBy({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        res.status(200).json({
          message: `Welcome ${user.username}!`
        })
      } else {
        res.status(401).json({ message: 'Invalid Credentials!' })
      }
    })
    .catch(error => {
      res.status(500).json(error)
    })
});

module.exports = router;