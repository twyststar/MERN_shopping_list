const express = require('express');
const mongoose = require('mongoose'); //ORM to interact w Mongo Db
const bodyParser = require('body-parser'); //Allow us to take requests and get data
const items = require('./routes/api/items');

const app = express();

//Bodyparser Middleware
app.use(bodyParser.json());

// DB Config 
const db = require('./config/keys').mongoURI;

//Connect to Mongo
mongoose
  .connect(db)
  .then(() => console.log('MongoDB connected')) //Tells us db connected
  .catch(err => console.log(err)); //Or that ther is an error

// Use routes
app.use('/api/items', items);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));