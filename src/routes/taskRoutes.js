const express = require("express");
const router = express.Router();

const taskController = require("../controllers/taskController");

router.post("/otp/send", taskController.createTask);
router.post("/otp/verify", taskController.getOrderById);
// router.patch("/:id", taskController.updateTaskStatus);

module.exports = router;