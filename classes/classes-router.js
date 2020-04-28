const router = require('express').Router();
const Classes = require('./classes-model');


router.get('/', (req, res) => {
  Classes.find()
    .then(classes => {
      res.json(classes)
    })
    .catch(err => res.send(err));
}); 

router.post('/add', (req, res) => {
  Classes.add(req.body)
  .then(() => {
    res.status(201).json({ message: 'class added!'});
  })
  .catch(error => {
    console.log(error);
    res.status(500).json({ errorMessage: error.message });
  });
});

module.exports = router;