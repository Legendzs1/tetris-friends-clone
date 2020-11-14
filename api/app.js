var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')
var bodyParser = require('body-parser')
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var User = require("./models/users");
var MONGODB = require('./dbconnect')
const dev_db_url = MONGODB.MONGODB;

const mongoDb = dev_db_url;
mongoose.connect(mongoDb, { useUnifiedTopology: true, useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "mongo connection error"));

var app = express();
app.use(cors())
app.use(session({ secret: "cats", resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
passport.use(
    new LocalStrategy((username, password, done) => {
        console.log("passport localstrat " + username)
      User.findOne({ username: username }, (err, user) => {
        if (err) { 
          return done(err);
        };
        if (!user) {
          return done(null, false, { msg: "Incorrect username" });
        }
        if (user.password !== password) {
          return done(null, false, { msg: "Incorrect password" });
        }
        return done(null, user);
      });
    })
);
passport.serializeUser(function(user, done) {
    done(null, user.id);
});
passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
});
//app.use(express.urlencoded({ extended: true }));
app.use(logger('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
