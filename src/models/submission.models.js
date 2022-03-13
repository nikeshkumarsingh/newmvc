const mongoose = require("mongoose");

const submissionSchema = new mongoose.Schema(
  {
      marks:{type:Number,required:true},
    evaluationId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"evaluation",
        required:true,
        unique:true,
    },
    studentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "student",
        required: true,
      },
  },{
    versionKey: false,
    timestamps: true,
  }
);


const Submission = mongoose.model("submission", submissionSchema);

module.exports = Submission;