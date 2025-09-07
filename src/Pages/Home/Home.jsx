// Components
import Cards from "./Cards/Cards";
import Tools from "./Tools/Tools";
import AboutMe from "./AboutMe/AboutMe";
import WhyHireMe from "./WhyHireMe/WhyHireMe";
import MyServices from "./MyServices/MyServices";
import Testimonials from "./Testimonials/Testimonials";

const Home = () => {
  return (
    <div className="text-white">
      <AboutMe id="about-me" />

      <MyServices id="my-services" />

      <Tools id="tools" />

      <WhyHireMe id="why-hire-me" />

      <Testimonials id="testimonials" />

      <Cards id="blogs" />
    </div>
  );
};

export default Home;
