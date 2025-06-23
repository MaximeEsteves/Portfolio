import { Link } from "react-router-dom";
import Logo from "../assets/logo-kasa.svg";
import "../styles/Header.scss";

function Header() {
  // const { theme } = useTheme();

  return (
    <nav className="nav-contenair">
      <Link to="/">
        <img className="home-logo" src={Logo} />
      </Link>
      <div className="nav-link">
        <Link to="/">Accueil</Link>
        <Link to="/a-propos">A Propos</Link>
      </div>
    </nav>
  );
}

export default Header;
