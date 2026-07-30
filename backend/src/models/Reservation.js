const mongoose = require("mongoose");

const reservationSchema = new mongoose.Schema(
  {
    client: {
      nom: { type: String, required: true, trim: true },
      email: { type: String, trim: true },
      telephone: { type: String, trim: true },
    },
    voiture: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Voiture",
      required: true,
    },
    dateDepart: {
      type: Date,
      required: true,
    },
    dateRetour: {
      type: Date,
      required: true,
    },
    montant: {
      type: Number,
      required: true,
    },
    statut: {
      type: String,
      enum: ["en_attente", "en_cours", "terminee", "annulee"],
      default: "en_attente",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Reservation", reservationSchema);
