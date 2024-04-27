import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { BsCashCoin } from "react-icons/bs";
import { MdEdit } from "react-icons/md";
import { ImBin2 } from "react-icons/im";
import bg from "../assets/mycrafitem.svg";
import { FaStar } from "react-icons/fa";

const MyCraftItem = () => {
  const { user } = useContext(AuthContext);
  const craftItems = useLoaderData();
  let craftData = []; // Declare craftData outside the if block

  if (user) {
    craftData = craftItems.filter((item) => item.user_email === user.email);
  }
  console.log(craftItems);
  console.log(craftData.length);
  return (
    <div>
      <div
        style={{
          backgroundImage:
            "url(https://i.postimg.cc/bwT9t6Kg/293032355-489598309833569-7450587253101489347-n.jpg)",
        }}
        className="bg-cover bg-center text-[#fff] capitalize text-5xl font-bold p-20  "
      >
        My craft items
      </div>
      {craftData.length !== 0 ? (
        <div>
          {user ? (
            <div>
              {craftData ? (
                <div>
                  <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-3 grid-cols-1 container m-auto p-10 ">
                    {craftData.map((singleCraftItem, i) => (
                      <div
                        key={i}
                        className="relative flex  flex-col rounded-xl bg-[#0a080885] bg-clip-border text-white shadow-md mt-10  "
                      >
                        {singleCraftItem.stock_status === "In Stock" ? (
                          <div className="absolute bg-yellow-300 left-10 text-black font-bold p-2 rounded-lg z-50">
                            In Stock
                          </div>
                        ) : (
                          ""
                        )}
                        <div
                          className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r bg-cover bg-no-repeat bg-center"
                          style={{
                            backgroundImage: `url(${singleCraftItem.image_url})`,
                          }}
                        ></div>
                        <div className="p-6">
                          <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                            {singleCraftItem.item_name}
                          </h5>
                          <div className="flex justify-between font-bold">
                            <p className="flex gap-1 items-center">
                              <BsCashCoin className="text-green-600" /> Price:{" "}
                              {singleCraftItem.price} tk{" "}
                            </p>
                            <p className="flex gap-1 items-center">
                              <FaStar className="text-orange-400" />
                              Ratin: {singleCraftItem.rating}{" "}
                            </p>
                          </div>
                          <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                            {singleCraftItem.short_description.length > 100
                              ? singleCraftItem.short_description.substring(
                                  0,
                                  100
                                ) + "..."
                              : singleCraftItem.short_description}
                          </p>
                        </div>
                        <div className="p-6 pt-0 caret-lime-50 flex justify-between">
                          <button
                            data-ripple-light="true"
                            type="button"
                            className="btn border-none bg-[#e4c49e]  font-bold hover:bg-[#e4c49e93]"
                          >
                            View Details
                          </button>
                          <div className="space-x-3">
                            <button className="btn rounded-full text-xl bg-gray-700 text-white border-none font-bold hover:bg-gray-500">
                              <MdEdit />
                            </button>
                            <button className="btn rounded-full text-xl bg-error text-white border-none font-bold hover:bg-gray-500">
                              <ImBin2 />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className=" min-h-screen flex items-center justify-center">
                  <span className="h-16 w-16 loading loading-spinner text-warning"></span>
                </div>
              )}
            </div>
          ) : (
            <div className=" min-h-screen flex items-center justify-center">
              <span className="h-16 w-16 loading loading-spinner text-warning"></span>
            </div>
          )}
        </div>
      ) : (
        <div>
          {" "}
          <div
            className="min-h-screen bg-no-repeat bg-cover flex flex-col items-center justify-center text-5xl font-bold dark:text-white text-center gap-3  "
            style={{ backgroundImage: `url(${bg})` }}
          >
            {" "}
            <p className="text-5xl font-bold dark:text-white text-center">You still have not added anything.</p>
            <button className="btn border-none bg-gray-800 text-white">Add craft item</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyCraftItem;
