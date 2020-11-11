var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new Schema(
    {
        username: { type: String, unique: 1, required: true, minlength: 3 },
        password: { type: String, required: true, minlength: 6, maxlength: 100 }
    }
);

// UserSchema
// .virtual('username')
// .get(function () {
//     return this.username
// })
// UserSchema
// .virtual('url')
// .get(function () {
//     return '/user/' + this.username
// })

module.exports = mongoose.model('User', UserSchema)