import "../styles/Card.scss";

function Card({ picture, title }) {
  return (
    <div className="card-wrapper">
      <img className="card-image" src={picture} alt={`image ${title}`} />
      <h2 className="card-title"> {title}</h2>
    </div>
  );
}

export default Card;
