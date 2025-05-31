let express = require("express");
let router = express.Router()
let User = require("../models/User")


router.get("/new", (req,res)=>{
    res.render("userForm")
})

router.get("/",async(req,res)=>{
     try{
        let users = await User.find({})
        res.render("userList", {users:users})
     }catch(err){
        console.error(err+"something error to find all users")
     }
})

router.post("/",async(req,res)=>{
    try{
        let user = await User.create(req.body)
        res.redirect("/users")
        console.log(user+ "user createrd succsessfully")
    }catch(err){
        console.error(err+"something error to create user")
    }
})

router.get("/:id",async(req,res)=>{
    try{
        let id = req.params.id
        let user = await User.findById(id)
        res.render("singleUser", {user})
    }catch(err){
        console.error(err+"something error to find single user")
    }
})

router.get("/:id/edit",async(req,res)=>{
   try{
    let id = req.params.id;
    let user = await User.findById(id);
    res.render("updateUserForm",{user})
   }catch(err){
    console.error(err+"something error to update user form")
   }
})

router.post("/:id",async(req,res)=>{
    try{
        let id = req.params.id
        let user = await User.findByIdAndUpdate(id, req.body)
        res.redirect("/users/"+id)
    }catch(err){
        console.error(err+"something error to updated user")
    }
})

router.get("/:id/delete", async(req,res)=>{
    try{
        let id = req.params.id
        let user = await User.findByIdAndDelete(id)
        res.redirect("/users")
    }catch(err){
        console.error(err+"something is error for deleteing user")
    }
})


module.exports=router