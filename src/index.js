const express=require("express");
const usercontroller=require("./controllers/user.controllers.js");
const studentcontroller=require("./controllers/student.controllers.js");
const batchcontroller=require("./controllers/batch.controllers.js");
const evaluationcontroller=require("./controllers/evaluation.controllers.js");
const submissioncontroller=require("./controllers/submission.controllers.js");

const app= express();

app.use(express.json());
app.use("/users",usercontroller);
app.use("/students",studentcontroller);
app.use("/batchs",batchcontroller);
app.use("/evaluations",evaluationcontroller);
app.use("/submissions",submissioncontroller);
module.exports=app;