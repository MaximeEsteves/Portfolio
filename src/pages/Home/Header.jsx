import { Link, useNavigate } from "react-router-dom";
import Logo from "../../../public/logo-em.jpg";
import Profil from "../../../public/photo-profil.png";
import "./Header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileInvoice } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const navigate = useNavigate();
  const goToSection = (sectionId) => {
    navigate("/", { state: { scrollTo: sectionId } });
  };
  return (
    <header>
      <nav className="nav-contenair">
        <div className="logo-wrapper">
          <Link to="/">
            <img className="home-logo" src={Logo} alt="Logo" />
          </Link>
          <div className="profile-hover">
            <img src={Profil} alt="Profil" className="profile-img" />
            <span className="profile-name">Maxime Esteves</span>
          </div>
        </div>

        <div className="nav-link">
          <Link to="/">Accueil</Link>
          <a onClick={() => goToSection("projet")}>Projet</a>
          <a onClick={() => goToSection("contact")}>Contact</a>
          <a href="/public/CV_Maxime_ESTEVES.pdf">
            <FontAwesomeIcon icon={faFileInvoice} />
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
