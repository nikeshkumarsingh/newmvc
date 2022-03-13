const express= require("express");
const Student=require("../models/student.models");
const crudcontroller=require("./crud.controllers");
const router=express.Router();
router.get("",async(req,res)=>{
    try{
        const students=await Student.find().populate("userId").populate("batchId").lean().exec();
        return res.status(200).send(students)
    }
    catch(err){
        return res.status(500).send({message:err.massage})
    }
});
router.get("/:id",async(req,res)=>{
    try{
         const student =await Student.findById(req.params.id).lean().exec();
         return res.status(200).send(student);
    }
    catch(err){
        return res.status(500).send({message:err.message});
    }
});
router.post("", crudcontroller.post(Student));
router.patch("/:id", async (req, res) => {
    try {
      const student = await Student.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      })
        .lean()
        .exec();
      // db.users.update({_id: Object('622893471b0065f917d24a38')}, {$set: {req.body}})
  
      return res.status(200).send(student);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });
  
  router.delete("/:id", crudcontroller.deleteOne(Student));
  
  module.exports = router;