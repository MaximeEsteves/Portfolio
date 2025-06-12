import { useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/Slideshow.scss";
import data from "../../data.json";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Slideshow() {
  const { id } = useParams();
  const logement = data.find((item) => item.id === id);
  const [index, setIndex] = useState(0);

  const total = logement.pictures.length;

  const goToPrevious = () => {
    setIndex((prevIndex) => (prevIndex === 0 ? total - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setIndex((prevIndex) => (prevIndex === total - 1 ? 0 : prevIndex + 1));
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

      <img
        src={logement.pictures[index]}
        alt={`${logement.title} ${index + 1}`}
        className="image-logement"
      />
    </div>
  );
}
