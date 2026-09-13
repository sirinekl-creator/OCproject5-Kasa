import Banner from "../components/Banner/Banner";
import Cards from "../components/Cards/Cards";

import homeBanner from "../assets/Banner/home-banner.jpg";

function Home() {
  return (
    <>
      <Banner
        image={homeBanner}
        title="Chez vous, partout et ailleurs"
      />

      <Cards />
    </>
  );
}

export default Home;