let express = require("express")
let mongoose = require("mongoose")
let logger = require("morgan")

// Him

let app = express()

// mongoose coneecting

async function mongooseConnecting() {
    try{
        await mongoose.connect("mongodb://localhost/schoolApplication")
        console.log("mongoose connect to succsessfully")
    }catch(err){
        console.error(err+"error connecting to mongoose")
    }
}

mongooseConnecting()


// middelware
app.use(logger("dev"))

// setup view engine
app.set("view engine", "ejs")
app.set("views", __dirname + "/views")

// routes
app.get ("/",(req,res)=>{
    res.render("index")
})

// listener
app.listen(4000,()=>{
    console.log("server is listening on port 4k")
})



