const express = require("express");
const {
  getReservations,
  createReservation,
  updateReservation,
  deleteReservation,
  getStats,
} = require("../controllers/reservationController");
const { protect, isAdmin } = require("../middlewares/authMiddleware");

const router = express.Router();

// ⚠️ /stats doit être déclaré AVANT /:id pour éviter les conflits de route
router.get("/stats", protect, isAdmin, getStats);

router.get("/", protect, isAdmin, getReservations);
router.post("/", createReservation);
router.put("/:id", protect, isAdmin, updateReservation);
router.delete("/:id", protect, isAdmin, deleteReservation);

module.exports = router;