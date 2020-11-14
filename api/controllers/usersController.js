var Users = require("../models/users");
const passport = require("passport");

// Display detail page for a specific User.
exports.user_detail = function (req, res) {
  res.send("NOT IMPLEMENTED: User detail: " );
};

exports.user_create_get = function (req, res) {
  res.send("NOT IMPLEMENTED: User detail: " + req.params.id);
};

exports.user_create_post = function (req, res, next) {
    res.setHeader('Content-Type', 'application/json')
    var user = new Users({
        username: req.body.username,
        password: req.body.password,
    })
    user.save(function (err) {
        if (err) { return next(err);}
        // Successful - redirect to new game record.
        res.redirect(user.url);
    })
};

exports.user_login_post = passport.authenticate("local",{
  successRedirect: "/users/success",
  failureRedirect: "/users/failure"
})

exports.user_login_success = function (req, res) {
  res.send("NOT IMPLEMENTED: LOGIN SUCCESS: ");
};

exports.user_login_failure = function (req, res) {
  res.send("NOT IMPLEMENTED: LOGIN FAILURE: ");
};

exports.user_logout = function (req, res) {
  req.logout();
  res.redirect("/")
};