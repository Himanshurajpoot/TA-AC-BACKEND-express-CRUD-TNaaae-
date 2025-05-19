let express = require("express")
let userRouter = express.Router()


userRouter.get("/",(req,res)=>{
    let userList = ["himanshu", "loveKush", "sunny"]
    res.render("users", {userList:userList})
})



userRouter.get("/new",(req,res)=>{
    res.render("userForm")
})

userRouter.post("/",(req,res)=>{
    // capture the form data
})

userRouter.get("/:id",(req,res)=>{
    let user = {name:"himanshu",age:20,collage:"galgotias"}
    res.render("singleUser",{user:user})
}) 

userRouter.get("/:id/edit",(req,res)=>{
    // rdit form
})

userRouter.put("/:id",(req,res)=>{
    // capture the data from the update from
})

userRouter.delete("/:id",(req,res)=>{
    // delete that user
})

module.exports = userRouter