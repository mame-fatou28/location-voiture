import { motion } from "framer-motion";
import image1 from '../assets/telephone-removebg-preview.png'
import image2 from '../assets/mail-removebg-preview.png'
import image3 from '../assets/localisation-removebg-preview.png'
import image4 from '../assets/horloge-removebg-preview.png'

export default function Contact() {
    return (
        <div className="bg-black min-h-screen px-4 md:px-10">

            <motion.h3
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="font-serif text-center text-white font-bold p-10 text-2xl md:text-4xl"
            >
                Contactez- <span className="text-red-600">Nous</span>
            </motion.h3>

            <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="text-center"
            >
                <p className="text-gray-300 text-sm md:text-base">
                    Notre equipe d'expert est a votre disposition pour répondre a toute vos question et
                </p>
                <p className="text-gray-300 text-sm md:text-base">
                    vous accompagner dans votre projet de location de voiture de prestige.
                </p>
            </motion.div>

            <div className="flex flex-col lg:flex-row gap-10 mt-20">

              
                <div className="flex flex-col gap-4 mt-8 ml-0 md:ml-3">

                    <motion.div
                        initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }} transition={{ duration: 0.4 }}
                        whileHover={{ scale: 1.05 }}
                        className="w-full md:w-100 hover:border-red-600 hover:shadow-red-600/40 hover:shadow-xl transition-all duration-300 rounded-[8px] h-auto md:h-50 bg-zinc-900 flex items-center p-4 gap-4"
                    >
                        <img src={image1} alt="telephone" className="w-8 md:w-10 h-8 md:h-10" />
                        <div className='flex flex-col'>
                            <p className='text-white text-xl md:text-2xl'>Téléphone</p>
                            <p className="text-gray-300 text-sm md:text-base">+221 77 000 00 00</p>
                            <p className='text-gray-300 text-sm md:text-base'>Service client 24/24</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.08 }}
                        whileHover={{ scale: 1.05 }}
                        className="w-full md:w-100 rounded-[8px] hover:border-red-600 hover:shadow-red-600/40 hover:shadow-xl transition-all duration-300 h-auto md:h-50 bg-zinc-900 flex items-center p-4 gap-4"
                    >
                        <img src={image2} alt="mail" className="w-8 md:w-10 h-8 md:h-10" />
                        <div>
                            <p className='text-white text-xl md:text-2xl'>Mail</p>
                            <p className="text-white text-sm md:text-base">luxedrive@gmail.com</p>
                            <p className='text-gray-300 text-sm md:text-base'>Réponse sous 2h en moyenne</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.16 }}
                        whileHover={{ scale: 1.05 }}
                        className="w-full md:w-100 rounded-[8px] hover:border-red-600 hover:shadow-red-600/40 hover:shadow-xl transition-all duration-300 h-auto md:h-50 bg-zinc-900 flex items-center p-4 gap-4"
                    >
                        <img src={image3} alt="adresse" className="w-8 md:w-10 h-8 md:h-10" />
                        <div>
                            <p className='text-white text-xl md:text-2xl'>Localisation</p>
                            <p className='text-gray-300 text-sm md:text-base'>Avenue des ambassadeur-fann</p>
                            <p className="text-white text-sm md:text-base">Dakar, Sénégal</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.24 }}
                        whileHover={{ scale: 1.05 }}
                        className="w-full md:w-100 rounded-[8px] h-auto md:h-50 bg-zinc-900 flex hover:border-red-600 hover:shadow-red-600/40 hover:shadow-xl transition-all duration-300 items-center p-4 gap-4"
                    >
                        <img src={image4} alt="horaire" className="w-8 md:w-10 h-8 md:h-10" />
                        <div>
                            <p className='text-white text-xl md:text-2xl'>Horaires</p>
                            <p className="text-white text-sm md:text-base">Lun - Ven : 09h - 19h</p>
                            <p className="text-white text-sm md:text-base">Sam - Dim : 10h - 18h</p>
                        </div>
                    </motion.div>

                </div>

                
                <motion.div
                    initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} transition={{ duration: 0.5 }}
                    className="w-full lg:w-210 h-auto border grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 bg-zinc-900 rounded-[8px] border-red-600 p-4"
                >
                    <h1 className='font-serif text-gray-300 ml-2 md:ml-10 mt-2 md:mt-10 md:col-span-2'>
                        Envoyez-nous un Message
                    </h1>

                    <form action="" className='mt-10 md:col-span-2'></form>

                    <div className='flex flex-col'>
                        <label className='text-gray-300 text-sm font-medium ml-2 md:ml-10'>Prénom*</label>
                        <input type="text" placeholder="Gueye"
                            className="bg-zinc-900 border ml-0 md:ml-8 mt-3 border-white/10 focus:outline-none focus:border-red-600 placeholder-white/25 rounded-xl px-4 py-3 text-white text-sm w-full md:w-90" />
                    </div>

                    <div className='flex flex-col'>
                        <label className='text-gray-300 text-sm font-medium ml-2 md:ml-10'>Nom*</label>
                        <input type="text" placeholder="Fatou kiné"
                            className="bg-zinc-900 border ml-0 md:ml-8 mt-3 border-white/10 rounded-xl px-4 py-3  focus:outline-none focus:border-red-600 placeholder-white/25 text-white text-sm w-full md:w-90" />
                    </div>

                    <div className='flex flex-col'>
                        <label className='text-gray-300 text-sm font-medium ml-2 md:ml-10'>Email*</label>
                        <input type="text" placeholder="exemple@email.com"
                            className="bg-zinc-900 border ml-0 md:ml-8 mt-3 border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-red-600 placeholder-white/25 text-white text-sm w-full md:w-90" />
                    </div>

                    <div className='flex flex-col'>
                        <label className='text-gray-300 text-sm font-medium ml-2 md:ml-10'>Téléphone*</label>
                        <input type="text" placeholder="77XXXXXXX"
                            className="bg-zinc-900 border ml-0 md:ml-8 mt-3 border-white/10 rounded-xl focus:outline-none focus:border-red-600 placeholder-white/25 px-4 py-3 text-white text-sm w-full md:w-90" />
                    </div>

                    <div className="flex flex-col gap-1.5 ml-0 md:ml-10 mt-3">
                        <label className="text-sm font-medium text-white/70">Sujet*</label>
                        <select className="bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-red-600 placeholder-white/25 text-white text-sm w-full md:w-90">
                            <option>Nouvelle reservation</option>
                            <option>Demande d'information</option>
                            <option>Modification de reservation</option>
                            <option>Réclamation</option>
                            <option>Partenariat</option>
                            <option>Autre</option>
                        </select>
                    </div>

                    <div className="flex flex-col gap-1.5 ml-0 md:ml-10 mt-3">
                        <label className="text-sm font-medium text-white/70">Type de véhicule souhaité*</label>
                        <select className="bg-zinc-900 border border-white/10 focus:outline-none focus:border-red-600 placeholder-white/25 rounded-xl px-4 py-3 text-white text-sm w-full md:w-90">
                            <option>Sportive</option>
                            <option>Luxe</option>
                            <option>SUV premium</option>
                            <option>Cabriolet</option>
                            <option>Berlinet</option>
                        </select>
                    </div>

                    <div className='flex flex-col md:col-span-2'>
                        <label className='text-gray-300 text-sm font-medium ml-2 md:ml-10 mt-3'>Date de location souhaité*</label>
                        <input type="date"
                            className="bg-zinc-900 border ml-0 md:ml-8 mt-3 focus:outline-none focus:border-red-600 placeholder-white/25 border-white/10 rounded-xl px-4 py-3 text-white text-sm w-full md:w-150" />
                    </div>

                    <div className='flex flex-col md:col-span-2'>
                        <label className='text-gray-300 text-sm font-medium ml-2 md:ml-10 mt-3'>Message*</label>
                        <input type="text" placeholder="Décrivez votre demande..."
                            className="bg-zinc-900 border ml-0 md:ml-8 mt-3 focus:outline-none focus:border-red-600 placeholder-white/25 border-white/10 rounded-xl px-4 py-3 text-white text-sm w-full md:w-150" />
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                        className='w-full md:w-60 h-12 bg-red-600 text-white mt-6 md:mt-10 ml-0 md:ml-15 rounded-lg'
                    >
                        Envoyer le message
                    </motion.button>

                </motion.div>
            </div>

           
            <motion.h1
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5 }}
                className='text-gray-300 font-serif text-center font-bold mt-20'
            >
                Question fréquentes
            </motion.h1>

            <div className='px-4 md:ml-30 gap-6 md:gap-15 grid grid-cols-1 md:grid-cols-2 mt-15'>

                <motion.div
                    initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} transition={{ duration: 0.4 }}
                    whileHover={{ scale: 1.05 }}
                    className='w-full md:w-130 shadow-2xl rounded-[30px] h-auto md:h-50 bg-zinc-900 border-2 border-red-600 p-3'
                >
                    <h1 className='font-serif font-bold text-white mt-5 ml-5'>Quels documents sont necessaires pour la location?</h1>
                    <span className='text-gray-300 text-sm p-2'>Un permis de conduire valide depuis plus de 2 ans, une pièce d'identité et une carte de crédit pour la caution.</span>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.08 }}
                    whileHover={{ scale: 1.05 }}
                    className='w-full md:w-130 shadow-2xl rounded-[30px] h-auto md:h-50 bg-zinc-900 border-2 border-red-600 p-3'
                >
                    <h1 className='font-serif font-bold text-white mt-5 ml-5'>Puis-je annuler ma réservation ?</h1>
                    <span className='text-gray-300 text-sm p-2'>Oui, l'annulation est gratuite jusqu'à 24h avant la prise en charge du véhicule.</span>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.16 }}
                    whileHover={{ scale: 1.05 }}
                    className='w-full md:w-130 shadow-2xl rounded-[30px] h-auto md:h-50 bg-zinc-900 border-2 border-red-600 p-3'
                >
                    <h1 className='font-serif font-bold text-white mt-5 ml-5'>Livrez-vous les véhicules ?</h1>
                    <span className='text-gray-300 text-sm p-2'>Oui, nous proposons un service de livraison gratuit dans Paris et la petite couronne.</span>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.24 }}
                    whileHover={{ scale: 1.05 }}
                    className='w-full md:w-130 shadow-2xl rounded-[30px] h-auto md:h-50 bg-zinc-900 border-2 border-red-600 p-3'
                >
                    <h1 className='font-serif font-bold text-white mt-5 ml-5'>Quelle est la politique carburant ?</h1>
                    <span className='text-gray-300 text-sm p-2'>Le véhicule est livré avec le plein et doit être rendu avec le plein. Sinon, des frais de carburant s'appliquent.</span>
                </motion.div>

            </div>

        </div>
    )
}
