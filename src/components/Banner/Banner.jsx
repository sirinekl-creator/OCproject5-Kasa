import "./Banner.scss";

const Banner = ({ image, text }) => {
  return (
    <div className="banner">
      <img src={image} alt="banner" className="banner__img" />
      <h1 className="banner__text">{text}</h1>
    </div>
  );
};

export default Banner;