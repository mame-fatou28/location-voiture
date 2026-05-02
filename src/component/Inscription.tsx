import { useState } from "react";
import logoluxe from "../assets/luxedrivee-removebg-preview.png";

export default function Inscription({ onSwitch }) {
  const [formData, setFormData] = useState({
    prenom: "",
    nom: "",
    email: "",
    telephone: "",
    password: "",
    confirmPassword: ""
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError("Les mots de passe ne correspondent pas !");
      return;
    }

    setError("");
    alert("Compte premium créé !");
  };

  return (
    <div className="auth-card">
      
      <div className="auth-logo-contrainer">
        <img src={logoluxe} alt="logo luxe drive" className="auth-logo" />
      </div>

      <p style={{ marginBottom: "20px" }}>
        Créer votre compte premium
      </p>

      <form onSubmit={handleSubmit}>
        
        <div style={{ display: "flex", gap: "10px" }}>
          <input
            name="prenom"
            placeholder="Prénom"
            className="auth-input"
            onChange={handleChange}
            required
          />

          <input
            name="nom"
            placeholder="Nom"
            className="auth-input"
            onChange={handleChange}
            required
          />
        </div>

        <input
          name="email"
          type="email"
          placeholder="Adresse Email"
          className="auth-input"
          onChange={handleChange}
          required
        />

        <input
          name="telephone"
          placeholder="Téléphone"
          className="auth-input"
          onChange={handleChange}
        />

        <input
          name="password"
          type="password"
          placeholder="Mot de passe"
          className="auth-input"
          onChange={handleChange}
          required
        />

        <input
          name="confirmPassword"
          type="password"
          placeholder="Confirmer mot de passe"
          className="auth-input"
          onChange={handleChange}
          required
        />

        <button type="submit" className="auth-button">
          S'inscrire
        </button>

        {error && <p className="error-text">{error}</p>}
      </form>

      <p style={{ marginTop: "20px", fontSize: "14px", color: "#a4adb6" }}>
        Déjà membre ?{" "}
        <span
          className="red-link"
          style={{ cursor: "pointer" }}
          onClick={onSwitch}
        >
          Se connecter
        </span>
      </p>
    </div>
  );
}