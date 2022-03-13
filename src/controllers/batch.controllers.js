const express= require("express");
const Batch=require("../models/batch.models");
const crudcontroller=require("./crud.controllers");
const router=express.Router();
router.get("",async(req,res)=>{
    try{
        const batchs=await Batch.find().lean().exec();
        return res.status(200).send(batchs)
    }
    catch(err){
        return res.status(500).send({message:err.massage})
    }
});

router.post("",crudcontroller.post(Batch));
router.patch("/:id", async (req, res) => {
    try {
      const batch = await Batch.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      })
        .lean()
        .exec();
     
  
      return res.status(200).send(batch);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });
  
  router.delete("/:id", crudcontroller.deleteOne(Batch));
  
  module.exports = router;