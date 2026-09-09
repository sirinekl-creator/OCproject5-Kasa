import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/Logo/LOGO.png";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <img className="header__logo" src={Logo} alt="Logo Kasa" />
      </Link>

      <nav className="header__nav">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "header__link active" : "header__link"
          }
        >
          Accueil
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "header__link active" : "header__link"
          }
        >
          A Propos
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;