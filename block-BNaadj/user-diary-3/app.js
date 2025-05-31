// require
let express = require('express');
let mongoose = require('mongoose');
let logger = require('morgan');
let userRouter = require("./routes/user")

// initiating
let app = express();

// mpngoose connecting
async function connectingMongoose() {
  try {
    await mongoose.connect('mongodb://localhost/user-diary-3');
    console.log('mongoose connecting is succsessfully');
  } catch (err) {
    console.error(err + 'something error to connecting mongoose');
  }
}

connectingMongoose();

//   middleware

app.use(logger('dev'));

app.use(express.urlencoded({ extended: false }));

// setup view engine

app.set('view engine', 'ejs');
app.set('views', __dirname+'/views');

// routing middleware
app.use("/users", userRouter)
// error handle

app.use((req, res, next) => {
  res.status(404).send('page not found');
});

// listener

app.listen(4000, () => {
  console.log('server is lestening on port 4k');
});
