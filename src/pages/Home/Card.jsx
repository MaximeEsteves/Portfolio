import "./Card.scss";

function Card({ picture, title, width, height }) {
  return (
    <div className="card" style={{ width: width, height: height }}>
      <img className="card-image" src={picture} alt={`image ${title}`} />
      {/* <div className="overlay-gradient"></div> */}
    </div>
  );
}

export default Card;
