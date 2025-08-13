import "./Home.scss";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Text from "./Text";
import Skills from "./Skills";
import Projet from "./Projet";
import Reseaux from "./Reseaux";

export default function Home() {
  const [showAll, setShowAll] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const section = document.getElementById(location.state.scrollTo);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className="home-container">
      <Text
        title="Développeur web"
        description="👋 Bonjour, je suis <strong>Maxime Esteves</strong>, en reconversion professionnelle, titulaire d'un diplome Développer Web, je recherche une entreprise pour commencer ma nouvelle vie professionnelle en CDD/CDI ou alternance. <br /> <br /> Je suis curieux et envieux d'apprentissage ! Découvrez mon parcours et mes différents projets ☺️"
      />
      <Projet showAll={showAll} setShowAll={setShowAll} />
      <Text
        title="Mes skills"
        description="💪 Titulaire d’un titre professionnel de Développeur Web, je bénéficie également de six années d’expérience dans la logistique au sein d’un commerce de gros, ainsi que d'une expérience en vente et bureau d’études en électricité. <br> Ce parcours m’a permis de développer des compétences transversales solides, reflétant ma persévérance, mon adaptabilité et mon engagement dans chaque projet entrepris. <br> <br> Je suis autodidacte, curieux et envieux d'apprentissage ! Découvre mes skills ☺️"
      />
      <Skills />
      <div className="contact-wrapper" id="contact">
        <Text
          title="Contact"
          description="💪 Ma curiosité et mon engagement dans chacune des missions que j'ai menées dans ma carrière et mes projets m’ont motivé aujourd'hui à me lancer dans cette reconversion professionnelle. 
          <br><br>Je souhaite, en intégrant une alternance, évoluer dans ce métier en me confrontant directement au monde du travail, en parallèle du programme scolaire. <br> En tant qu'employer en CCD ou CDI je souhaite apporter toute ma motivation et mes compétences au service de l'entreprise.
        
        <br><br>Je suis disponible dans la zone de 📍 Montauban (82) 📍 Toulouse (31), mais également prêt à travailler en 🖥️ 100 % distanciel ! ☺️"
        />
        <img
          src="src/assets/photo-profil.png"
          alt="Photo de profil de Maxime Esteves"
        />
      </div>
      <Reseaux />
    </div>
  );
}
