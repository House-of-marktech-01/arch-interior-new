import AboutSection from "../components/AboutSection";
import FeaturedClients from "../components/FeaturedClients";
import GallerySlider from "../components/GallerySlider";
import HomeHero from "../components/HomeHero";
import Schedule from "../components/Schedule";
import Testimonials from "../components/Testimonials";
import Contact from "./Contact";

const Home = () => {
  return (
    <div>
      <HomeHero />
      <AboutSection/>
      <GallerySlider/>
      <Schedule/>
      <Testimonials/>
      <FeaturedClients/>
      <Contact/>
    </div>
  );
};

export default Home;
