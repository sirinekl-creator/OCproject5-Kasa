import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { Outlet } from "react-router-dom";
import "./Layout.scss";

function Layout() {
  return (
    <div className="layout">
      <Header />

      <div className="layout__content">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
}

export default Layout;