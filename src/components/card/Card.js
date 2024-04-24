import "./card.css";

function Card({ image, title, price, text }) {
  return (
    <article className="card">
      <figure className="card-image-container">
        <img src={image} alt="card illustration" className="card-image" />
      </figure>
      <div className="card-description">
        <div className="card-title-and-price">
          <h4 className="card-title">{title}</h4>
          <p className="card-price">$ {price}</p>
        </div>
        <div className="card-text">
          <p className="card-description">{text}</p>
        </div>
        <div className="card-button-container">
          <button className="card-button" aria-label="On Click">
            Order Now
          </button>
        </div>
      </div>
    </article>
  );
}

export default Card;
