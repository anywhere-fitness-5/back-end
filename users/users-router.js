const router = require('express').Router();
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
      if (user == null) {
        res.status(400).json({ message: 'user not found'})
      }
      try {
        if (bcrypt.compareSync(req.body.password, user.password)) {
          res.json({ message: 'Login Success!'})
        } else {
          res.json({ message: 'Invalid Credentials!' })
        }
      } catch {
        res.status(500).json()
      }
    })
    .catch(error => {
      res.status(500).json(error.message)
    })
});

module.exports = router;