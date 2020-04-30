const router = require('express').Router();
const bcrypt = require('bcrypt');
const Users = require('./users-model');


//endpoints for /api/users
router.get('/', (req, res) => {
  Users.find()
    .then(users => {
      res.json(users)
    })
    .catch(err => res.send(err));
});

router.post('/register', (req, res) => {
  let registerData = req.body;
  Users.add(registerData)
  .then(users => {
    res.status(201).json({ message: 'user added'})
  })
  .catch(error => {
    res.status(500).json({ message: 'could not create user.' })
  })
});

router.post('/login', (req, res) => {
  Users.findBy(req.body.username)
    .first()
    .then(user => {
      if (user) {
        if (bcrypt.compareSync(req.body.password, user.password)) {
          res.status(200).json({ message: 'logged in successfully'})
          } else {
           res.status(400).json({ message: 'could find that user or password'})
          }
        }else{
        res.status(400).json({ message: 'could find that user or password' })
        }
      })
      .catch(error => {
        res.status(500).json(error.message)
    });
});

router.post('/register', (req, res) => {
  let postData = req.body;
  Users.add(postData)
  .then(users => {
    res.status(201).json({ message: 'user added!'})
  })
  .catch(error => {
    res.status(500).json({ message: 'Failed to create user.' })
  })
});


module.exports = router;