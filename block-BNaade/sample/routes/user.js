let express = require('express');
let router = express.Router();
let User = require('../models/User');

router.get('/new', (req, res) => {
  res.render('userForm');
});

router.get('/', async (req, res) => {
  try {
    let users = await User.find({});
    console.log(users);
    res.render('users', { users: users });
  } catch (err) {
    console.error(err + 'something want wrong');
  }
});

router.post('/', async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.redirect('/users');
    console.log(user);
  } catch (err) {
    res.redirect('/users/new');
    console.error(err + 'not create the user');
  }
});

router.get('/:id', async (req, res) => {
  try {
    let id = req.params.id;
    let user = await User.findById(id);
    res.render('singleUser', { user});
  } catch (err) {
    console.error(err + 'something wrong find single user');
  }
});

router.get("/:id/edit", async(req,res)=>{
    try{
      let id = req.params.id;
      let user = await User.findById(id)
      res.render("updateUserForm",{user})
    } catch(err){
      console.error(err+ "something wrong find for update user")
    }
})

router.post("/:id", async(req,res)=>{
  try{
    let id = req.params.id
    let user = await User.findByIdAndUpdate(id, req.body)
    res.redirect("/users")
  }catch(err){
    console.error(err+"something wrong the update user")
  }
})

module.exports = router;
