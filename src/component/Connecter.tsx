import { useState } from 'react';
import { Link } from "react-router-dom";
import logoluxe from "../assets/luxedrivee-removebg-preview.png";
import image1 from "../assets/insscription.png";

interface ConnexionProps {
  onSwitch: () => void;
}

const Connexion: React.FC<ConnexionProps> = ({ onSwitch }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = (e: any) => {
    e.preventDefault();

    if (!email || !password) {
      setMessage("Veuillez remplir tous les champs.");
      return;
    }

    setMessage("Connexion réussie !");
  };

  return (
    <div className="relative w-full h-screen">

      {/* IMAGE */}
      <img
        src={image1}
        className="w-full h-full object-cover"
        alt="background"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 flex items-center">

        {/* FORMULAIRE */}
        <div className="ml-30 h-110 w-110 bg-black p-8 rounded-2xl shadow-md w-80">

          {/* LOGO */}
          <div className="flex flex-col items-center">
            <img src={logoluxe} alt="logo" className="h-14 mb-2" />
            <p className="text-sm text-gray-500 mb-6">Connexion Privée</p>
          </div>

          {/* FORM */}
          <form onSubmit={handleLogin} className="flex flex-col gap-3">

            <input
              type="email"
              placeholder="Adresse Email"
              className="border border-gray-200 bg-zinc-900 rounded-lg px-4 py-2 text-sm outline-none focus:border-gray-400"
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              placeholder="Mot de passe"
              className="border border-gray-200 bg-zinc-900 rounded-lg px-4 py-2 text-sm outline-none focus:border-gray-400"
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
             onClick={onSwitch}
              type="submit"
              className="bg-red-600 text-white rounded-lg py-2 text-sm"
            >
              Se connecter
            </button>
          </form>

          {/* LINKS */}
          <div className="flex justify-between mt-4 text-xs text-gray-400">
            <span className="cursor-pointer hover:underline">
              Mot de passe oublié ?
            </span>
            <span className="cursor-pointer hover:underline">
              Aide
            </span>
          </div>

          {/* MESSAGE */}
          {message && (
            <p className="text-green-500 text-xs mt-3">{message}</p>
          )}

          {/* LINK VERS INSCRIPTION */}
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