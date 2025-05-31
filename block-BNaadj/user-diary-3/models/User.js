let mongoose = require("mongoose")
let Schema = mongoose.Schema


let userSchema = new Schema({
    name:{type:String, require:true},
    email:{type:String, require:true},
    age:{type:Number, require:true},
    address:{type:String,require:true},
    bio:{type:String,require:true},
    hobbies:[String]
})


let User = mongoose.model("User", userSchema)

module.exports= User