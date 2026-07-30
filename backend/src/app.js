const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");

const authRoutes = require("./routes/authRoutes");
const voitureRoutes = require("./routes/voitureRoutes");
const contactRoutes = require("./routes/contactRoutes");
const reservationRoutes = require("./routes/reservationRoutes");
const { notFound, errorHandler } = require("./middlewares/errorHandler");

const app = express();

// Middlewares globaux
app.use(
  cors({
    origin: process.env.CLIENT_URL || "*",
    credentials: true,
  })
);
app.use(express.json());
app.use(morgan("dev"));

// Sert les images des voitures depuis backend/public
// Exemple d'accès : http://localhost:5000/images/porssh.jpg
app.use("/images", express.static(path.join(__dirname, "../public")));

// Route de santé (utile pour vérifier que l'API tourne sur Render/Railway)
app.get("/api/health", (req, res) => {
  res.status(200).json({ status: "OK", message: "API en ligne" });
});

// Routes principales
app.use("/api/auth", authRoutes);
app.use("/api/voitures", voitureRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/reservations", reservationRoutes);

// Gestion des erreurs (toujours en dernier)
app.use(notFound);
app.use(errorHandler);

module.exports = app;