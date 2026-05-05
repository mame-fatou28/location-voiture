import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import image1 from '../assets/Icon.svg'
export default function Header() {



    const [state] = useState({
    series: [
      {
        name: "Net Profit",
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
      },
      {
        name: "Revenue",
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
      },
      {
        name: "Free Cash Flow",
        data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
      },
    ],

    options: {
      chart: {
        type: "bar",
        height: 350,
        toolbar: {
          show: false,
        },
      },

      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
          borderRadius: 5,
          borderRadiusApplication: "end",
        },
      },

      dataLabels: {
        enabled: false,
      },

      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },

      xaxis: {
        categories: [
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
        ],
      },

      yaxis: {
        title: {
          text: "$ (thousands)",
        },
      },

      fill: {
        opacity: 1,
      },

      tooltip: {
        y: {
          formatter: function (val) {
            return "$ " + val + " thousands";
          },
        },
      },
    },
  });

    const [chartData] = React.useState({
    series: [8, 5, 3, 2, 4],

    options: {
        
      chart: {
        type: "donut",
      },

      dataLabels: {
      enabled: true,
      style: {
      fontSize: "8px"
      }
    },

      labels: [
        "Citadines",
        "SUV",
        "Berlines",
        "4x4",
        "Utilitaires",
      ],

      legend: {
        position: "bottom",
      },
    },
  });
   const options = {
    chart: {
      type: "line",
      height: 350,
      zoom: { enabled: false },
    },

    dataLabels: {
      enabled: false,
    },

    stroke: {
      curve: "straight",
    },

    title: {
      text: "Revenus mensuels des locations",
      align: "left",
    },

    grid: {
      row: {
        colors: ["#f3f3f3", "transparent"],
        opacity: 0.3,
      },
    },

    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
    },
  };

  const series = [
    {
      name: "Revenus",
      data: [12000, 15000, 18000, 14000, 22000, 26000, 30000, 28000, 32000],
    },
  ];


  return (
    <div className="bg-black min-h-screen p-2 sm:p-4">
        
       
      <div className="bg-zinc-900  w-208 rounded-lg p-4 h-295 sm:p-6">
        
 <div className="w-200 mr-10  h-10 rounded-[30px] shadow-xl/30 border border-gray-300 bg-zinc-900">
           <div className="flex flex-row ">
              <img src={image1} className="ml-8 mt-2 " />
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 mt-2 w-6 ml-4">
               <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
              </svg>
              <h1 className="text-gray-300 mt-2 ml-5">Dashbord</h1>
              <div className="flex flex-row ml-85 mt-1 gap-3">
                <input type="search" placeholder="Recherche" className="w-45 h-7  rounded-[20px]  bg-gray-100" />
                
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                   <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                   </svg>
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                   <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M10.5 8.25h3l-3 4.5h3" />
                   </svg>


              </div>
           </div>

        </div>
        <h1 className="text-gray-300  font-bold text-xl sm:text-2xl">
          Vue d'ensemble
        </h1>
        <span className="text-gray-400 text-xs sm:text-sm">
          Lundi 27 Avril 2026
        </span>

        <div className="border-t border-gray-600 my-4" />

        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

          <div className="bg-black rounded-lg p-4">
            <p className="text-gray-400 text-sm">Réservations actives</p>
            <p className="text-white text-2xl font-bold">24</p>
            <p className="text-green-500 text-sm">+8% ce mois</p>
          </div>

          <div className="bg-black rounded-lg p-4">
            <p className="text-gray-400 text-sm">Revenu mensuel</p>
            <p className="text-white text-2xl font-bold">84 200F</p>
            <p className="text-green-500 text-sm">+12% vs mois dernier</p>
          </div>

          <div className="bg-black rounded-lg p-4">
            <p className="text-gray-400 text-sm">Véhicules dispo</p>
            <p className="text-white text-2xl font-bold">11/18</p>
            <p className="text-gray-400 text-sm">7 en location</p>
          </div>

          <div className="bg-black rounded-lg p-4">
            <p className="text-gray-400 text-sm">Taux d'occupation</p>
            <p className="text-white text-2xl font-bold">61%</p>
            <p className="text-red-500 text-sm">-3% ce mois</p>
          </div>

        </div>

       
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-6">
          <div className="h-48  rounded-lg">
            <h1 className="text-gray-300 font-serif font-bold ml-9">Analyse des revenus</h1>
             <ReactApexChart
        options={state.options}
        series={state.series}
        type="bar"
        height={180}
      />
          </div>
          <div className="h-48  rounded-lg">
             <h1 className="text-gray-300 font-serif font-bold ml-9">Répartition des types de location</h1>
            <ReactApexChart
      options={chartData.options}
      series={chartData.series}
      type="donut"
      height={180}
    />
          </div>
        </div>

     
        <div className="bg-black rounded-lg p-4 mt-6">

          <div className="flex flex-col lg:flex-row lg:items-center gap-3 mb-4">
            <h2 className="text-gray-300 font-bold flex-1">
              Historique des réservations
            </h2>

            <div className="flex flex-wrap gap-2">
              <button className="px-4 py-1 rounded-full text-sm text-red-500 bg-zinc-800">
                Toutes
              </button>
              <button className="px-4 py-1 rounded-full text-sm text-zinc-900 bg-gray-300">
                Actives
              </button>
              <button className="px-4 py-1 rounded-full text-sm text-zinc-900 bg-gray-300">
                Terminées
              </button>
              <button className="px-4 py-1 rounded-full text-sm text-zinc-900 bg-gray-300">
                Annulées
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-[900px] w-full text-sm text-gray-300">

              <thead>
                <tr className="text-gray-500 border-b border-gray-700 text-left">
                  <th className="py-2 px-3">N° réservation</th>
                  <th className="py-2 px-3">Client</th>
                  <th className="py-2 px-3">Véhicule</th>
                  <th className="py-2 px-3">Départ</th>
                  <th className="py-2 px-3">Retour</th>
                  <th className="py-2 px-3">Montant</th>
                  <th className="py-2 px-3">Statut</th>
                </tr>
              </thead>

              <tbody>
                <tr className="border-b border-gray-800 hover:bg-zinc-800">
                  <td className="py-2 px-3 text-gray-400">#RES-2874</td>
                  <td className="py-2 px-3">Aminata Diallo</td>
                  <td className="py-2 px-3">Renault Clio</td>
                  <td className="py-2 px-3">27 avr 2026</td>
                  <td className="py-2 px-3">30 avr 2026</td>
                  <td className="py-2 px-3">18 000 F</td>
                  <td className="py-2 px-3">
                    <span className="px-3 py-1 rounded-full text-xs bg-zinc-700 text-green-500">
                      En cours
                    </span>
                  </td>
                </tr>

                <tr className="border-b border-gray-800 hover:bg-zinc-800">
                  <td className="py-2 px-3 text-gray-400">#RES-2873</td>
                  <td className="py-2 px-3">Ousmane Ba</td>
                  <td className="py-2 px-3">Toyota Corolla</td>
                  <td className="py-2 px-3">26 avr 2026</td>
                  <td className="py-2 px-3">28 avr 2026</td>
                  <td className="py-2 px-3">12 500 F</td>
                  <td className="py-2 px-3">
                    <span className="px-3 py-1 rounded-full text-xs bg-zinc-700 text-orange-500">
                      En attente
                    </span>
                  </td>
                </tr>

                <tr className="border-b border-gray-800 hover:bg-zinc-800">
                  <td className="py-2 px-3 text-gray-400">#RES-2871</td>
                  <td className="py-2 px-3">Fatou Ndiaye</td>
                  <td className="py-2 px-3">Peugeot 308</td>
                  <td className="py-2 px-3">20 avr 2026</td>
                  <td className="py-2 px-3">25 avr 2026</td>
                  <td className="py-2 px-3">30 000 F</td>
                  <td className="py-2 px-3">
                    <span className="px-3 py-1 rounded-full text-xs bg-zinc-700 text-blue-500">
                      Terminée
                    </span>
                  </td>
                </tr>

                <tr className="border-b border-gray-800 hover:bg-zinc-800">
                  <td className="py-2 px-3 text-gray-400">#RES-2869</td>
                  <td className="py-2 px-3">Moussa Koné</td>
                  <td className="py-2 px-3">Dacia Duster</td>
                  <td className="py-2 px-3">18 avr 2026</td>
                  <td className="py-2 px-3">22 avr 2026</td>
                  <td className="py-2 px-3">24 000 F</td>
                  <td className="py-2 px-3">
                    <span className="px-3 py-1 rounded-full text-xs bg-zinc-700 text-blue-500">
                      Terminée
                    </span>
                  </td>
                </tr>

                <tr className="border-b border-gray-800 hover:bg-zinc-800">
                  <td className="py-2 px-3 text-gray-400">#RES-2865</td>
                  <td className="py-2 px-3">Khady Sarr</td>
                  <td className="py-2 px-3">Nissan Note</td>
                  <td className="py-2 px-3">15 avr 2026</td>
                  <td className="py-2 px-3">17 avr 2026</td>
                  <td className="py-2 px-3">9 000 F</td>
                  <td className="py-2 px-3">
                    <span className="px-3 py-1 rounded-full text-xs bg-zinc-700 text-red-500">
                      Annulée
                    </span>
                  </td>
                </tr>

                <tr className="hover:bg-zinc-800">
                  <td className="py-2 px-3 text-gray-400">#RES-2860</td>
                  <td className="py-2 px-3">Ibrahim Sow</td>
                  <td className="py-2 px-3">Hyundai Tucson</td>
                  <td className="py-2 px-3">10 avr 2026</td>
                  <td className="py-2 px-3">14 avr 2026</td>
                  <td className="py-2 px-3">36 000 F</td>
                  <td className="py-2 px-3">
                    <span className="px-3 py-1 rounded-full text-xs bg-zinc-700 text-blue-500">
                      Terminée
                    </span>
                  </td>
                </tr>

              </tbody>
            </table>
          </div>
        </div>

        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-6">
          <div className="h-48  rounded-lg">
             <ReactApexChart
        options={options}
        series={series}
        type="line"
        height={210}
      />
          </div>
          <div className="h-48 ml-15  rounded-lg">
            <div className="flex  justify-between font-serif">
<div className="flex flex-col">
     <h2 className="text-gray-300 ml-3 font-bold flex-1">
             Véhicules les plus loués
            </h2>
    <span className="text-gray-300 ml-3 mt-4">1-Renault Clio/28 locations</span>

<div className="w-full bg-gray-300  ml-4 mt-2 rounded-full">
<div className="bg-emerald-950 h-3 rounded-full"style={{ width: "88%" }}></div>
</div>
<span className="text-gray-300 ml-3 mt-4">2-Toyota Corolla/22 locations</span>

<div className="w-full bg-gray-300  ml-4 mt-2 rounded-full">
<div className="bg-emerald-950 h-3 rounded-full"style={{ width: "68%" }}></div>
</div>
<span className="text-gray-300 ml-3 mt-4">3-Peugeot 308/19 locations</span>

<div className="w-full bg-gray-300  ml-4 mt-2 rounded-full">
<div className="bg-emerald-950 h-3 rounded-full"style={{ width: "59%" }}></div>
</div>
<span className="text-gray-300 ml-3 mt-4">4-Dacia Duster/15 locations</span>

<div className="w-full bg-gray-300  ml-4 mt-2 rounded-full">
<div className="bg-emerald-950 h-3 rounded-full"style={{ width: "47%" }}></div>
</div>
</div>
</div>
          </div>
        </div>

      </div>
    </div>
  );
}