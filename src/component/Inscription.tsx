import { useState } from "react";
import logoluxe from "../assets/luxedrivee-removebg-preview.png";
import image1 from '../assets/insscription.png';

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
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
    <div className="relative w-full h-screen">
      {/* Image de fond */}
      <img src={image1} alt="background" className="absolute inset-0 w-full h-full object-cover" />

      {/* Overlay sombre */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Formulaire centré par dessus */}
      <div className="absolute inset-0 flex items-center justify-start ml-35">
        <div className="flex flex-col items-center bg-black/70 backdrop-blur-sm p-8 rounded-2xl shadow-md w-80">
          <img src={logoluxe} alt="logo luxe drive" className="h-14 mb-2" />
          <p className="text-sm text-gray-400 mb-6">Créer votre compte premium</p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-full">
            <div className="flex gap-2">
              <input
                name="prenom"
                placeholder="Prénom"
                className="border border-gray-600 bg-zinc-900 text-white placeholder-gray-500 rounded-lg px-3 py-2 text-sm outline-none focus:border-gray-400 w-1/2"
                onChange={handleChange}
                required
              />
              <input
                name="nom"
                placeholder="Nom"
                className="border border-gray-600 bg-zinc-900 text-white placeholder-gray-500 rounded-lg px-3 py-2 text-sm outline-none focus:border-gray-400 w-1/2"
                onChange={handleChange}
                required
              />
            </div>

            <input
              name="email"
              type="email"
              placeholder="Adresse Email"
              className="border border-gray-600 bg-zinc-900 text-white placeholder-gray-500 rounded-lg px-4 py-2 text-sm outline-none focus:border-gray-400"
              onChange={handleChange}
              required
            />

            <input
              name="telephone"
              placeholder="Téléphone"
              className="border border-gray-600 bg-zinc-900 text-white placeholder-gray-500 rounded-lg px-4 py-2 text-sm outline-none focus:border-gray-400"
              onChange={handleChange}
            />

            <input
              name="password"
              type="password"
              placeholder="Mot de passe"
              className="border border-gray-600 bg-zinc-900 text-white placeholder-gray-500 rounded-lg px-4 py-2 text-sm outline-none focus:border-gray-400"
              onChange={handleChange}
              required
            />

            <input
              name="confirmPassword"
              type="password"
              placeholder="Confirmer mot de passe"
              className="border border-gray-600 bg-zinc-900 text-white placeholder-gray-500 rounded-lg px-4 py-2 text-sm outline-none focus:border-gray-400"
              onChange={handleChange}
              required
            />

            <button
              type="submit"
              className="bg-red-600 text-white rounded-lg py-2 text-sm font-medium mt-1"
            >
              S'inscrire
            </button>

            {error && <p className=" text-red-500 text-xs text-center">{error}</p>}
          </form>

          <p className="text-xs text-gray-400 mt-4">
            Déjà membre ?{" "}
            <span onClick={onSwitch} className="text-red-500 cursor-pointer hover:underline">
              Se connecter
            </span>
          </p>
        </div>
      </div>
    </div>
    );
}