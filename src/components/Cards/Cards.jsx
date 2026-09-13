import "./Cards.scss";
import logements from "../../data/logements.json";
import Card from "../Card/Card";

function Cards() {
  return (
    <section className="cards">
      {logements.map((logement) => (
        <Card
          key={logement.id}
          id={logement.id}
          title={logement.title}
          cover={logement.cover}
        />
      ))}
    </section>
  );
}

export default Cards;