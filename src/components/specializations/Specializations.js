import Card from "../card/Card";
import dishes from "../../dishes";
import "./specializations.css";

function Specializations() {
  return (
    <section className="specializations">
      <div className="specializations-header">
        <h2 className="weeks-specials-title">This Weeks Specials !</h2>
        <button className="online-menu-button" aria-label="On Click">
          Online Menu
        </button>
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
    </section>
  );
}

export default Specializations;
