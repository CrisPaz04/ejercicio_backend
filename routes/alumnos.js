const express = require("express");
const router = express.Router();

const estudiantesController = require("../controllers/estudiantesController");
router.get("/", estudiantesController.list);
router.post("/", estudiantesController.save);
router.delete("/:idestudiante", estudiantesController.delete);
router.get("/:idestudiante", estudiantesController.edit);
router.post("/:idestudiante", estudiantesController.update);

module.exports = router;
