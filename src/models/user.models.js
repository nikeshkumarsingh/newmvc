const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: false },
    gender: { type: String, required: true,},
    DOB:{type:String,required:true},
    Type:{type:String,required:true},
  },
  {
    versionKey: false,
    timestamps: true, 
  }
);


const User = mongoose.model("user", userSchema);

module.exports = User;