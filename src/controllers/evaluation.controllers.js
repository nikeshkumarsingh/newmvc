const express = require("express");

const Evaluation = require("../models/evaluation.models");

const crudController = require("./crud.controllers");

const router = express.Router();

// COMMENTS CRUD
router.get("", async (req, res) => {
  try {
    const evaluations = await Evaluation.find().populate("userId").populate("batchId")
      .lean()
      .exec();

    return res.status(200).send(evaluations);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.post("", crudController.post(Evaluation));

router.get("/:id", async (req, res) => {
  try {
    const evaluation = await Evaluation.findById(req.params.id)
      .populate({
        path: "userId",
        //select: ["title", "body"],
        populate: { path: "userId", select: [ "firstName"] },
      })
      .populate({ path: "batchId", select: ["batchName"] })
      .lean()
      .exec();

    return res.status(201).send(evaluation);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const evaluation = await Evaluation.findById(req.params.id)
      .populate({
        path: "userId",
        //select: ["title", "body"],
        populate: { path: "userId", select: [ "firstName"] },
      })
      .populate({ path: "batchId", select: ["batchName"] })
      .lean()
      .exec();

    return res.status(200).send(evaluation);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.delete("/:id", crudController.deleteOne(Evaluation));

module.exports = router;