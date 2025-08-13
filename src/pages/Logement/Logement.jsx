import "./Collapse.scss";
import Collapse from "./Collapse";
import Slideshow from "./Slideshow";
import { useParams } from "react-router-dom";
import data from "../../../data.json";
import annexeData from "../../../annexe.json"; // <- import des projets annexe
import Error from "../Error/Error";
import { Link } from "react-router-dom";
export default function Logement() {
  const { id } = useParams();

  // On combine les deux fichiers JSON
  const allProjects = [...data, ...annexeData];

  // On cherche le projet correspondant
  const logement = allProjects.find((item) => item.id === id);

  if (!logement) {
    return <Error />;
  }
  // Trouver l'index du projet actuel
  const currentIndex = allProjects.findIndex((item) => item.id === id);

  // Trouver le projet suivant, ou revenir au premier si on est au dernier
  const nextProject = allProjects[(currentIndex + 1) % allProjects.length];
  return (
    <div className="home-logement">
      <div className="slideshow">
        <Slideshow projectId={id} />
      </div>
      <div className="logement-div-general">
        <div className="div-titre-logement">
          <h1 className="titre-logement">{logement.title}</h1>
          <h2>{logement.location}</h2>
        </div>

        <div className="logement-div-second">
          <ul className="info-logement">
            {logement.tags.map((tag, index) => (
              <li key={index}>{tag}</li>
            ))}
            <div className="rating">
              <a href={logement.link} target="_blank" rel="noopener noreferrer">
                {logement.rating}
              </a>
            </div>
          </ul>
        </div>
        <div className="button">
          <Collapse titre="Description" description={logement.descriptionBis} />
          <Collapse
            titre="Spécifications techniques"
            description={logement.equipments}
          />
        </div>
        <div className="profil-nom-photo">
          <p className="projet-suivant">Projet suivant</p>
          <Link to={`/projet/${nextProject.id}`} className="next-project-link">
            <img
              src={nextProject.host?.picture || nextProject.cover} // fallback si pas de host.picture
              alt={nextProject.host?.name || nextProject.title}
              className="image-profil"
            />
            <p>{nextProject.host?.name || nextProject.title}</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
