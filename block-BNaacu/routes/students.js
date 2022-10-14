var express = require('express');
var router = express.Router();

//book routes

router.get('/new', (req, res) => {
  res.render('studentForm');
});

router.post('/', (req, res) => {
  res.send(req.body);
  Student.create(req.body, (err, student) => {
    console.log(err, student);
  });
  res.send(`${req.body.name} added successfully`);
});

router.get('/', (req, res) => {
  res.render('students', { list: ['ankit', 'suraj', 'prashant', 'ravi'] });
});

router.get('/:id', (req, res) => {
  var id = req.params.id;
  Student.findById(id, (err, students) => {
    console.log(err, students);
    var name = { name: 'kunal', email: 'kunal@gmail.com' };
    res.render('studentDetails', { name: name });
  });
});

router.get('/:id/edit', (req, res) => {
  //find the book from db
  // render a update form with book data
});

router.put('/:id', (req, res) => {
  //findbyidandupdate
});

router.delete('/:id', (req, res) => {
  //delete using id
});
module.exports = router;
