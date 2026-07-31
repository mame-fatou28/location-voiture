import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import image1 from "../assets/Icon.svg";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

type Stats = {
  reservationsActives: number;
  revenuMensuel: number;
  voituresDisponibles: number;
  totalVoitures: number;
  tauxOccupation: number;
};

type Reservation = {
  _id: string;
  client: { nom: string; email?: string };
  voiture: { marque: string; modele: string } | null;
  dateDepart: string;
  dateRetour: string;
  montant: number;
  statut: "en_attente" | "en_cours" | "terminee" | "annulee";
};

const STATUT_LABELS: Record<string, { label: string; color: string }> = {
  en_attente: { label: "En attente", color: "text-orange-500" },
  en_cours: { label: "En cours", color: "text-green-500" },
  terminee: { label: "Terminée", color: "text-blue-500" },
  annulee: { label: "Annulée", color: "text-red-500" },
};

const FILTRES = [
  { value: "toutes", label: "Toutes" },
  { value: "en_cours", label: "Actives" },
  { value: "terminee", label: "Terminées" },
  { value: "annulee", label: "Annulées" },
];

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("fr-FR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

export default function Header() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [filtreActif, setFiltreActif] = useState("toutes");
  const [chargement, setChargement] = useState(true);
  const [erreurAuth, setErreurAuth] = useState(false);

  const token = localStorage.getItem("token");

  const headers = {
    "Content-Type": "application/json",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };

  const fetchStats = async () => {
    try {
      const res = await fetch(`${API_URL}/reservations/stats`, { headers });
      if (res.status === 401 || res.status === 403) {
        setErreurAuth(true);
        return;
      }
      const data = await res.json();
      setStats(data);
    } catch (err) {
      console.error("Erreur chargement stats :", err);
    }
  };

  const fetchReservations = async (statut: string) => {
    setChargement(true);
    try {
      const res = await fetch(`${API_URL}/reservations?statut=${statut}`, { headers });
      if (res.status === 401 || res.status === 403) {
        setErreurAuth(true);
        setChargement(false);
        return;
      }
      const data = await res.json();
      setReservations(data);
    } catch (err) {
      console.error("Erreur chargement réservations :", err);
    } finally {
      setChargement(false);
    }
  };

  const changerStatut = async (id: string, nouveauStatut: string) => {
    try {
      const res = await fetch(`${API_URL}/reservations/${id}`, {
        method: "PUT",
        headers,
        body: JSON.stringify({ statut: nouveauStatut }),
      });
      if (!res.ok) throw new Error("Impossible de changer le statut.");
      fetchReservations(filtreActif);
      fetchStats();
    } catch (err) {
      console.error("Erreur changement de statut :", err);
    }
  };

  useEffect(() => {
    fetchStats();
  }, []);

  useEffect(() => {
    fetchReservations(filtreActif);
  }, [filtreActif]);

  const [state] = useState({
    series: [
      { name: "Net Profit", data: [44, 55, 57, 56, 61, 58, 63, 60, 66] },
      { name: "Revenue", data: [76, 85, 101, 98, 87, 105, 91, 114, 94] },
      { name: "Free Cash Flow", data: [35, 41, 36, 26, 45, 48, 52, 53, 41] },
    ],
    options: {
      chart: { type: "bar" as const, height: 220, toolbar: { show: false } },
      plotOptions: {
        bar: { horizontal: false, columnWidth: "55%", borderRadius: 5 },
      },
      dataLabels: { enabled: false },
      stroke: { show: true, width: 2, colors: ["transparent"] },
      xaxis: { categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"] },
      yaxis: { title: { text: "$ (thousands)" } },
      fill: { opacity: 1 },
      tooltip: { y: { formatter: (val: number) => "$ " + val + " thousands" } },
    },
  });

  const [chartData] = React.useState({
    series: [8, 5, 3, 2, 4],
    options: {
      chart: { type: "donut" as const },
      dataLabels: { enabled: true, style: { fontSize: "8px" } },
      labels: ["Citadines", "SUV", "Berlines", "4x4", "Utilitaires"],
      legend: { position: "bottom" as const, labels: { colors: "#ccc" } },
    },
  });

  const optionsLine = {
    chart: { type: "line" as const, height: 220, zoom: { enabled: false } },
    dataLabels: { enabled: false },
    stroke: { curve: "straight" as const },
    title: { text: "Revenus mensuels des locations", align: "left" as const, style: { color: "#ccc" } },
    grid: { row: { colors: ["#222", "transparent"], opacity: 0.3 } },
    xaxis: { categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"] },
  };

  const seriesLine = [
    { name: "Revenus", data: [12000, 15000, 18000, 14000, 22000, 26000, 30000, 28000, 32000] },
  ];

  return (
    <div className="bg-zinc-900 w-full rounded-lg p-4 sm:p-6 text-gray-300">
      
      {/* Top Navbar */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-3 rounded-2xl border border-gray-700 bg-zinc-900 mb-6">
        <div className="flex items-center gap-3">
          <img src={image1} alt="" className="w-6 h-6" />
          <h1 id="vue-ensemble" className="text-gray-300 font-bold text-lg scroll-mt-10">
            Dashboard
          </h1>
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto">
          <input
            type="search"
            placeholder="Recherche..."
            className="w-full sm:w-48 px-4 py-1.5 rounded-full bg-zinc-800 text-white text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
          />
          <button className="p-1.5 hover:bg-zinc-800 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
            </svg>
          </button>
          <button className="p-1.5 hover:bg-zinc-800 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M10.5 8.25h3l-3 4.5h3" />
            </svg>
          </button>
        </div>
      </div>

      {/* Header Info */}
      <div className="mb-4">
        <h1 className="text-gray-100 font-bold text-xl sm:text-2xl">Vue d'ensemble</h1>
        <span className="text-gray-400 text-xs sm:text-sm">Lundi 27 Avril 2026</span>
      </div>

      <div className="border-t border-gray-700 my-4" />

      {erreurAuth && (
        <div className="bg-red-950 border border-red-600 text-red-300 text-sm rounded-lg p-3 mb-4">
          Tu n'es pas connecté en tant qu'admin — les données ci-dessous ne peuvent pas être chargées.
          Connecte-toi avec un compte ayant le rôle <strong>admin</strong>.
        </div>
      )}

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-black rounded-lg p-4 border border-zinc-800">
          <p className="text-gray-400 text-sm">Réservations actives</p>
          <p className="text-white text-2xl font-bold mt-1">{stats ? stats.reservationsActives : "—"}</p>
        </div>

        <div className="bg-black rounded-lg p-4 border border-zinc-800">
          <p className="text-gray-400 text-sm">Revenu mensuel</p>
          <p className="text-white text-2xl font-bold mt-1">
            {stats ? `${stats.revenuMensuel.toLocaleString("fr-FR")} F` : "—"}
          </p>
        </div>

        <div className="bg-black rounded-lg p-4 border border-zinc-800">
          <p className="text-gray-400 text-sm">Véhicules dispo</p>
          <p className="text-white text-2xl font-bold mt-1">
            {stats ? `${stats.voituresDisponibles}/${stats.totalVoitures}` : "—"}
          </p>
        </div>

        <div className="bg-black rounded-lg p-4 border border-zinc-800">
          <p className="text-gray-400 text-sm">Taux d'occupation</p>
          <p className="text-white text-2xl font-bold mt-1">{stats ? `${stats.tauxOccupation}%` : "—"}</p>
        </div>
      </div>

      {/* Analytics Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-black p-4 rounded-lg border border-zinc-800">
          <h2 className="text-gray-300 font-bold mb-2">Analyse des revenus</h2>
          <ReactApexChart options={state.options} series={state.series} type="bar" height={220} />
        </div>
        <div className="bg-black p-4 rounded-lg border border-zinc-800">
          <h2 className="text-gray-300 font-bold mb-2">Répartition des types de location</h2>
          <ReactApexChart options={chartData.options} series={chartData.series} type="donut" height={220} />
        </div>
      </div>

      {/* Table Section */}
      <div id="reservations" className="bg-black rounded-lg p-4 border border-zinc-800 scroll-mt-10 mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
          <h2 className="text-gray-200 font-bold">Historique des réservations</h2>

          <div className="flex flex-wrap gap-2">
            {FILTRES.map((f) => (
              <button
                key={f.value}
                onClick={() => setFiltreActif(f.value)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition ${
                  filtreActif === f.value
                    ? "text-red-500 bg-zinc-800"
                    : "text-zinc-900 bg-gray-300 hover:bg-gray-200"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-300">
            <thead>
              <tr className="text-gray-500 border-b border-zinc-800">
                <th className="py-2 px-3">N° réservation</th>
                <th className="py-2 px-3">Client</th>
                <th className="py-2 px-3">Véhicule</th>
                <th className="py-2 px-3">Départ</th>
                <th className="py-2 px-3">Retour</th>
                <th className="py-2 px-3">Montant</th>
                <th className="py-2 px-3">Statut</th>
                <th className="py-2 px-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {chargement && (
                <tr>
                  <td colSpan={8} className="py-6 text-center text-gray-500">Chargement...</td>
                </tr>
              )}

              {!chargement && reservations.length === 0 && !erreurAuth && (
                <tr>
                  <td colSpan={8} className="py-6 text-center text-gray-500">Aucune réservation pour ce filtre.</td>
                </tr>
              )}

              {!chargement && reservations.map((r) => {
                const statutInfo = STATUT_LABELS[r.statut] || { label: r.statut, color: "text-gray-400" };
                const estActive = r.statut === "en_attente" || r.statut === "en_cours";
                return (
                  <tr key={r._id} className="border-b border-zinc-800 hover:bg-zinc-800/50">
                    <td className="py-2 px-3 text-gray-400">#{r._id.slice(-6).toUpperCase()}</td>
                    <td className="py-2 px-3">{r.client?.nom}</td>
                    <td className="py-2 px-3">
                      {r.voiture ? `${r.voiture.marque} ${r.voiture.modele}` : "—"}
                    </td>
                    <td className="py-2 px-3">{formatDate(r.dateDepart)}</td>
                    <td className="py-2 px-3">{formatDate(r.dateRetour)}</td>
                    <td className="py-2 px-3">{r.montant.toLocaleString("fr-FR")} F</td>
                    <td className="py-2 px-3">
                      <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium bg-zinc-800 ${statutInfo.color}`}>
                        {statutInfo.label}
                      </span>
                    </td>
                    <td className="py-2 px-3">
                      {estActive ? (
                        <div className="flex gap-1.5">
                          {r.statut === "en_attente" && (
                            <button
                              onClick={() => changerStatut(r._id, "en_cours")}
                              className="px-2 py-1 rounded text-xs bg-green-700 hover:bg-green-600 text-white"
                            >
                              Valider
                            </button>
                          )}
                          <button
                            onClick={() => changerStatut(r._id, "terminee")}
                            className="px-2 py-1 rounded text-xs bg-blue-700 hover:bg-blue-600 text-white"
                          >
                            Terminer
                          </button>
                          <button
                            onClick={() => changerStatut(r._id, "annulee")}
                            className="px-2 py-1 rounded text-xs bg-red-700 hover:bg-red-600 text-white"
                          >
                            Annuler
                          </button>
                        </div>
                      ) : (
                        <span className="text-gray-600 text-xs">—</span>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-black p-4 rounded-lg border border-zinc-800">
          <ReactApexChart options={optionsLine} series={seriesLine} type="line" height={220} />
        </div>
        <div className="bg-black p-4 rounded-lg border border-zinc-800">
          <h2 className="text-gray-300 font-bold mb-4">Véhicules les plus loués</h2>
          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-xs text-gray-300 mb-1">
                <span>1 - Renault Clio</span>
                <span>28 locations</span>
              </div>
              <div className="w-full bg-zinc-800 h-2.5 rounded-full overflow-hidden">
                <div className="bg-emerald-500 h-full" style={{ width: "88%" }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs text-gray-300 mb-1">
                <span>2 - Toyota Corolla</span>
                <span>22 locations</span>
              </div>
              <div className="w-full bg-zinc-800 h-2.5 rounded-full overflow-hidden">
                <div className="bg-emerald-500 h-full" style={{ width: "68%" }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs text-gray-300 mb-1">
                <span>3 - Peugeot 308</span>
                <span>19 locations</span>
              </div>
              <div className="w-full bg-zinc-800 h-2.5 rounded-full overflow-hidden">
                <div className="bg-emerald-500 h-full" style={{ width: "59%" }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs text-gray-300 mb-1">
                <span>4 - Dacia Duster</span>
                <span>15 locations</span>
              </div>
              <div className="w-full bg-zinc-800 h-2.5 rounded-full overflow-hidden">
                <div className="bg-emerald-500 h-full" style={{ width: "47%" }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}