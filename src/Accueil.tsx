
import A_propos from "./component/A_propos";
import Contact from "./component/Contact";
import Fin from "./component/Fin";
import Hero from "./component/Hero";
import Nav from "./component/Nav";
import Nos_voitures from "./component/Nos_voitures";
import Tarif from "./component/Tarif";

export default function Home() {
  return (
    <div>
      <Nav />
      <Hero />
      <Nos_voitures />
      <Tarif />
      <A_propos />
      <Contact />
      <Fin />
    </div>
  );
}