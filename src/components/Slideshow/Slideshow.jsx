import { useState } from "react";
import "./Slideshow.scss";
import arrow from "../../assets/Icons/arrow.svg";

function Slideshow({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
    );
  };

  const previousSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="slideshow">
      <img
        src={pictures[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="slideshow__image"
      />

      {pictures.length > 1 && (
        <>
          <button
            className="slideshow__arrow slideshow__arrow--left"
            onClick={previousSlide}
          >
            <img src={arrow} alt="Image précédente" />
          </button>

          <button
            className="slideshow__arrow slideshow__arrow--right"
            onClick={nextSlide}
          >
            <img src={arrow} alt="Image suivante" />
          </button>

          <p className="slideshow__counter">
            {currentIndex + 1} / {pictures.length}
          </p>
        </>
      )}
    </div>
  );
}

export default Slideshow;