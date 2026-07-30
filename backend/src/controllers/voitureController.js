const Voiture = require("../models/Voiture");

// @desc    Récupérer toutes les voitures
// @route   GET /api/voitures
// @access  Public
const getVoitures = async (req, res, next) => {
  try {
    const voitures = await Voiture.find().sort({ createdAt: -1 });
    res.status(200).json(voitures);
  } catch (error) {
    next(error);
  }
};

// @desc    Récupérer une voiture par son id
// @route   GET /api/voitures/:id
// @access  Public
const getVoitureById = async (req, res, next) => {
  try {
    const voiture = await Voiture.findById(req.params.id);
    if (!voiture) {
      return res.status(404).json({ message: "Voiture non trouvée" });
    }
    res.status(200).json(voiture);
  } catch (error) {
    next(error);
  }
};

// @desc    Créer une voiture
// @route   POST /api/voitures
// @access  Private/Admin
const createVoiture = async (req, res, next) => {
  try {
    const voiture = await Voiture.create(req.body);
    res.status(201).json(voiture);
  } catch (error) {
    next(error);
  }
};

// @desc    Modifier une voiture
// @route   PUT /api/voitures/:id
// @access  Private/Admin
const updateVoiture = async (req, res, next) => {
  try {
    const voiture = await Voiture.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!voiture) {
      return res.status(404).json({ message: "Voiture non trouvée" });
    }
    res.status(200).json(voiture);
  } catch (error) {
    next(error);
  }
};

// @desc    Supprimer une voiture
// @route   DELETE /api/voitures/:id
// @access  Private/Admin
const deleteVoiture = async (req, res, next) => {
  try {
    const voiture = await Voiture.findByIdAndDelete(req.params.id);
    if (!voiture) {
      return res.status(404).json({ message: "Voiture non trouvée" });
    }
    res.status(200).json({ message: "Voiture supprimée avec succès" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getVoitures,
  getVoitureById,
  createVoiture,
  updateVoiture,
  deleteVoiture,
};
