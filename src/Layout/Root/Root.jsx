import { Outlet } from "react-router-dom";
import Navber from "../../Components/Navber";
import { Toaster } from "react-hot-toast";

const Root = () => {
  return (
    <div className="Montserrat dark:bg-[#322C2B] min-h-screen  duration-500  ">
      <Toaster position="top-center" reverseOrder={false} />
      <Navber />
      <Outlet />
    </div>
  );
};

export default Root;
