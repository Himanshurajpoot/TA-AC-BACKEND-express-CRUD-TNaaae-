let express = require('express');
let router = express.Router();
let User = require('../models/User');

router.get('/', async (req, res) => {
  try {
    let users = await User.find({});
    console.log('hjkjkjjhuhguk');
    console.log(users);
    res.render('users', { users: users });
  } catch (err) {
    console.error(err + 'something error to find user list');
  }
});

router.post('/', async (req, res) => {
  try {
    let user = await User.create(req.body);
    res.redirect('/users');
    console.log('created user successfully');
  } catch (err) {
    console.error(err + 'something error to create user');
  }
});

router.get('/:id', async (req, res) => {
  try {
    let id = req.params.id;
    let user = await User.findById(id);
    console.log(user);
    res.render('singleUser', { user });
  } catch (err) {
    console.error(err + 'something error to find that single user');
  }
});

router.put('/:id', async (req, res) => {
  try {
    let id = req.params.id;
    let user = await User.findByIdAndUpdate(id, req.body);
    console.log(user);
    res.redirect('/users');
  } catch (err) {
    console.error(err + 'something error in updating users');
  }
});

router.delete('/:id', async (req, res) => {
  try {
    let id = req.params.id;
    let user = await User.findByIdAndDelete(id);
    res.redirect('/users');
  } catch (err) {
    console.error(err + 'something is error to deleteing user');
  }
});

module.exports = router;
