const express= require("express");
const User=require("../models/user.models");
const crudcontroller=require("./crud.controllers");
const router=express.Router();
router.get("",async(req,res)=>{
    try{
        const users=await User.find().lean().exec();
        return res.status(200).send({users:users})
    }
    catch(err){
        return res.status(500).send({message:err.massage})
    }
});
router.post("",crudcontroller.post(User));
router.get("/:id",async(req,res)=>{
    try{
         const user =await User.findById(req.params.id).lean().exec();
         return res.status(200).send(user);
    }
    catch(err){
        return res.status(500).send({message:err.message});
    }
});

router.patch("/:id", async (req, res) => {
    try {
      const user = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      })
        .lean()
        .exec();
      // db.users.update({_id: Object('622893471b0065f917d24a38')}, {$set: {req.body}})
  
      return res.status(200).send(user);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });
  
  router.delete("/:id", crudcontroller.deleteOne(User));
  
  module.exports = router;