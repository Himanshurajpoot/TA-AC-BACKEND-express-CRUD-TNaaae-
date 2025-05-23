let express = require("express")
let userRouter = express.Router()
let User = require("../models/User")



userRouter.get("/",(req,res)=>{
    res.render("index")
})


userRouter.get("/new",(req,res)=>{
    res.render("user")
})

userRouter.post("/", async (req,res)=>{
   try{
       const user = await User.create(req.body)
        res.redirect("/users")
   }catch(err){
     
      console.error("Error creating user" , err)
       res.redirect("/users/new")
    //   res.status(404).send({message: err.message})
   }

})


module.exports=userRouter