import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import logoluxe from "../assets/luxedrivee-removebg-preview.png";
import image1 from "../assets/insscription.png";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

const Connexion = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [erreur, setErreur] = useState('');
  const [chargement, setChargement] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (e: any) => {
    e.preventDefault();

    if (!email || !password) {
      setErreur("Veuillez remplir tous les champs.");
      return;
    }

    setErreur("");
    setMessage("");
    setChargement(true);

    try {
      const res = await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Email ou mot de passe incorrect.");
      }

      // On stocke le token pour les prochaines requêtes vers les routes protégées
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify({ nom: data.nom, email: data.email, role: data.role }));

      setMessage("Connexion réussie !");
      navigate("/Dashboard");
    } catch (err: any) {
      setErreur(err.message || "Impossible de contacter le serveur. Vérifie que le backend tourne.");
    } finally {
      setChargement(false);
    }
  };

  return (
    <div className="relative w-full h-screen">

      <img
        src={image1}
        className="w-full h-full object-cover"
        alt="background"
      />

      <div className="absolute inset-0 flex items-center">

        <div className="ml-30 h-110 w-110 bg-black p-8 rounded-2xl shadow-md w-80">

          <div className="flex flex-col items-center">
            <img src={logoluxe} alt="logo" className="h-14 mb-2" />
            <p className="text-sm text-gray-500 mb-6">Connexion Privée</p>
          </div>

          <form onSubmit={handleLogin} className="flex flex-col gap-3">

            <input
              type="email"
              placeholder="Adresse Email"
              value={email}
              className="border border-gray-200 bg-zinc-900 rounded-lg px-4 py-2 text-sm outline-none"
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              placeholder="Mot de passe"
              value={password}
              className="border border-gray-200 bg-zinc-900 rounded-lg px-4 py-2 text-sm outline-none"
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              type="submit"
              disabled={chargement}
              className="bg-red-600 text-white rounded-lg py-2 text-sm disabled:opacity-50"
            >
              {chargement ? "Connexion en cours..." : "Se connecter"}
            </button>
          </form>

          {message && (
            <p className="text-green-500 text-xs mt-3">{message}</p>
          )}
          {erreur && (
            <p className="text-red-500 text-xs mt-3">{erreur}</p>
          )}

          <p className="text-xs text-gray-400 mt-4">
            Nouveau membre ?{" "}
            <Link
              to="/inscription"
              className="text-red-500 cursor-pointer hover:underline"
            >
              Créer un compte
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
};

export default Connexion;