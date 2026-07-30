const Contact = require("../models/Contact");

// @desc    Envoyer un message de contact
// @route   POST /api/contact
// @access  Public
const createContact = async (req, res, next) => {
  try {
    const { nom, email, sujet, message } = req.body;

    if (!nom || !email || !message) {
      return res.status(400).json({ message: "Nom, email et message sont requis" });
    }

    const contact = await Contact.create({ nom, email, sujet, message });
    res.status(201).json({ message: "Message envoyé avec succès", contact });
  } catch (error) {
    next(error);
  }
};

// @desc    Récupérer tous les messages de contact
// @route   GET /api/contact
// @access  Private/Admin
const getContacts = async (req, res, next) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.status(200).json(contacts);
  } catch (error) {
    next(error);
  }
};

module.exports = { createContact, getContacts };
