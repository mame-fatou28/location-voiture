import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react'
import Nav from './component/Nav'
import './App.css'
import Fin from './component/Fin'
import Tarif from "./component/Tarif";
import Hero from "./component/Hero";
import A_propos from "./component/A_propos";
import Nos_voitures from "./component/Nos_voitures";
import Contact from "./component/Contact";
import Home from "./Accueil";
import Inscription from "./component/Inscription";
import Connexion from "./component/Connecter";
import Page from "./component/Page";

function App() {

  

  return (
    <>
      <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/hero" element={<Hero />} />
        <Route path="/apropos" element={<A_propos />} />
         <Route path="/nosvoitures" element={<Nos_voitures />} />
          <Route path="/tarif" element={<Tarif />} />
           <Route path="/contact" element={<Contact />} />  
           <Route path="/fin" element={<Fin />} />
           <Route path="/connexion" element={<Connexion/>} />
            <Route path="/inscription" element={<Inscription/>} />
            <Route path="/dashboard" element={<Page />} />
           
      </Routes>

    </BrowserRouter>
    </>
  )
}

export default App