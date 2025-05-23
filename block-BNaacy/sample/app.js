// require

let express = require("express")
let logger = require("morgan")
let mongoose = require("mongoose")
let userRouter = require("./routes/user")


let app = express()

// mongoose connecting 

async function mongooseConnecting() {
    try{
        await mongoose.connect("mongodb://localhost/sample")
        console.log("mongoose connecting succsessfully")
    }catch(err){
        console.error(err+"server connecting error")
    }
}

mongooseConnecting()


// midleware

app.use(logger("dev"))
app.use(express.urlencoded({extended:false}))

// setup view engine

app.set("view engine" ,"ejs")
app.set("views", __dirname+"/views")

// routing midlleware
app.use("/users",userRouter)



// error hendle
app.use(( req, res, next,)=>{
   res.status(404).send("page not found")
})

// listener
app.listen(4000,()=>{
    console.log("srever is listening on port 4k")
})