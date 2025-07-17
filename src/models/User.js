const { default: mongoose } = require("mongoose");

const schema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: false,
  },
  phone: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: false,
  },
  role: {
    type: String,
    default: "USER",
  },
  refreshToken: {
    type: String,
    default: "USER",
  },
});

const UserModel = mongoose.models.User || mongoose.model("User", schema);

module.exports = UserModel;
