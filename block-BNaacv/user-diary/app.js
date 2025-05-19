// require
let express = require("express")
let mongoose = require("mongoose")
let logger = require("morgan")

let userRouter = require("./routers/users")
let indexRouter = require("./routers/index")

let app = express()

// mongoose connecting

async function mongooseConnecting() {
    try{
        await mongoose.connect("mongodb://localhost/school")
        console.log("mongoose is connecting succsessfully")
    }catch(err){
        console.error(err+"connectin problem")
    }
}

mongooseConnecting()

// middleware
app.use(logger("dev"))

app.use("/", indexRouter)
app.use("/users", userRouter)

// setup view engine

app.set("view engine" , "ejs")
app.set("views",__dirname+"/views")

// error handle

app.use((req,res,next)=>{
    res.status(404).send("page not found")
})


// lestener

app.listen(4000,()=>{
    console.log("server is lestning on port 4k")
})