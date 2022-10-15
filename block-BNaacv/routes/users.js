var express = require('express');
var router = express.Router();

//user routers

router.get('/new', (req, res) => {
  res.render('usersForm.ejs');
});

//saving data
router.post('/', (req, res) => {
  res.send(req.body);
});

//fetch the user
router.get('/', (req, res) => {
  res.render('users.ejs');
});

//fetch one user
router.get('/:id', (req, res) => {
  res.render('singleUser.ejs', {
    user: { name: 'kunal', email: 'abc@gmail.com' },
  });
});

//update user

router.get('/:id/edit', (req, res) => {
  res.render('usersForm.ejs');
});

router.put('/:id', (req, res) => {
  res.send(req.body);
});

//delete User
router.delete('/:id', (req, res) => {});
module.exports = router;
