import { Navigate, useParams } from "react-router-dom";
import logements from "../data/logements.json";
import Slideshow from "../components/Slideshow/Slideshow";
import Collapse from "../components/Collapse/Collapse";
import "./Housing.scss";

function Logement() {
  const { id } = useParams();

  // Recherche du logement grâce à l'id présent dans l'URL
  const logement = logements.find((item) => item.id === id);

  // Si l'id n'existe pas, redirection vers la page 404
  if (!logement) {
    return <Navigate to="/404" replace />;
  }

  const rating = Number(logement.rating);

  return (
    <main className="housing">

      {/* Carrousel */}
      <Slideshow pictures={logement.pictures} />

      {/* Informations principales */}
      <section className="housing__information">

        {/* Titre, localisation et tags */}
        <div className="housing__details">

          <h1 className="housing__title">
            {logement.title}
          </h1>

          <p className="housing__location">
            {logement.location}
          </p>

          <div className="housing__tags">
            {logement.tags.map((tag) => (
              <span
                className="housing__tag"
                key={tag}
              >
                {tag}
              </span>
            ))}
          </div>

        </div>

        {/* Hôte et notation */}
        <div className="housing__aside">

          <div className="housing__host">
            <p className="housing__host-name">
              {logement.host.name}
            </p>

            <img
              className="housing__host-picture"
              src={logement.host.picture}
              alt={`Portrait de ${logement.host.name}`}
            />
          </div>

          {/* Étoiles */}
          <div
            className="housing__rating"
            aria-label={`Note : ${rating} sur 5`}
          >
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={
                  star <= rating
                    ? "housing__star housing__star--active"
                    : "housing__star"
                }
                aria-hidden="true"
              >
                ★
              </span>
            ))}
          </div>

        </div>
      </section>

      {/* Description et équipements */}
      <section className="housing__collapses">

        <div className="housing__collapse">
          <Collapse
            title="Description"
            content={logement.description}
          />
        </div>

        <div className="housing__collapse">
          <Collapse
            title="Équipements"
            content={logement.equipments.map((equipment) => (
              <span
                className="housing__equipment"
                key={equipment}
              >
                {equipment}
              </span>
            ))}
          />
        </div>

      </section>

    </main>
  );
}

export default Logement;