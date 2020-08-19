const express = require('express');
const mongoose = require('mongoose');
const logger = require('morgan');
const PORT = process.env.PORT || 3000;
const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("public"));
//app.use(express.static("seeders/seed.js"));

// Heroku needs line below
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/workout";
// add more defintion to {} parser, use create index, etc.
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true
});
// create models and routes hereby
app.use(require('./routes/api.js'));
app.use(require('./routes/html.js'));

app.listen(PORT, function(){
    return console.log("this works!");
});


