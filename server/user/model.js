const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  referral: {
    type: String,
  },
  referral_notes: {
    type: String,
  },
  company: {
    type: Schema.Types.ObjectId,
    ref: 'Company'
  }
});

const User = mongoose.model("User", UserSchema);

export default User;