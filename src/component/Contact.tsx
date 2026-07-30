import { motion } from "framer-motion";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import image1 from '../assets/telephone-removebg-preview.png'
import image2 from '../assets/mail-removebg-preview.png'
import image3 from '../assets/localisation-removebg-preview.png'
import image4 from '../assets/horloge-removebg-preview.png'

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

export default function Contact() {
    const location = useLocation();
    // Si on arrive depuis "Réserver" sur une voiture, on récupère ses infos
    const carInfo = location.state as { carId?: string; carName?: string; carPrice?: number } | null;
    const estUneReservation = !!carInfo?.carId;

    const [prenom, setPrenom] = useState("");
    const [nom, setNom] = useState("");
    const [email, setEmail] = useState("");
    const [telephone, setTelephone] = useState("");
    const [sujet, setSujet] = useState(estUneReservation ? "Nouvelle reservation" : "Demande d'information");
    const [typeVehicule, setTypeVehicule] = useState("Sportive");
    const [dateDepart, setDateDepart] = useState("");
    const [dateRetour, setDateRetour] = useState("");
    const [message, setMessage] = useState(
        estUneReservation ? `Bonjour, je souhaite réserver la ${carInfo?.carName}.` : ""
    );

    const [statut, setStatut] = useState<"idle" | "envoi" | "succes" | "erreur">("idle");
    const [erreurMsg, setErreurMsg] = useState("");

    // Calcule le nombre de jours entre les 2 dates pour estimer le montant
    const calculerMontant = () => {
        if (!estUneReservation || !dateDepart || !dateRetour || !carInfo?.carPrice) return carInfo?.carPrice || 0;
        const jours = Math.max(
            1,
            Math.ceil((new Date(dateRetour).getTime() - new Date(dateDepart).getTime()) / (1000 * 60 * 60 * 24))
        );
        return jours * carInfo.carPrice;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!prenom || !nom || !email) {
            setStatut("erreur");
            setErreurMsg("Merci de remplir au minimum le prénom, le nom et l'email.");
            return;
        }

        if (estUneReservation && (!dateDepart || !dateRetour)) {
            setStatut("erreur");
            setErreurMsg("Merci d'indiquer une date de départ et une date de retour pour la réservation.");
            return;
        }

        if (!estUneReservation && !message) {
            setStatut("erreur");
            setErreurMsg("Merci de rédiger un message.");
            return;
        }

        setStatut("envoi");
        setErreurMsg("");

        try {
            if (estUneReservation) {
                // Vraie réservation, liée à une voiture existante en base
                const res = await fetch(`${API_URL}/reservations`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        client: { nom: `${prenom} ${nom}`, email, telephone },
                        voiture: carInfo!.carId,
                        dateDepart,
                        dateRetour,
                        montant: calculerMontant(),
                        statut: "en_attente",
                    }),
                });

                if (!res.ok) {
                    const data = await res.json().catch(() => ({}));
                    throw new Error(data.message || "Une erreur est survenue lors de la réservation.");
                }
            } else {
                // Simple message de contact
                const messageComplet = `Téléphone: ${telephone || "non renseigné"}
Type de véhicule souhaité: ${typeVehicule}

${message}`;

                const res = await fetch(`${API_URL}/contact`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        nom: `${prenom} ${nom}`,
                        email,
                        sujet,
                        message: messageComplet,
                    }),
                });

                if (!res.ok) {
                    const data = await res.json().catch(() => ({}));
                    throw new Error(data.message || "Une erreur est survenue lors de l'envoi.");
                }
            }

            setStatut("succes");
            setPrenom("");
            setNom("");
            setEmail("");
            setTelephone("");
            setDateDepart("");
            setDateRetour("");
            setMessage("");
        } catch (err: any) {
            setStatut("erreur");
            setErreurMsg(err.message || "Impossible de contacter le serveur. Vérifie que le backend tourne.");
        }
    };

    return (
        <div className="bg-black min-h-screen px-4 md:px-10 pb-20 overflow-x-hidden">

            <motion.h3
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="font-serif text-center text-white font-bold p-10 text-2xl md:text-4xl"
            >
                {estUneReservation ? (
                    <>Réservez <span className="text-red-600">votre véhicule</span></>
                ) : (
                    <>Contactez- <span className="text-red-600">Nous</span></>
                )}
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
                        className="w-full rounded-[8px] hover:border hover:border-red-600 hover:shadow-red-600/40 hover:shadow-xl transition-all duration-300 h-auto bg-zinc-900 flex items-center p-4 gap-4"
                    >
                        <img src={image1} alt="telephone" className="w-8 md:w-10 h-8 md:h-10" />
                        <div className='flex flex-col'>
                            <p className='text-white text-xl md:text-2xl'>Téléphone</p>
                            <p className="text-gray-300 text-sm md:text-base">+221 78 586 86 06</p>
                            <p className='text-gray-300 text-sm md:text-base'>Service client 24/24</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.08 }}
                        whileHover={{ scale: 1.05 }}
                        className="w-full rounded-[8px] hover:border hover:border-red-600 hover:shadow-red-600/40 hover:shadow-xl transition-all duration-300 h-auto bg-zinc-900 flex items-center p-4 gap-4"
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
                        className="w-full rounded-[8px] hover:border hover:border-red-600 hover:shadow-red-600/40 hover:shadow-xl transition-all duration-300 h-auto bg-zinc-900 flex items-center p-4 gap-4"
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
                        className="w-full rounded-[8px] h-auto bg-zinc-900 flex hover:border hover:border-red-600 hover:shadow-red-600/40 hover:shadow-xl transition-all duration-300 items-center p-4 gap-4"
                    >
                        <img src={image4} alt="horaire" className="w-8 md:w-10 h-8 md:h-10" />
                        <div>
                            <p className='text-white text-xl md:text-2xl'>Horaires</p>
                            <p className="text-white text-sm md:text-base">Lun - Ven : 09h - 19h</p>
                            <p className="text-white text-sm md:text-base">Sam - Dim : 10h - 18h</p>
                        </div>
                    </motion.div>

                </div>

                <motion.form
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} transition={{ duration: 0.5 }}
                    className="w-full flex-1 h-auto border grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 bg-zinc-900 rounded-[8px] border-red-600 p-4"
                >
                    <h1 className='font-serif text-gray-300 ml-2 md:ml-10 mt-2 md:mt-10 md:col-span-2'>
                        {estUneReservation ? "Finalisez votre demande de réservation" : "Envoyez-nous un Message"}
                    </h1>

                    {estUneReservation && (
                        <div className="md:col-span-2 ml-2 md:ml-10 bg-zinc-800 rounded-xl p-3 text-sm">
                            <p className="text-white">Véhicule : <span className="text-red-500">{carInfo?.carName}</span></p>
                            <p className="text-gray-300">Tarif : {carInfo?.carPrice?.toLocaleString("fr-FR")} F / jour</p>
                            {dateDepart && dateRetour && (
                                <p className="text-gray-300">Estimation totale : <span className="text-red-500 font-bold">{calculerMontant().toLocaleString("fr-FR")} F</span></p>
                            )}
                        </div>
                    )}

                    <div className='flex flex-col'>
                        <label className='text-gray-300 text-sm font-medium ml-2 md:ml-10'>Prénom*</label>
                        <input type="text" placeholder="Gueye" value={prenom} onChange={(e) => setPrenom(e.target.value)}
                            className="bg-zinc-900 border ml-0 md:ml-8 mt-3 border-white/10 focus:outline-none focus:border-red-600 placeholder-white/25 rounded-xl px-4 py-3 text-white text-sm w-80" />
                    </div>

                    <div className='flex flex-col'>
                        <label className='text-gray-300 text-sm font-medium ml-2 md:ml-10'>Nom*</label>
                        <input type="text" placeholder="Fatou kiné" value={nom} onChange={(e) => setNom(e.target.value)}
                            className="bg-zinc-900 border ml-0 md:ml-8 mt-3 border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-red-600 placeholder-white/25 text-white text-sm w-80" />
                    </div>

                    <div className='flex flex-col'>
                        <label className='text-gray-300 text-sm font-medium ml-2 md:ml-10'>Email*</label>
                        <input type="email" placeholder="exemple@email.com" value={email} onChange={(e) => setEmail(e.target.value)}
                            className="bg-zinc-900 border ml-0 md:ml-8 mt-3 border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-red-600 placeholder-white/25 text-white text-sm w-80" />
                    </div>

                    <div className='flex flex-col'>
                        <label className='text-gray-300 text-sm font-medium ml-2 md:ml-10'>Téléphone*</label>
                        <input type="text" placeholder="77XXXXXXX" value={telephone} onChange={(e) => setTelephone(e.target.value)}
                            className="bg-zinc-900 border ml-0 md:ml-8 mt-3 border-white/10 rounded-xl focus:outline-none focus:border-red-600 placeholder-white/25 px-4 py-3 text-white text-sm w-80" />
                    </div>

                    {!estUneReservation && (
                        <>
                            <div className="flex flex-col gap-1.5 ml-0 md:ml-10 mt-3">
                                <label className="text-sm font-medium text-white/70">Sujet*</label>
                                <select value={sujet} onChange={(e) => setSujet(e.target.value)}
                                    className="bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-red-600 text-white text-sm w-80">
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
                                <select value={typeVehicule} onChange={(e) => setTypeVehicule(e.target.value)}
                                    className="bg-zinc-900 border border-white/10 focus:outline-none focus:border-red-600 rounded-xl px-4 py-3 text-white text-sm w-80">
                                    <option>Sportive</option>
                                    <option>Luxe</option>
                                    <option>SUV premium</option>
                                    <option>Cabriolet</option>
                                    <option>Berlinet</option>
                                </select>
                            </div>
                        </>
                    )}

                    <div className='flex flex-col'>
                        <label className='text-gray-300 text-sm font-medium ml-2 md:ml-10 mt-3'>
                            {estUneReservation ? "Date de départ*" : "Date de location souhaité*"}
                        </label>
                        <input type="date" value={dateDepart} onChange={(e) => setDateDepart(e.target.value)}
                            className="bg-zinc-900 border ml-0 md:ml-8 mt-3 focus:outline-none focus:border-red-600 border-white/10 rounded-xl px-4 py-3 text-white text-sm w-80" />
                    </div>

                    {estUneReservation && (
                        <div className='flex flex-col'>
                            <label className='text-gray-300 text-sm font-medium ml-2 md:ml-10 mt-3'>Date de retour*</label>
                            <input type="date" value={dateRetour} onChange={(e) => setDateRetour(e.target.value)}
                                className="bg-zinc-900 border ml-0 md:ml-8 mt-3 focus:outline-none focus:border-red-600 border-white/10 rounded-xl px-4 py-3 text-white text-sm w-80" />
                        </div>
                    )}

                    {!estUneReservation && (
                        <div className='flex flex-col md:col-span-2'>
                            <label className='text-gray-300 text-sm font-medium ml-2 md:ml-10 mt-3'>Message*</label>
                            <input type="text" placeholder="Décrivez votre demande..." value={message} onChange={(e) => setMessage(e.target.value)}
                                className="bg-zinc-900 border ml-0 md:ml-8 mt-3 focus:outline-none focus:border-red-600 placeholder-white/25 border-white/10 rounded-xl px-4 py-3 text-white text-sm w-180" />
                        </div>
                    )}

                    {statut === "erreur" && (
                        <p className="md:col-span-2 ml-2 md:ml-10 text-red-500 text-sm">{erreurMsg}</p>
                    )}
                    {statut === "succes" && (
                        <p className="md:col-span-2 ml-2 md:ml-10 text-green-500 text-sm">
                            {estUneReservation
                                ? "Votre demande de réservation a été envoyée ! Elle est en attente de validation."
                                : "Votre message a bien été envoyé. Nous vous répondrons rapidement !"}
                        </p>
                    )}

                    <motion.button
                        type="submit"
                        disabled={statut === "envoi"}
                        whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                        className='w-full md:w-60 h-12 bg-red-600 text-white mt-6 md:mt-10 rounded-lg disabled:opacity-50'
                    >
                        {statut === "envoi"
                            ? "Envoi en cours..."
                            : estUneReservation ? "Confirmer la réservation" : "Envoyer le message"}
                    </motion.button>

                </motion.form>
            </div>

            <motion.h1
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5 }}
                className='text-gray-300 font-serif text-center font-bold mt-20'
            >
                Question fréquentes
            </motion.h1>

            <div className='px-4 grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 max-w-5xl mx-auto'>

                <motion.div
                    initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} transition={{ duration: 0.4 }}
                    whileHover={{ scale: 1.05 }}
                    className='w-full shadow-2xl rounded-[30px] h-auto bg-zinc-900 border-2 border-red-600 p-3'
                >
                    <h1 className='font-serif font-bold text-white mt-5 ml-5'>Quels documents sont necessaires pour la location?</h1>
                    <span className='text-gray-300 text-sm p-2'>Un permis de conduire valide depuis plus de 2 ans, une pièce d'identité et une carte de crédit pour la caution.</span>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.08 }}
                    whileHover={{ scale: 1.05 }}
                    className='w-full shadow-2xl rounded-[30px] h-auto bg-zinc-900 border-2 border-red-600 p-3'
                >
                    <h1 className='font-serif font-bold text-white mt-5 ml-5'>Puis-je annuler ma réservation ?</h1>
                    <span className='text-gray-300 text-sm p-2'>Oui, l'annulation est gratuite jusqu'à 24h avant la prise en charge du véhicule.</span>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.16 }}
                    whileHover={{ scale: 1.05 }}
                    className='w-full shadow-2xl rounded-[30px] h-auto bg-zinc-900 border-2 border-red-600 p-3'
                >
                    <h1 className='font-serif font-bold text-white mt-5 ml-5'>Livrez-vous les véhicules ?</h1>
                    <span className='text-gray-300 text-sm p-2'>Oui, nous proposons un service de livraison gratuit dans Paris et la petite couronne.</span>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.24 }}
                    whileHover={{ scale: 1.05 }}
                    className='w-full shadow-2xl rounded-[30px] h-auto bg-zinc-900 border-2 border-red-600 p-3'
                >
                    <h1 className='font-serif font-bold text-white mt-5 ml-5'>Quelle est la politique carburant ?</h1>
                    <span className='text-gray-300 text-sm p-2'>Le véhicule est livré avec le plein et doit être rendu avec le plein. Sinon, des frais de carburant s'appliquent.</span>
                </motion.div>

            </div>

        </div>
    )
}
