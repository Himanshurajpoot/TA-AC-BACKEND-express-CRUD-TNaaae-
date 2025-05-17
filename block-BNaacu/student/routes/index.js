let express = require("express")
let indexRouter = express.Router()


indexRouter.get("/", (req, res)=>{
    res.render("index")
})

indexRouter.get("/about",(req,res)=>{
    res.render("about")
})

module.exports=indexRouter