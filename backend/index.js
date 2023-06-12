require("dotenv").config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const merchantRoutes = require('./routes/merchants');

const app = express();

mongoose.connect(
    process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true, dbName: 'SQ_APP' }
)
.then((db) => console.log( "db is connected"))
.catch((err) => console.error('connection failed:', err));


// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({
  extended: true
}));
app.use(cors());

//route middlware
// app.use('/merchants', apiRoutes);

// Routes
app.use('/merchants', merchantRoutes);

//setup server to listen on port 8080
app.listen(process.env.PORT || 8080, () => {
    console.log("Server is live on port 8080");
  })
