const router = require('express').Router();
const bcrypt = require('bcrypt');
const Users = require('./users-model');

// for endpoints beginning with /api/users

router.get('/', (req, res) => {
  Users.find()
    .then(users => {
      res.json(users)
    })
    .catch(err => res.send(err));
});

router.post('/register', (req, res) => {
  // if (!req.body.username || !req.body.password) {
  //   res.status(400);
  //   res.send('Invalid details');
  // } else { 
    // Users.find(user => {e
    //   if (user.username === req.body.username) {
    //     res.json({ message: 'User already exists. Login or register.' })
    //   }
    // });
    // const newUser = { username: req.body.username, password: req.body.password }
    Users.add(req.body)
    .then(saved => {
      res.status(201).json({ message: 'user added!'});
      // req.session.user = newUser;
      // res.redirect('/dad-jokes')
    })
    .catch(error => {
      res.status(500).json(error)
    })
  // }
  // let user = req.body;
  // const hash = bcrypt.hashSync(user.password, 10); 
  // user.password = hash;
  
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