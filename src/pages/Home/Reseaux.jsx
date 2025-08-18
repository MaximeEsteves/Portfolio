import "./Reseaux.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileInvoice } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faTiktok } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
function Reseaux() {
  return (
    <div className="contact-link">
      <a
        href="/CV_Maxime_ESTEVES.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faFileInvoice} className="icon" />
      </a>
      <a
        href="https://www.linkedin.com/in/maxime-esteves-7a12b3225"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faLinkedin} className="icon" />
      </a>
      <a href="mailto:maxime.esteves81@orange.fr">
        <FontAwesomeIcon icon={faEnvelope} className="icon" />
      </a>
      <a
        href="https://www.tiktok.com/@maximo_delavego"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faTiktok} className="icon" />
      </a>
    </div>
  );
}

export default Reseaux;
