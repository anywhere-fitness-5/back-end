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
})


module.exports = router;