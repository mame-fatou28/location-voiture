import { motion } from "framer-motion";

export default function A_propos() {
    return (
        <div className="bg-zinc-900 min-h-screen px-6 md:px-12 py-10">
            
            <motion.h1
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="font-serif font-bold text-3xl md:text-4xl text-white mb-8"
            >
                A Propos de <span className="text-red-600">LuxeDrive</span>
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, x: -80 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="text-base md:text-lg text-gray-300 mb-6 md:ml-6 leading-8"
            >
                Depuis 2015, LuxeDrive révolutionne l'expérience de location de véhicules de prestige.
                Notre passion pour l'excellence automobile nous pousse à offrir une sélection
                rigoureuse des plus belles mécaniques du moment.
            </motion.p>

            <motion.p
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="text-base md:text-lg text-gray-300 mb-8 md:ml-6 leading-8"
            >
                Avec plus de 10 000 clients satisfaits, nous nous engageons à fournir un service
                irréprochable et des véhicules entretenus avec le plus grand soin.
                Chaque location est une expérience unique, pensée pour vous offrir des moments inoubliables.
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center mb-10">
                
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                >
                    <p className="font-bold font-serif text-2xl text-red-600">500+</p>
                    <p className="text-gray-300">vehicules</p>
                </motion.div>

                <motion.div
                    whileHover={{ scale: 1.1 }}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                >
                    <p className="font-bold font-serif text-2xl text-red-600">10k+</p>
                    <p className="text-gray-300">clients</p>
                </motion.div>

                <motion.div
                    whileHover={{ scale: 1.1 }}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                >
                    <p className="font-bold font-serif text-2xl text-red-600">99%</p>
                    <p className="text-gray-300">Satisfaction</p>
                </motion.div>

            </div>

            <motion.img
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 1 }}
                whileHover={{ scale: 1.05 }}
                className="w-full md:w-[800px] h-auto md:h-[400px] object-cover rounded-[15px] mx-auto shadow-lg"
                src="https://images.unsplash.com/photo-1599912027667-755b68b4dd3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
            />
        </div>
    );
}