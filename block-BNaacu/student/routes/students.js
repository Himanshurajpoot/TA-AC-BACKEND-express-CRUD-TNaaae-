let express = require("express")
let studentRouter = express.Router()


studentRouter.get("/new",(req,res)=>{
    res.render("form")
})

studentRouter.post("/",(req,res)=>{
     res.json(req.body)
     console.log(req.body)
})

studentRouter.get("/",(req,res)=>{
    let list = ["ankit", "suraj","prashant","ravi"]
    res.render("students", {list: list})
})

studentRouter.get("/:id",(req,res)=>{
    res.render("studentDetail", {student:{name:"rahul", email:"rahul@altca,paus"}})
})

module.exports = studentRouter

