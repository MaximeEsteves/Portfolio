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
          />
        ))}
      </div>
      <span>
        {index + 1} / {total}
      </span>
    </div>
  );
}
