import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import "./Logement.scss";
import "../Home/Button.scss";
import "./Collapse.scss";

export default function Collapse({ titre, description }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="logement-div-trois">
      <button className="titre-description" onClick={() => setIsOpen(!isOpen)}>
        {titre}
        <FontAwesomeIcon
          icon={faChevronDown}
          className={`chevron-icon ${isOpen ? "rotate" : ""}`}
        />
      </button>
      <div className={`text-description ${isOpen ? "show" : ""}`}>
        {Array.isArray(description) ? (
          <ul>
            {description.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          <p>{description}</p>
        )}
      </div>
    </div>
  );
}
