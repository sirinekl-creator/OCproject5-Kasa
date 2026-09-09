import "./Footer.scss";
import logo from "../../assets/Logo/LOGO.png";

const Footer = () => {
  return (
    <footer className="footer">
      <img src={logo} alt="logo kasa" className="footer__logo" />
      <p className="footer__text">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;