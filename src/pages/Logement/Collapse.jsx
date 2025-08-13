import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import "./Logement.scss";
import "./Collapse.scss";

export default function Collapse({ titre, description }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="logement-div-trois">
      <div>
        <button
          className="titre-description"
          onClick={() => setIsOpen(!isOpen)}
        >
          {titre}
          <span>
            <FontAwesomeIcon
              icon={faChevronDown}
              className={`chevron-icon ${isOpen ? "rotate" : ""}`}
            />
          </span>
        </button>
      </div>
      <div className={`text-description ${isOpen ? "" : "show"}`}>
        {Array.isArray(description) ? (
          <ul>
            {description.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          <p>
            {description.split("\n").map((line, index) => (
              <span key={index}>
                {line}
                <br />
              </span>
            ))}
          </p>
        )}
      </div>
    </div>
  );
}
