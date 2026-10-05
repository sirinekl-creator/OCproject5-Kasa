import { useParams } from "react-router-dom";
import logements from "../data/logements.json";
import Slideshow from "../components/Slideshow/Slideshow";

function Logement() {
  const { id } = useParams();

  const logement = logements.find((item) => item.id === id);

  return (
    <main>
      <Slideshow pictures={logement.pictures} />
    </main>
  );
}

export default Logement;