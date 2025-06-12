import "../styles/Button.scss";
import Collapse from "../components/Collapse";
import Slideshow from "../components/Slideshow";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams } from "react-router-dom";
import data from "../../data.json";

export default function Logement() {
  const { id } = useParams();
  const logement = data.find((item) => item.id === id);
  return (
    <div className="home-logement">
      <Slideshow />
      <div className="logement-div-general">
        <div className="logement-div-premier">
          <div className="div-titre-logement">
            <h1 className="titre-logement">{logement.title}</h1>
            {logement.tags.map((tag, index) => (
              <h2 key={index}>
                {tag}
                {index < logement.tags.length - 1 && ", "}
              </h2>
            ))}
          </div>
          <div className="profil-nom-photo">
            <span>{logement.host.name}</span>
            <img
              src={logement.host.picture}
              alt={logement.host.name}
              className="image-profil"
            />
          </div>
        </div>
        <div className="logement-div-second">
          <div>
            <ul className="info-logement">
              {logement.tags.map((tag, index) => (
                <li key={index}>{tag}</li>
              ))}
            </ul>
          </div>
          <div className="rating">
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className={`star ${i < logement.rating ? "filled" : ""}`}
              >
                <FontAwesomeIcon icon={faStar} />
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="button">
        <Collapse titre="Description" description={logement.description} />
        <Collapse titre="Équipements" description={logement.equipments} />
      </div>
    </div>
  );
}
