
import Works from "../Pages/Home/Works/Works";
import Navbar from "../Shared/Navbar/Navbar";
import PageNav from "../Shared/PageNav/PageNav";

const MainLayout = () => {
  return (
    <div className="bg-[#0F172A]">
      <Navbar />

      <Works />

      <PageNav />

    </div>
  );
};

export default MainLayout;
