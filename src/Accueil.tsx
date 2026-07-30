import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import A_propos from "./component/A_propos";
import Contact from "./component/Contact";
import Fin from "./component/Fin";
import Hero from "./component/Hero";
import Nav from "./component/Nav";
import Nos_voitures from "./component/Nos_voitures";
import Tarif from "./component/Tarif";

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    // Si on arrive ici avec une section ciblée (depuis le menu Nav), on y défile
    const sectionId = (location.state as { scrollTo?: string } | null)?.scrollTo;
    if (sectionId) {
      // Petit délai pour laisser le temps à la page de s'afficher avant de défiler
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [location.state]);

  return (
    <div>
      <Nav />
      <div id="accueil">
        <Hero />
      </div>
      <div id="nosvoitures">
        <Nos_voitures />
      </div>
      <div id="tarif">
        <Tarif />
      </div>
      <div id="apropos">
        <A_propos />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Fin />
    </div>
  );
}
