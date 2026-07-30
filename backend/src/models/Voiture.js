const mongoose = require("mongoose");

const voitureSchema = new mongoose.Schema(
  {
    marque: {
      type: String,
      required: true,
      trim: true,
    },
    modele: {
      type: String,
      required: true,
      trim: true,
    },
    annee: {
      type: Number,
    },
    prixParJour: {
      type: Number,
      required: [true, "Le tarif journalier est requis"],
    },
    carburant: {
      type: String,
      enum: ["essence", "diesel", "electrique", "hybride"],
      default: "essence",
    },
    transmission: {
      type: String,
      enum: ["manuelle", "automatique"],
      default: "manuelle",
    },
    places: {
      type: Number,
      default: 5,
    },
    image: {
      type: String, // URL de l'image (ex: hébergée sur Cloudinary ou /public)
    },
    disponible: {
      type: Boolean,
      default: true,
    },
    description: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Voiture", voitureSchema);
