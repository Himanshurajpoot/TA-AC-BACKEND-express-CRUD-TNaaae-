let express = require("express")
let logger = require("morgan")
let mongoose = require("mongoose")

let indexRouter =require("./routes/index")
let studentRouter=require("./routes/students")

let app = express()


// mongoose connecting 

async function mongooseConnect() {
    try{
        await mongoose.connect("mongodb://localhost/schoolApplication")
        console.log("mongoosh connecting to succsessfully")
    }catch(err){
        console.error(err+"mongoosh connecting error")
    }
}

mongooseConnect()
 
// middeleware

app.use(logger("dev"))

app.use(express.json())
app.use(express.urlencoded({extended:false}))


// setup views ingine
app.set("view engine", "ejs")
app.set("views", __dirname+"/views")

// routes middleware

app.use("/" , indexRouter)
app.use("/students", studentRouter)

// error hendle

app.use((req,res, next)=>{
    res.status(400).send("page not found")
})

// listner
app.listen(4000,()=>{
    console.log("server is listening on port 4000")
})

