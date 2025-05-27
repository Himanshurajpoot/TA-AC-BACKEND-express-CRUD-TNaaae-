// require
let express = require('express');
let logger = require('morgan');
let mongoose = require('mongoose');
let userRouter = require("./routes/user")

// initialising app
let app = express();

// mongoose connecting
async function connectingTheMongoose() {
  try {
    await mongoose.connect('mongodb://localhost/UsersCollection');
    console.log('mongoose is connecting succsessfully');
  } catch (err) {
    console.error(err + 'mongoose is not connectin');
  }
}
connectingTheMongoose();

// middleware
app.use(logger('dev'));

app.use(express.urlencoded({extended: false}))

// setup views engine

app.set("view engine", "ejs")
app.set("views" ,__dirname+"/views")

// routing miiddleware
app.use("/users", userRouter)


// error handle
app.use((req, res, next) => {
  res.status(404).send('page not found');
});

// listener

app.listen(4000, () => {
  console.log('server is lisening on port 4k');
});
