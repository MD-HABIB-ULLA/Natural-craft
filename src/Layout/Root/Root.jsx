import { Outlet } from "react-router-dom";
import Navber from "../../Components/Navber";
import { Toaster } from "react-hot-toast";
import Footer from "../../Components/Footer/Footer";
import { Tooltip } from "react-tooltip";

const Root = () => {
  return (
    <div className="Montserrat dark:bg-[#322C2B] min-h-screen  duration-500  ">
      <Toaster position="top-center" reverseOrder={false} />
      <Tooltip id="my-tooltip" />
      <Navber />
      <Outlet />
      <Footer/>
    </div>
  );
};

export default Root;
