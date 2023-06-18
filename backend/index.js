require("dotenv").config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const merchantRoutes = require('./routes/merchants');

mongoose.connect(
    process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true, dbName: 'SQ_APP' }
)
.then((db) => console.log( "db is connected"))
.catch((err) => console.error('connection failed:', err));

// Enable CORS for all routes
app.use(
  cors({
    //replace with deployed endpoint
    origin: "http://192.168.1.83:19000",
    credentials: true,
  })
); // config cors so that front-end can use

app.options("*", cors({
    //replace with deployed endpoint
    origin: "http://192.168.1.83:19000"}));


// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({
  extended: true
}));

// Routes
app.use('/merchants', merchantRoutes);


//setup server to listen on port 8080
app.listen(process.env.PORT || 8080, () => {
    console.log("Server is live on port 8080");
  })
