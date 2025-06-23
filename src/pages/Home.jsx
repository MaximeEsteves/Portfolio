import "../styles/Home.scss";
import imageHome from "../assets/image-home.png";
import Card from "../components/Card";
import { Link } from "react-router-dom";
import data from "../../data.json";

export default function Home() {
  return (
    <div className="home-container">
      <div className="titre-home">
        <img src={imageHome} alt="home" className="image-home" />
        <h1 className="overlay-text">Chez vous, partout et ailleurs</h1>
      </div>
      <div className="card-home">
        {data.map((profil) => (
          <Link to={`/logement/${profil.id}`} key={profil.id}>
            <Card title={profil.title} picture={profil.cover} />
          </Link>
        ))}
      </div>
    </div>
  );
}
