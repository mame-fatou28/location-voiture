import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

type Voiture = {
    _id: string;
    marque: string;
    modele: string;
    prixParJour: number;
    carburant?: string;
    transmission?: string;
    places?: number;
    image?: string;
    disponible: boolean;
};

export default function Nos_voitures() {
    const navigate = useNavigate();
    const [voitures, setVoitures] = useState<Voiture[]>([]);
    const [chargement, setChargement] = useState(true);
    const [erreur, setErreur] = useState("");

    useEffect(() => {
        const fetchVoitures = async () => {
            try {
                const res = await fetch(`${API_URL}/voitures`);
                if (!res.ok) throw new Error("Impossible de charger les voitures.");
                const data = await res.json();
                setVoitures(data);
            } catch (err: any) {
                setErreur(err.message || "Erreur de connexion au serveur.");
            } finally {
                setChargement(false);
            }
        };
        fetchVoitures();
    }, []);

    return (
        <motion.div
            className='bg-zinc-900 p-5 md:p-8'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
        >

            <p className='text-white font-bold font-serif text-2xl md:text-4xl text-center'>
                Notre <span className='text-red-600'>Collection</span>
            </p>

            <p className='text-gray-300 text-center mt-2'>
                Découvrez nos véhicules d'exception
            </p>

            {chargement && (
                <p className='text-gray-400 text-center mt-10'>Chargement des véhicules...</p>
            )}

            {erreur && (
                <p className='text-red-500 text-center mt-10'>{erreur}</p>
            )}

            {!chargement && !erreur && voitures.length === 0 && (
                <p className='text-gray-400 text-center mt-10'>
                    Aucun véhicule disponible pour le moment.
                </p>
            )}

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10 mt-8'>
                {voitures.map((v) => (
                    <Car
                        key={v._id}
                        navigate={navigate}
                        id={v._id}
                        image={v.image}
                        name={`${v.marque} ${v.modele}`}
                        price={`${v.prixParJour.toLocaleString("fr-FR")}F`}
                        priceValue={v.prixParJour}
                        specs={[
                            v.transmission ? `Transmission ${v.transmission}` : null,
                            v.carburant ? v.carburant : null,
                            v.places ? `${v.places} places` : null,
                        ].filter(Boolean) as string[]}
                    />
                ))}
            </div>

        </motion.div>
    );
}

function Car({ id, image, name, specs, price, priceValue, navigate }: any) {
    return (
        <motion.div
            className='w-full h-60 md:h-80 lg:h-100 rounded-lg overflow-hidden relative bg-zinc-800'
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
        >

            <img
                src={image || "https://placehold.co/400x300/1a1a1a/ffffff?text=Photo+a+venir"}
                className='h-full w-full object-cover'
            />
            <div className='absolute inset-0 bg-black/50'></div>

            <div className='absolute inset-0 p-4 flex flex-col justify-end text-white'>

                <h1 className='font-bold text-lg md:text-xl mb-2'>
                    {name}
                </h1>

                <ul className='text-sm space-y-1'>
                    {specs.map((s: string, i: number) => (
                        <li key={i} className='flex items-center gap-2'>
                            <span className='w-2 h-2 bg-red-600 rounded-full'></span>
                            {s}
                        </li>
                    ))}
                </ul>

                <p className='text-red-500 font-bold mt-2'>
                    {price} <span className='text-gray-300 text-sm'>Par jour</span>
                </p>

                <button
                    onClick={() => navigate("/contact", { state: { carId: id, carName: name, carPrice: priceValue } })}
                    className='mt-2 w-full py-2 bg-red-600 rounded-md hover:scale-105 transition'
                >
                    Réserver
                </button>

            </div>

        </motion.div>
    );
}
