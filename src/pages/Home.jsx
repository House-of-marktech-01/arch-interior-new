import GallerySlider from "../components/GallerySlider";
import HomeHero from "../components/HomeHero";
import Schedule from "../components/Schedule";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <div>
      <HomeHero />
      <GallerySlider/>
      <Schedule/>
      <Testimonials/>
    </div>
  );
};

export default Home;
