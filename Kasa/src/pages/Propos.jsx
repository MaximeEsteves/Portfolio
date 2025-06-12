import "../styles/Propos.scss";
import imageHome from "../assets/image-home-propos.png";
import Collapse from "../components/Collapse";
import aboutList from "../../about.json";

export default function Propos() {
  return (
    <div className="home-container">
      <div className="titre-home">
        <img src={imageHome} alt="home" className="image-home" />
      </div>
      <div className="div-btn-propos">
        {aboutList.map((about) => (
          <Collapse
            key={about.title}
            titre={about.title}
            description={about.content}
          />
        ))}
      </div>
    </div>
  );
}
