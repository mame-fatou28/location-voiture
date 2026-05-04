import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logoluxe from "../assets/luxedrivee-removebg-preview.png";
import image1 from '../assets/insscription.png';

export default function Inscription() {

  const navigate = useNavigate(); 

  const [formData, setFormData] = useState({
    prenom: "",
    nom: "",
    email: "",
    telephone: "",
    password: "",
    confirmPassword: ""
  });

  const [error, setError] = useState("");

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError("Les mots de passe ne correspondent pas !");
      return;
    }

    setError("");
    alert("Compte premium créé !");

  
    navigate("/Connexion");
  };

  return (
    <div className="relative w-full h-screen">

      <img
        src={image1}
        alt="background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/50" />

      <div className="absolute inset-0 flex items-center justify-start ml-35">

        <div className="flex flex-col items-center bg-black/70 backdrop-blur-sm p-8 rounded-2xl shadow-md w-80">

          <img src={logoluxe} alt="logo luxe drive" className="h-14 mb-2" />
          <p className="text-sm text-gray-400 mb-6">
            Créer votre compte premium
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-full">

            <div className="flex gap-2">
              <input name="prenom" placeholder="Prénom"
                className="border border-gray-600 bg-zinc-900 text-white rounded-lg px-3 py-2 text-sm w-1/2"
                onChange={handleChange} required />

              <input name="nom" placeholder="Nom"
                className="border border-gray-600 bg-zinc-900 text-white rounded-lg px-3 py-2 text-sm w-1/2"
                onChange={handleChange} required />
            </div>

            <input name="email" type="email" placeholder="Email"
              className="border border-gray-600 bg-zinc-900 text-white rounded-lg px-4 py-2 text-sm"
              onChange={handleChange} required />

            <input name="telephone" placeholder="Téléphone"
              className="border border-gray-600 bg-zinc-900 text-white rounded-lg px-4 py-2 text-sm"
              onChange={handleChange} />

            <input name="password" type="password" placeholder="Mot de passe"
              className="border border-gray-600 bg-zinc-900 text-white rounded-lg px-4 py-2 text-sm"
              onChange={handleChange} required />

            <input name="confirmPassword" type="password" placeholder="Confirmer mot de passe"
              className="border border-gray-600 bg-zinc-900 text-white rounded-lg px-4 py-2 text-sm"
              onChange={handleChange} required />

            <button
              type="submit"
              className="bg-red-600 text-white rounded-lg py-2 text-sm"
            >
              S'inscrire
            </button>

            {error && (
              <p className="text-red-500 text-xs text-center">{error}</p>
            )}
          </form>

          <p className="text-xs text-gray-400 mt-4">
            Déjà membre ?{" "}
            <Link
              to="/connexion"
              className="text-red-500 cursor-pointer hover:underline"
            >
              Se connecter
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
}