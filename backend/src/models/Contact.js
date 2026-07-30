const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
  {
    nom: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    sujet: {
      type: String,
      trim: true,
    },
    message: {
      type: String,
      required: true,
    },
    traite: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Contact", contactSchema);
