const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String }
  },
  { versionKey: false, timestamps: true }
);

userSchema.pre("save", function (next) {
  if (!this.isModified("password")) return next();
  const hash = bcrypt.hashSync(this.password, 10);
  this.password = hash;
  return next();
});

userSchema.methods.checkPassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};
const User = mongoose.model("user", userSchema);

module.exports = User;
