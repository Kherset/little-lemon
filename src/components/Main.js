import presentation from "../img/presentation-food.jpg";
import Card from "./Card";
import dishes from "../dishes";
import { Link } from "react-router-dom";

function Main() {
  return (
    <main className="main">
      <section className="main-highlight">
        <article className="main-presentation">
          <h1 className="main-title">Little Lemon</h1>
          <h3 className="main-subtitle">Chicago</h3>
          <p className="main-text">
            We are a family owned Mediterranean restaurant focused on
            traditional recipes served with a modern twist
          </p>
          <Link to="/reserve-a-table">
            <button className="main-button">Reserve a table</button>
          </Link>
        </article>
        <figure className="main-container-presentation-image">
          <img
            src={presentation}
            alt="restaurant presentation"
            className="main-presentation-image"
          />
        </figure>
      </section>
      <div className="main-selection">
        <div className="main-selection-header">
          <h2 className="weeks-specials-title" id="weeks-specials-title">
            This Weeks Specials !
          </h2>
          <button className="online-menu-button">Online Menu</button>
        </div>
        <section className="highlight-selections" id="highlight-selections">
          {dishes.map((dish) => (
            <Card
              key={dish.id}
              image={dish.image}
              title={dish.title}
              price={dish.price}
              text={dish.description}
            />
          ))}
        </section>
      </div>
    </main>
  );
}

export default Main;
