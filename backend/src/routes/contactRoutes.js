const express = require("express");
const { createContact, getContacts } = require("../controllers/contactController");
const { protect, isAdmin } = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/", createContact);
router.get("/", protect, isAdmin, getContacts);

module.exports = router;
