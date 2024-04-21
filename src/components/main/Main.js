import Card from "../card/Card";
import dishes from "../../dishes";
import "./main.css";

function Main() {
  return (
    <main className="main">
      <div className="main-header">
        <h2 className="weeks-specials-title">This Weeks Specials !</h2>
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
    </main>
  );
}

export default Main;
