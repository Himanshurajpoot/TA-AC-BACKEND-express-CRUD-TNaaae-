let mongoose = require("mongoose")
let Schema = mongoose.Schema


let userSchema = new Schema({
    name:{type:String, require:true},
    age:{type:Number, require:true},
    collage:{type:String, require:true}
},{timestamps:true})


let User = mongoose.model("User", userSchema)

module.exports=User