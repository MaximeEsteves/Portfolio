import "./Skills.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";

function Skills() {
  return (
    <div className="skills-wrapper">
      <div className="skills-text">
        <div className="skills-text-diplome">
          <h3>Diplome</h3>
          <div className="test">
            <FontAwesomeIcon icon={faGraduationCap} />
            <p>
              Titre Pro Développeur Web 2025
              <span className="sous-text">
                OpenClassrooms (100% distanciel)
              </span>
            </p>
          </div>
          <div className="test">
            <FontAwesomeIcon icon={faGraduationCap} />
            <p>
              BTS FED option C 2015 - 2017
              <span className="sous-text">
                Fluides, Énergies, Domotique option Bâtiment communicants (31)
              </span>
            </p>
          </div>
          <div className="test">
            <FontAwesomeIcon icon={faGraduationCap} />
            <p>
              BAC Pro Électrotechnique 2013 - 2015
              <span className="sous-text">Mention assez bien. (81)</span>
            </p>
          </div>
        </div>

        <div className="skills-text-experiences">
          <h3>Expérience</h3>
          <div className="test">
            <FontAwesomeIcon icon={faBriefcase} />
            <p>
              Asept InMed - Employé logistique 2023 - 2024
              <span className="sous-text">
                Réception et préparation de commandes de matériels médicaux.
              </span>
            </p>
          </div>
          <div className="test">
            <FontAwesomeIcon icon={faBriefcase} />
            <p>
              Malrieu - Coordinateur logistique 2019 - 2022
              <span className="sous-text">
                Gestion de la chaîne et du dépôt logistique. <br />
                Supervision d'une équipe de 3 personnes.
              </span>
            </p>
          </div>
          <div className="test">
            <FontAwesomeIcon icon={faBriefcase} />
            <p>
              Malrieu - Vendeur/BE électricité 2017 - 2018
              <span className="sous-text">
                Vente et conseil en électricité aux particuliers et
                professionnels.
              </span>
            </p>
          </div>
          <div className="test">
            <FontAwesomeIcon icon={faBriefcase} />
            <p>
              SMÉlectricité - Électricien 2013 - 2017
              <span className="sous-text">
                Électricité générale sur habitations neuves et/ou rénovées.
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="skills-container">
        <a
          href="https://developer.mozilla.org/fr/docs/Web/HTML"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/icon/html-5.svg" alt="icon-HTML" />
        </a>
        <a
          href="https://nodejs.org/fr"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/icon/nodejs.png" alt="icon-Node.js" />
        </a>
        <a
          href="https://www.netlify.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/icon/netlify.png" alt="icon-Netlify" />
        </a>
        <a
          href="https://www.openai.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/icon/chatgpt.png" alt="icon-ChatGPT" className="rotate" />
        </a>
        <a
          href="https://developer.mozilla.org/fr/docs/Web/CSS"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/icon/css-3.svg" alt="icon-CSS" />
        </a>
        <a
          href="https://expressjs.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/icon/express.png" alt="icon-Express" />
        </a>
        <a href="https://vercel.com/" target="_blank" rel="noopener noreferrer">
          <img src="/icon/vercel.png" alt="icon-Vercel" />
        </a>
        <a
          href="https://www.claude.ai/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/icon/claude.png" alt="icon-Claude" />
        </a>
        <a
          href="https://developer.mozilla.org/fr/docs/Web/JavaScript"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/icon/javascript.svg" alt="icon-JavaScript" />
        </a>
        <a
          href="https://www.mongodb.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/icon/mongodb.png" alt="icon-MongoDB" />
        </a>
        <a href="https://render.com/" target="_blank" rel="noopener noreferrer">
          <img src="/icon/render.png" alt="icon-Render" />
        </a>
        <a
          href="https://www.figma.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/icon/figma.png" alt="icon-Figma" />
        </a>
        <a
          href="https://reactjs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/icon/react.svg" alt="icon-React" className="rotate" />
        </a>
        <a
          href="https://www.php.net/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/icon/php.png" alt="icon-PHP" />
        </a>
        <a
          href="https://railway.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/icon/railway.png" alt="icon-Railway" />
        </a>
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
          <img src="/icon/github.png" alt="icon-GitHub" />
        </a>
        <a
          href="https://sass-lang.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/icon/scss.svg" alt="icon-SCSS" />
        </a>
        <a
          href="https://www.mysql.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/icon/mysql.svg" alt="icon-MySQL" />
        </a>
        <a
          href="https://www.webador.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/icon/webador.svg" alt="icon-Webador" className="rotate" />
        </a>
        <a
          href="https://copilot.microsoft.com/chats/Fxhe8Wgi2Xh424BUP2JNb"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/icon/copilot.png" alt="icon-Copilot" />
        </a>
      </div>
    </div>
  );
}

export default Skills;
