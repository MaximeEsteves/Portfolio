import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Slideshow.scss";
import data from "./../../../data.json";
import annexeData from "./../../../annexe.json"; // <-- ajout
import {
  faChevronLeft,
  faChevronRight,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Slideshow({ projectId }) {
  const { id } = useParams();
  // Fusion des deux sources de données
  const allProjects = [...data, ...annexeData];
  const logement = allProjects.find((item) => item.id === id);

  const [index, setIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false); // modale ouverte ou non
  const [currentImg, setCurrentImg] = useState(null); // image affichée dans la modale

  if (!logement || !logement.pictures || logement.pictures.length === 0) {
    return null; // Si aucun logement trouvé ou pas d'image
  }
  // Remet à zéro quand le projet change
  useEffect(() => {
    setIndex(0);
  }, [projectId]);
  const total = logement.pictures.length;

  const goToPrevious = () => {
    setIndex((prevIndex) => (prevIndex === 0 ? total - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setIndex((prevIndex) => (prevIndex === total - 1 ? 0 : prevIndex + 1));
  };

  const openModal = (src) => {
    setCurrentImg(src);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setCurrentImg(null);
  };

  return (
    <div className="slideshow-container">
      {total > 1 && (
        <>
          <button onClick={goToPrevious} className="btn-slideshow left">
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button onClick={goToNext} className="btn-slideshow right">
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </>
      )}
      <div
        className="slideshow-track"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {logement.pictures.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`${logement.title} ${i + 1}`}
            className="image-logement"
            onClick={() => openModal(src)}
          />
        ))}
      </div>
      <span>
        {index + 1} / {total}
      </span>

      {/* Lightbox */}
      {isOpen && (
        <div className="lightbox" onClick={closeModal}>
          <span className="close-btn" onClick={closeModal}>
            <FontAwesomeIcon icon={faTimes} />
          </span>
          <img src={currentImg} alt="Agrandissement" className="lightbox-img" />
        </div>
      )}
    </div>
  );
}
