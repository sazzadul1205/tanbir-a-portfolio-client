import AboutMe from "./AboutMe/AboutMe";
import MyServices from "./MyServices/MyServices";
import Tools from "./Tools/Tools";

const Home = () => {
  return (
    <div>
      <AboutMe id="about-me" />

      <MyServices id="my-services" />

      <Tools id="tools" />
    </div>
  );
};

export default Home;
