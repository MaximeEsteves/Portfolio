import "./Reseaux.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileInvoice } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faTiktok } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
function Reseaux() {
  return (
    <div className="contact-link">
      <a
        href="/CV_Maxime_ESTEVES.pdf"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Télécharger le CV"
        title="Télécharger le CV"
      >
        <FontAwesomeIcon
          icon={faFileInvoice}
          className="icon"
          aria-hidden="true"
        />
      </a>
      <a
        href="https://www.linkedin.com/in/maxime-esteves-7a12b3225"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Profil LinkedIn de Maxime Esteves"
        title="LinkedIn"
      >
        <FontAwesomeIcon icon={faLinkedin} className="icon" />
      </a>
      <a
        href="mailto:maxime.esteves81@orange.fr"
        aria-label="Envoyer un email à Maxime Esteves"
        title="Email"
      >
        <FontAwesomeIcon icon={faEnvelope} className="icon" />
      </a>
      <a
        href="https://www.tiktok.com/@maximo_delavego"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Profil TikTok de Maxime Esteves"
        title="TikTok"
      >
        <FontAwesomeIcon icon={faTiktok} className="icon" aria-hidden="true" />
      </a>
      <a
        href="https://github.com/MaximeEsteves?tab=repositories"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Profil Github de Maxime Esteves"
        title="Github"
      >
        <FontAwesomeIcon icon={faGithub} className="icon" aria-hidden="true" />
      </a>
    </div>
  );
}

export default Reseaux;
