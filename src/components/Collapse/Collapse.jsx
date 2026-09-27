import { useState } from "react";
import arrow from "../../assets/Icons/arrow.svg";
import "./Collapse.scss";

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="collapse">
      <button
        className="collapse__header"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="collapse__title">{title}</span>

        <img
          src={arrow}
          alt=""
          className={`collapse__arrow ${
            isOpen ? "collapse__arrow--open" : ""
          }`}
        />
      </button>

      <div
        className={`collapse__content ${
          isOpen ? "collapse__content--open" : ""
        }`}
      >
        <p>{content}</p>
      </div>
    </div>
  );
}

export default Collapse;