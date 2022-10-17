var express = require('express');
var router = express.Router();
var User = require('../models/user');

//user Routes

//fetch the user
router.get('/', (req, res) => {
  User.find({}, (err, users) => {
    if (err) return next(err);
    res.render('users.ejs', { users: users });
  });
});

//Creating new user
router.get('/new', (req, res) => {
  res.render('userForm.ejs');
});

//Saving data
router.post('/', (req, res, next) => {
  User.create(req.body, (err, createduser) => {
    if (err) {
      return next(err);
    }
    res.redirect('/users');
  });
});
//fetching single user
router.get('/:id', (req, res, next) => {
  var id = req.params.id;
  User.findById(id, (err, user) => {
    if (err) return next(err);
    res.render('singleUser', { user });
  });
});

//update user
router.get('/:id/edit', (req, res, next) => {
  var id = req.params.id;
  User.findById(id, (err, user) => {
    if (err) return next(err);
    res.render('editUserForm', { user: user });
  });
});

router.post('/:id', (req, res, next) => {
  var id = req.params.id;
  User.findByIdAndUpdate(id, req.body, (err, updatedUse) => {
    if (err) return next(err);
    res.redirect('/users/' + id);
  });
});
module.exports = router;
