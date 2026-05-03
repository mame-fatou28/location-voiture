import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import image1 from '../assets/luxedrivee-removebg-preview.png'
import { useNavigate } from "react-router-dom";
export default function Nav() {
  const navigate = useNavigate();
  return (
    <div>

      <motion.div 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-md text-white flex justify-between items-center px-4 py-3"
      >

        <img src={image1} className="w-16 h-16 md:w-20 md:h-20" />

      <div className="hidden md:flex gap-6 font-serif">
  <Link to="/" className="hover:text-red-600 transition">
    Accueil
  </Link>

  <Link to="/nosvoitures" className="hover:text-red-600 transition">
    Nos voitures
  </Link>

  <Link to="/apropos" className="hover:text-red-600 transition">
    A propos
  </Link>

  <Link to="/tarif" className="hover:text-red-600 transition">
    Tarif
  </Link>

  <Link to="/contact" className="hover:text-red-600 transition">
    Contact
  </Link>
  
  
</div>

        <div className="flex gap-2 md:gap-4">
          <button  onClick={() => navigate("/connexion")} className="px-4 py-2 rounded-lg border border-red-600 text-sm md:text-base hover:scale-105 transition">
            Se connecter
          </button>
          <button  onClick={() => navigate("/connexion")} className="px-4 py-2 rounded-lg bg-red-600 text-white text-sm md:text-base hover:scale-105 transition">
            S'inscrire
          </button>
        </div>

      </motion.div>

      
      <div className="h-20"></div>

    </div>
  )
}