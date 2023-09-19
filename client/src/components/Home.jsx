import HomeMain from "../partials/HomePartials/HomeMain";
import HomeAbout from "../partials/HomePartials/HomeAbout";
import HomeSection from "../partials/HomePartials/HomeSection";
import HomeSection2 from "../partials/HomePartials/HomeSection2";
import HomeContact from "../partials/HomePartials/HomeContact";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <HomeMain />
      <HomeAbout />
      <HomeSection />
      <HomeSection2 />
      <HomeContact />
      <Footer />
    </div>
  );
}

export default Home;
