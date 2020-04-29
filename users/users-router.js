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

router.post('/login', (req, res) => {
  Users.findBy(req.body.username)
    .first()
    .then(user => {
      if (user != null) {
        // res.status(200).json({ message: 'user found' })
        if (bcrypt.compareSync(req.body.password, user.password)) {
          res.status(200).json({ message: 'password ok'})
        } else {
          res.status(400).json({ message: 'athentication failed'})
        }
      } else {
        res.status(400).json({ message: 'user not found!' })
      }
      
    })
    .catch(error => {
      res.status(500).json(error.message)
    })
});

module.exports = router;
