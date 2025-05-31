// require
let express = require("express")
let mongoose = require("mongoose")
let logger = require("morgan")
let usersRouter = require("./routes/users")

// initialising app
let app = express()

// mongoose connecting 
async function connectMongoose() {
    try{
        mongoose.connect("mongodb://localhost/user-diary-2")
        console.log("mongoose connecting succsessfully")
    }catch(err){
        console.error(err+"mongoose connecting problems")
    }
}

connectMongoose()

// middleware
app.use(logger("dev"))

app.use(express.urlencoded({extended:false}))

// setup views engine

app.set("view engine", "ejs")
app.set("views" , __dirname+"/views")

// routing middleware
app.use("/users", usersRouter)

// error handle
app.use((req,res,next)=>{
    res.status(404).send("page not found")
})

// listener

app.listen(4000, ()=>{
    console.log("server is listening on port 4k")
})