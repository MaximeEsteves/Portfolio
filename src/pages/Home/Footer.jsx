import { Link } from "react-router-dom";
import "./Footer.scss";
import Logo from "../../assets/logo-kasa-white.svg";

export default function Footer() {
  return (
    <footer>
      <Link to="/">
        <img className="home-logo" src={Logo} />
      </Link>
      <p>© 2025 Kasa. All rights reserved</p>
    </footer>
  );
}
