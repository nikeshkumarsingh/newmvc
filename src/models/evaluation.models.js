const mongoose = require("mongoose");

const evaluationSchema = new mongoose.Schema(
  {
      dateOfEvaluation:{type:Date,required:true},
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true,
        unique:true,
    },
    batchId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "batch",
        required: true,
      },
  },{
    versionKey: false,
    timestamps: true,
  }
);


const Evaluation = mongoose.model("evalution", evaluationSchema);

module.exports = Evaluation;