import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
export default function Tarif() {
   const navigate = useNavigate();
  return (
    <div className="bg-black min-h-screen px-4 py-10">
    
      <motion.div
        initial={{ opacity: 0, y: -60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h1 className="text-white text-3xl md:text-5xl font-bold font-serif">
          Nos <span className="text-red-600">Tarifs</span>
        </h1>

        <h3 className="text-gray-300 mt-3 text-sm md:text-lg">
          Choisissez la formule qui vous convient
        </h3>
      </motion.div>

      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto items-stretch">
        
       
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.05, y: -10 }}
          className="bg-zinc-900 border border-red-600 rounded-2xl p-6 shadow-xl flex flex-col"
        >
          <h1 className="text-white text-2xl font-bold">Classique</h1>

          <p className="text-white text-3xl font-bold mt-3">
            150000F <span className="text-red-600 text-sm">par jour</span>
          </p>

          <ul className="space-y-5 mt-8 text-white text-sm flex-grow">
            <li>✔ Véhicules standards</li>
            <li>✔ Assurance de base</li>
            <li>✔ 200km / jour</li>
            <li>✔ Assistance 24/7</li>
          </ul>

          <motion.button
          onClick={() => navigate("/Contact")}
            whileTap={{ scale: 0.95 }}
            className="w-full mt-8 h-12 rounded-xl bg-zinc-800 text-white hover:bg-red-700 transition"
          >
            Choisir cette formule
          </motion.button>
        </motion.div>

      
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          whileHover={{ scale: 1.06, y: -10 }}
          className="relative bg-gradient-to-b from-red-500/20 to-red-700/20 border-2 border-red-600 rounded-2xl p-6 shadow-xl flex flex-col"
        >
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-700 px-4 py-1 rounded-full text-white text-sm">
            Plus Populaire
          </div>

          <h1 className="text-white text-2xl font-bold mt-4">Premium</h1>

          <p className="text-white text-3xl font-bold mt-3">
            300000F <span className="text-red-400 text-sm">par jour</span>
          </p>

          <ul className="space-y-4 mt-8 text-white text-sm flex-grow">
            <li>✔ Véhicules de luxe</li>
            <li>✔ Assurance tout risques</li>
            <li>✔ Kilométrage illimité</li>
            <li>✔ GPS + Wifi</li>
            <li>✔ Assistance 24/7</li>
            <li>✔ Conciergerie dédiée</li>
          </ul>

          <motion.button
          onClick={() => navigate("/Contact")}
            whileTap={{ scale: 0.95 }}
            className="w-full mt-8 h-12 rounded-xl bg-red-700 text-white hover:bg-red-800 transition"
          >
            Choisir cette formule
          </motion.button>
        </motion.div>

       
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          whileHover={{ scale: 1.05, y: -10 }}
          className="bg-zinc-900 border border-red-600 rounded-2xl p-6 shadow-xl flex flex-col"
        >
          <h1 className="text-white text-2xl font-bold">Prestige</h1>

          <p className="text-white text-3xl font-bold mt-3">
            500000F <span className="text-red-600 text-sm">par jour</span>
          </p>

          <ul className="space-y-4 mt-8 text-white text-sm flex-grow">
            <li>✔ Supercars exclusives</li>
            <li>✔ Assurance premium</li>
            <li>✔ Chauffeur disponible</li>
            <li>✔ Service VIP</li>
            <li>✔ Livraison à domicile</li>
            <li>✔ Conciergerie 24/7</li>
          </ul>

          <motion.button
          onClick={() => navigate("/Contact")}
            whileTap={{ scale: 0.95 }}
            className="w-full mt-8 h-12 rounded-xl bg-zinc-800 text-white hover:bg-red-700 transition"
          >
            Choisir cette formule
          </motion.button>
        </motion.div>

      </div>
    </div>
  );
}