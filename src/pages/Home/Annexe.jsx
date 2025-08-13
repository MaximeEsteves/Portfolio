import { Link } from "react-router-dom";
import "./Annexe.scss";
import Card from "./Card";
import annexeData from "../../../annexe.json";

export default function Annexe({ visible }) {
  if (!visible) return null;

  return (
    <section className="annexe">
      <h3>Mes projets OpenClassrooms</h3>
      <div className="annexe-grid">
        {annexeData.slice(0, 6).map((item) => (
          <Link to={`/projet/${item.id}`} className="Card">
            <Card picture={item.cover} width="355px" height="220px" />
          </Link>
        ))}
      </div>
    </section>
  );
}
