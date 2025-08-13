import "./Text.scss";
import Line from "./Line";

function Text({ title, description }) {
  return (
    <div className="titre-home">
      <h1 className="titre-text">{title}</h1>
      <p
        className="paragraph-text"
        dangerouslySetInnerHTML={{ __html: description }}
      />
      <Line />
    </div>
  );
}

export default Text;
