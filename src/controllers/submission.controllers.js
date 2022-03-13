const express = require("express");

const Submission = require("../models/submission.models");

const crudController = require("./crud.controllers");

const router = express.Router();

// COMMENTS CRUD
router.get("", async (req, res) => {
  try {
    const submissions = await Submission.find()
      .populate({
        path: "evaluationId",
        select: ["dateOfEvaluation"],
       // populate: { path: "evaluationId", select: [""] },
      })
      .populate({ path: "studentId", select: ["marks"] })
      .lean()
      .exec();

    return res.status(200).send(submissions);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.post("", crudController.post(Submission));

router.get("/:id", async (req, res) => {
  try {
    const submission = await Submission.findById(req.params.id)
      .populate({
        path: "evaluationId",
        //select: ["title", "body"],
        // populate: { path: "userId", select: [ "firstName"] },
      })
      .populate({ path: "studentId", select: ["marks"] })
      .lean()
      .exec();

    return res.status(201).send(submission);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const submission = await Submission.findById(req.params.id)
      .populate("evaluationId")
      .populate({ path: "studentId", select: ["marks"] })
      .lean()
      .exec();

    return res.status(200).send(submission);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.delete("/:id", crudController.deleteOne(Submission));

module.exports = router;