import { Link } from "react-router-dom";
import Logo from "../../assets/logo-kasa.svg";
import "./Header.scss";

function Header() {
  return (
    <header>
      <nav className="nav-contenair">
        <Link to="/">
          <img className="home-logo" src={Logo} />
        </Link>
        <div className="nav-link">
          <Link to="/">Accueil</Link>
          <Link to="/a-propos">A Propos</Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
