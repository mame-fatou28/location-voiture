import image1 from '../assets/luxedrivee-removebg-preview.png'
import { motion } from "framer-motion";

export default function Fin() {
  return (
    <div className="bg-zinc-900 relative w-full overflow-hidden">

      
      <div className="relative w-full h-90">
        <motion.img
          src="https://images.unsplash.com/photo-1641091959535-25781d514a42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
          className="w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
        />

        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-white text-3xl md:text-5xl font-bold">
            Prêt pour l' <span className="text-red-600">Aventure ?</span>
          </h1>

          <h2 className="text-gray-200 mt-4 text-lg md:text-2xl max-w-3xl">
            Réservez dès maintenant et vivez une expérience de conduite exceptionnelle
          </h2>

          <button className="w-44 md:w-56 h-12 md:h-14 bg-red-600 text-white rounded-lg mt-6 md:mt-8 text-sm md:text-lg hover:scale-105 transition">
            Réserver maintenant
          </button>
        </div>
      </div>

      
      <div className="flex flex-col md:flex-row justify-between gap-10 px-6 md:px-10 py-10 text-center md:text-left">

        
        <div className="flex flex-col items-center md:items-start">
          <img src={image1} className="w-20 md:w-28 h-20 md:h-28 hover:scale-110 transition" />
          <p className="text-gray-300 font-serif mt-3 text-sm md:text-base">
            L'excellence automobile à votre service
          </p>
        </div>

        
        <motion.div
          className="flex flex-col gap-2 text-gray-300"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <h1 className="font-bold text-white text-xl md:text-2xl">Entreprise</h1>
          <span className="hover:text-red-500 hover:translate-x-2 transition cursor-pointer">À propos</span>
          <span className="hover:text-red-500 hover:translate-x-2 transition cursor-pointer">Blog</span>
          <span className="hover:text-red-500 hover:translate-x-2 transition cursor-pointer">Carrière</span>
        </motion.div>

       
        <motion.div
          className="flex flex-col gap-2 text-gray-300"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <h1 className="font-bold text-white text-xl md:text-2xl">Service</h1>
          <span className="hover:text-red-500 hover:translate-x-2 transition cursor-pointer">Location</span>
          <span className="hover:text-red-500 hover:translate-x-2 transition cursor-pointer">Assurance</span>
          <span className="hover:text-red-500 hover:translate-x-2 transition cursor-pointer">Support</span>
        </motion.div>

      
        <motion.div
          className="flex flex-col gap-2 text-gray-300"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <h1 className="font-bold text-white text-xl md:text-2xl">Contact</h1>
          <span className="hover:text-red-500 transition cursor-pointer">contact@luxedrive.sn</span>
          <span className="hover:text-red-500 transition cursor-pointer">+221 77 223 15 10</span>
          <span className="hover:text-red-500 transition cursor-pointer">Dakar, Sénégal</span>
        </motion.div>

      </div>

      
      <div className="pt-6 border-t border-gray-800 text-center text-gray-400 text-sm">
        <p>© 2026 LuxeDrive. Tous droits réservés.</p>
      </div>

    </div>
  );
}