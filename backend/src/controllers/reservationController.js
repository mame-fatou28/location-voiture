const Reservation = require("../models/Reservation");
const Voiture = require("../models/Voiture");

// @desc    Récupérer toutes les réservations (avec filtre optionnel par statut)
// @route   GET /api/reservations?statut=en_cours
// @access  Private/Admin
const getReservations = async (req, res, next) => {
  try {
    const filtre = {};
    if (req.query.statut && req.query.statut !== "toutes") {
      filtre.statut = req.query.statut;
    }
    const reservations = await Reservation.find(filtre)
      .populate("voiture", "marque modele")
      .sort({ createdAt: -1 });
    res.status(200).json(reservations);
  } catch (error) {
    next(error);
  }
};

// @desc    Créer une réservation
// @route   POST /api/reservations
// @access  Public (le client réserve, l'admin gère ensuite)
const createReservation = async (req, res, next) => {
  try {
    const reservation = await Reservation.create(req.body);

    // Si la réservation démarre tout de suite, on marque la voiture comme indisponible
    if (reservation.statut === "en_cours") {
      await Voiture.findByIdAndUpdate(reservation.voiture, { disponible: false });
    }

    res.status(201).json(reservation);
  } catch (error) {
    next(error);
  }
};

// @desc    Modifier une réservation (ex: changer son statut)
// @route   PUT /api/reservations/:id
// @access  Private/Admin
const updateReservation = async (req, res, next) => {
  try {
    const reservation = await Reservation.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!reservation) {
      return res.status(404).json({ message: "Réservation non trouvée" });
    }

    // Met à jour la disponibilité de la voiture selon le nouveau statut
    if (reservation.statut === "en_cours") {
      await Voiture.findByIdAndUpdate(reservation.voiture, { disponible: false });
    } else if (reservation.statut === "terminee" || reservation.statut === "annulee") {
      await Voiture.findByIdAndUpdate(reservation.voiture, { disponible: true });
    }

    res.status(200).json(reservation);
  } catch (error) {
    next(error);
  }
};

// @desc    Supprimer une réservation
// @route   DELETE /api/reservations/:id
// @access  Private/Admin
const deleteReservation = async (req, res, next) => {
  try {
    const reservation = await Reservation.findByIdAndDelete(req.params.id);
    if (!reservation) {
      return res.status(404).json({ message: "Réservation non trouvée" });
    }
    res.status(200).json({ message: "Réservation supprimée" });
  } catch (error) {
    next(error);
  }
};

// @desc    Statistiques pour le dashboard (cartes du haut)
// @route   GET /api/reservations/stats
// @access  Private/Admin
const getStats = async (req, res, next) => {
  try {
    const totalVoitures = await Voiture.countDocuments();
    const voituresDisponibles = await Voiture.countDocuments({ disponible: true });

    const reservationsActives = await Reservation.countDocuments({ statut: "en_cours" });

    const debutMois = new Date();
    debutMois.setDate(1);
    debutMois.setHours(0, 0, 0, 0);

    const reservationsDuMois = await Reservation.find({ createdAt: { $gte: debutMois } });
    const revenuMensuel = reservationsDuMois.reduce((total, r) => total + r.montant, 0);

    const tauxOccupation =
      totalVoitures > 0 ? Math.round(((totalVoitures - voituresDisponibles) / totalVoitures) * 100) : 0;

    res.status(200).json({
      reservationsActives,
      revenuMensuel,
      voituresDisponibles,
      totalVoitures,
      tauxOccupation,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getReservations,
  createReservation,
  updateReservation,
  deleteReservation,
  getStats,
};
