import { motion } from "framer-motion"

import image4 from '../assets/porssh.jpg'
import image5 from '../assets/mercedes.jpg'
import image6 from '../assets/bmw.png'
import image7 from '../assets/audi.jpg'
import image8 from '../assets/lambourghuini.jpg'
import image9 from '../assets/rover.jpg'
import image10 from '../assets/maa.jpg'
import image11 from '../assets/toyota.jpg'

export default function Nos_voitures() {
    return (
        
        
        <motion.div
            className='bg-zinc-900 p-5 md:p-8'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
        >

            {/* TITLE */}
            <p className='text-white font-bold font-serif text-2xl md:text-4xl text-center'>
                Notre <span className='text-red-600'>Collection</span>
            </p>

            <p className='text-gray-300 text-center mt-2'>
                Découvrez nos véhicules d'exception
            </p>

            {/* GRID */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10 mt-8'>

                {/* PORSHE */}
                <Car image={image4} name="Porsche 911 Turbo S" price="350000F"
                    specs={["0-100 km/h en 2.7s", "650 ch", "Automatique"]} />

                {/* MERCEDES */}
                <Car image={image5} name="Mercedes-AMG GT" price="280000F"
                    specs={["V8 Biturbo", "585 ch", "Cuir Nappa"]} />

                {/* AUDI */}
                <Car image={image7} name="Audi R8 V10" price="400000F"
                    specs={["V10 5.2L", "620 ch", "Quattro"]} />

                {/* BMW */}
                <Car image={image6} name="BMW M8 Competition" price="320000F"
                    specs={["4.4L V8", "625 ch", "Transmission intégrale"]} />

                {/* LAMBORGHINI */}
                <Car image={image8} name="Lamborghini Huracán" price="450000F"
                    specs={["V10 5.2L", "640 ch", "AWD"]} />

                {/* RANGE ROVER */}
                <Car image={image9} name="Range Rover" price="350000F"
                    specs={["V8 4.4L", "530 ch", "AWD"]} />

                {/* MERCEDES G63 */}
                <Car image={image10} name="Mercedes-AMG G 63" price="500000F"
                    specs={["V8 4.0L", "585 ch", "4MATIC"]} />

                {/* TOYOTA */}
                <Car image={image11} name="Toyota Land Cruiser 300" price="350000F"
                    specs={["V6 Twin Turbo 3.5L", "409 ch", "4x4 AWD"]} />

            </div>

        </motion.div>
    )
}

/* COMPONENT CAR */
function Car({ image, name, specs, price }) {
    return (
        <motion.div
            className='w-full h-60 md:h-80 lg:h-100 rounded-lg overflow-hidden relative'
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
        >

            <img src={image} className='h-full w-full object-cover' />
            <div className='absolute inset-0 bg-black/50'></div>

            <div className='absolute inset-0 p-4 flex flex-col justify-end text-white'>

                <h1 className='font-bold text-lg md:text-xl mb-2'>
                    {name}
                </h1>

                <ul className='text-sm space-y-1'>
                    {specs.map((s, i) => (
                        <li key={i} className='flex items-center gap-2'>
                            <span className='w-2 h-2 bg-red-600 rounded-full'></span>
                            {s}
                        </li>
                    ))}
                </ul>

                <p className='text-red-500 font-bold mt-2'>
                    {price} <span className='text-gray-300 text-sm'>Par jour</span>
                </p>

                <button className='mt-2 w-full py-2 bg-red-600 rounded-md hover:scale-105 transition'>
                    Reserver
                </button>

            </div>

        </motion.div>
    )
}