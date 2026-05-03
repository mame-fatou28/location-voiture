import { motion } from "framer-motion";
import image1 from '../assets/luxedrivee-removebg-preview.png'

export default function Hero(){
    return(
        <div>
             <div className="relative w-full h-[70vh] overflow-hidden">

        <motion.img
          src="https://images.unsplash.com/photo-1710823367826-02e38b3c9f67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
          alt="Luxury Car"
          className="w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        />

        
        <div className="absolute inset-0 bg-black/50"></div>

       
        <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-16 text-white">

          <motion.p 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="font-bold font-serif text-3xl md:text-5xl leading-tight"
          >
            L'Excellence <br />
            <span className="text-red-600">Sur Roues</span>
          </motion.p>

          <motion.p 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-4 text-sm md:text-lg max-w-xl"
          >
            Découvrez notre collection exclusive de véhicules de prestige.
            Une expérience de conduite inoubliable vous attend.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-6 flex flex-col sm:flex-row gap-4"
          >

            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-6 py-3 rounded-lg bg-red-600 text-white hover:bg-red-700 transition"
            >
              <span>Réserver maintenant</span>

              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
            </motion.button>

            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 rounded-lg border border-white hover:bg-white hover:text-black transition"
            >
              Voir nos voitures
            </motion.button>

          </motion.div>

        </div>

      </div>

        </div>
    )
}