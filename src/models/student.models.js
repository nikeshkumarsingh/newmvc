const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true,
        unique:true,
    },
    batchId:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"batch",
      reuired:true,
      unique:true,
    },
  },{
    versionKey: false,
    timestamps: true,
  }
);


const Student = mongoose.model("student", studentSchema);

module.exports = Student;