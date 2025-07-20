// Components
import Tools from "./Tools/Tools";
import AboutMe from "./AboutMe/AboutMe";
import MyServices from "./MyServices/MyServices";
import WhyHireMe from "./WhyHireMe/WhyHireMe";
import Testimonials from "./Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <AboutMe id="about-me" />

      <MyServices id="my-services" />

      {/* <Tools id="tools" /> */}

      {/* <WhyHireMe id="why-hire-me" /> */}

      {/* <Testimonials id="testimonials" /> */}
    </div>
  );
};

export default Home;
