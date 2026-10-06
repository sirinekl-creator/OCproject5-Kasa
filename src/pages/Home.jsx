import Banner from "../components/Banner/Banner";
import Cards from "../components/Cards/Cards";
import homeBanner from "../assets/Banner/home-banner.jpg";
import "./Home.scss";

function Home() {
  return (
    <main className="home">
      <Banner
        image={homeBanner}
        title={
          <>
            Chez vous,<br className="mobile-break" />
            partout et ailleurs
          </>
        }
      />

      <Cards />
    </main>
  );
}

export default Home;