const express = require("express");
const {
  getVoitures,
  getVoitureById,
  createVoiture,
  updateVoiture,
  deleteVoiture,
} = require("../controllers/voitureController");
const { protect, isAdmin } = require("../middlewares/authMiddleware");

const router = express.Router();

router.get("/", getVoitures);
router.get("/:id", getVoitureById);
router.post("/", protect, isAdmin, createVoiture);
router.put("/:id", protect, isAdmin, updateVoiture);
router.delete("/:id", protect, isAdmin, deleteVoiture);

module.exports = router;
