import "../css/about.css";
import AboutSection1 from "../partials/AboutPartials/AboutSection1";
import AboutSection2 from "../partials/AboutPartials/AboutSection2";
import AboutSection3 from "../partials/AboutPartials/AboutSection3";
import Footer from "../components/Footer";
function About() {
  return (
    <div className="About">
      <div className="header_title">
        <h1>Hakkımızda</h1>
      </div>
      <AboutSection1 />
      <AboutSection2 />
      <AboutSection3 />
      <Footer />
    </div>
  );
}

export default About;
