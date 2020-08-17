const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  day:{
      type: Date,
  default: Date.now
},
exercises: [{
    type: { type: String },
    name: { type: String, required: "please add exercise name"},
    distance: { type: Number, required: "please add distance"},
    duration: { type: Number, required: "please add duration"},
    weight: { type: Number, required: "please add weight"},
    sets: { type: Number, required: "please add sets"},
    reps: { type: Number, required: "please add repsInput"},
}]
});
const User = mongoose.model("User", UserSchema);

module.exports = User;

