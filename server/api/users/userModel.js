var mongoose = require('mongoose'),
    //bcrypt   = require('bcrypt'),
    Q        = require('q'),
    SALT_WORK_FACTOR  = 10;


var UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },

  friends: ["bob", "tom"]
});

UserSchema.methods.authorize = function (candidatePassword) {
  var checkOAuth = true;
  return checkOAuth;
};

module.exports = mongoose.model('users', UserSchema);