import { motion } from "framer-motion";
import image1 from '../assets/luxedrivee-removebg-preview.png'

export default function Nav() {
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
          <a href="" className="hover:text-red-600 transition">Accueil</a>
          <a href="" className="hover:text-red-600 transition">Nos voitures</a>
          <a href="" className="hover:text-red-600 transition">A propos</a>
          <a href="" className="hover:text-red-600 transition">Tarif</a>
          <a href="" className="hover:text-red-600 transition">Contact</a>
        </div>

        <div className="flex gap-2 md:gap-4">
          <button className="px-4 py-2 rounded-lg border border-red-600 text-sm md:text-base hover:scale-105 transition">
            Se connecter
          </button>
          <button className="px-4 py-2 rounded-lg bg-red-600 text-white text-sm md:text-base hover:scale-105 transition">
            S'inscrire
          </button>
        </div>

      </motion.div>

      
      <div className="h-20"></div>

    </div>
  )
}