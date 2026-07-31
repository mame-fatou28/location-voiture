import { useState } from "react";
import image2 from "../assets/hist-removebg-preview.png";
import image1 from "../assets/luxedrivee-removebg-preview.png";

export default function Sidebar() {
  const [actif, setActif] = useState("vue-ensemble");

  const scrollVers = (id: string) => {
    setActif(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <aside className="bg-black p-3 w-full md:w-80 shrink-0">
      <div className="bg-zinc-900 rounded-lg p-4 h-full">
        <img src={image1} alt="Logo" className="w-24 h-24 mx-auto md:mx-0 mb-4 object-contain" />
        
        <div className="border-t border-gray-600 my-2"></div>

        <h1 className="text-gray-300 font-serif font-bold text-sm tracking-wider uppercase my-4">
          Principal
        </h1>

        <button
          onClick={() => scrollVers("vue-ensemble")}
          className={`flex items-center w-full px-4 py-2.5 rounded-lg transition ${
            actif === "vue-ensemble" ? "bg-gray-300 text-zinc-900 font-medium" : "text-gray-300 hover:bg-zinc-800"
          }`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-3">
            <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
            <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
          </svg>
          <span>Vue d'ensemble</span>
        </button>

        <button
          onClick={() => scrollVers("reservations")}
          className={`flex items-center w-full px-4 py-2.5 mt-2 rounded-lg transition ${
            actif === "reservations" ? "bg-zinc-800 text-red-500 font-medium" : "text-gray-300 hover:bg-zinc-800"
          }`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-3">
            <path fillRule="evenodd" d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z" clipRule="evenodd" />
          </svg>
          <span>Réservation</span>
        </button>

        <div className="flex items-center px-4 py-2.5 mt-2 text-gray-300">
          <img src={image2} alt="" className="w-5 h-5 mr-3 object-contain" />
          <span>Historique</span>
        </div>

        <h1 className="text-gray-300 font-serif font-bold text-sm tracking-wider uppercase my-4">
          Gestion
        </h1>

        <ItemDesactive
          label="Parc véhicule"
          icon={
            <path fillRule="evenodd" d="M1.5 10.5a3 3 0 0 1 3-3h15a3 3 0 1 1 0 6h-15a3 3 0 0 1-3-3Zm15 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm2.25.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM4.5 15a3 3 0 1 0 0 6h15a3 3 0 1 0 0-6h-15Zm11.25 3.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM19.5 18a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" clipRule="evenodd" />
          }
        />
        <ItemDesactive
          label="Clients"
          icon={
            <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
          }
        />
        <ItemDesactive
          label="Rapport"
          icon={
            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
          }
        />

        <h1 className="text-gray-300 font-serif font-bold text-sm tracking-wider uppercase my-4">
          Système
        </h1>
        <ItemDesactive
          label="Paramètre"
          icon={
            <path fillRule="evenodd" d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 0 0-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 0 0-2.282.819l-.922 1.597a1.875 1.875 0 0 0 .432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 0 0 0 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 0 0-.432 2.385l.922 1.597a1.875 1.875 0 0 0 2.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 0 0 2.28-.819l.923-1.597a1.875 1.875 0 0 0-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 0 0 0-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 0 0-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 0 0-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 0 0-1.85-1.567h-1.843ZM12 15.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z" clipRule="evenodd" />
          }
        />
      </div>
    </aside>
  );
}

function ItemDesactive({ label, icon }: { label: string; icon: React.ReactNode }) {
  return (
    <div
      title="Page pas encore créée"
      className="flex items-center justify-between px-4 py-2 mt-1 opacity-40 cursor-not-allowed text-gray-300"
    >
      <div className="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-3">
          {icon}
        </svg>
        <span>{label}</span>
      </div>
      <span className="text-[10px] bg-zinc-800 text-gray-400 px-2 py-0.5 rounded-full">Bientôt</span>
    </div>
  );
}