import "./About.scss";
import Banner from "../components/Banner/Banner";
import Collapse from "../components/Collapse/Collapse";
import aboutBanner from "../assets/Banner/about-banner.jpg";

function About() {
  return (
    <main className="about">
      <Banner image={aboutBanner} />

      <section className="about__collapses">
        <Collapse title="Fiabilité" content="..." />
        <Collapse title="Respect" content="..." />
        <Collapse title="Service" content="..." />
        <Collapse title="Sécurité" content="..." />
      </section>
    </main>
  );
}

export default About;