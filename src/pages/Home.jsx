import data from "../data/logements.json";
import Card from "../components/Card/Card";
import Banner from "../components/Banner/Banner";

function Home() {
  return (
    <>
      <Banner />

      <div className="gallery">
        {data.map((logement) => (
          <Card
            key={logement.id}
            id={logement.id}
            title={logement.title}
            cover={logement.cover}
          />
        ))}
      </div>
    </>
  );
}

export default Home;