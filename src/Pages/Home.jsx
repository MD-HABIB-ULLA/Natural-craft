// import bg from "../assets/bg.svg"

import { Navigation, A11y, Autoplay } from "swiper/modules";
import { BsCashCoin } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaStar } from "react-icons/fa";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Link, useLoaderData } from "react-router-dom";

const Home = () => {
  const craftData = useLoaderData();
  console.log(craftData);
  return (
    <>
      <div>
        {/* swiper */}
        <div className=" w-full md:px-10 px-3 mt-3 h-[70vh]  mb-10">
          {" "}
          <Swiper
            // install Swiper modules
            modules={[Navigation, Autoplay, A11y]}
            spaceBetween={0}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000 }}
            loop
            onSwiper={(swiper) => {}}
            onSlideChange={() => {}}
            className="rounded-lg h-full w-full"
          >
            <SwiperSlide className="bg-rose-100 w-full">
              <div className="h-full w-full">
                <div
                  className=" hero w-full justify-start bg-gray-500 h-full"
                  style={{
                    backgroundImage:
                      "url(https://previews.123rf.com/images/abdulbatin/abdulbatin2207/abdulbatin220700179/189583231-one-farmers-in-bangladesh-are-cutting-down-jute-trees-and-putting-them-in-a-pile-farmers-in-jute.jpg)",
                  }}
                >
                  <div className="hero-overlay  bg-transparent bg-gradient-to-r from-[#1a0303f6]"></div>
                  <div className="md:ml-10 ml-5 hero-content text-left text-neutral-content ">
                    <div className="">
                      <h1 className="mb-5 md:text-5xl text-3xl font-bold w-full">
                        The Environmental Benefits of <br /> Jute & Wooden
                        Crafts
                      </h1>
                      <p className="mb-5 md:w-1/2">
                        Jute and wood are natural, biodegradable materials,
                        making them eco-friendly choices for crafting. Unlike
                        synthetic materials, they do not contribute to pollution
                        or harm the environment.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="bg-rose-100 w-full">
              <div className="h-full w-full">
                <div
                  className=" hero w-full bg-cover justify-start bg-gray-500 h-full"
                  style={{
                    backgroundImage:
                      "url(https://i.ibb.co/v38X1bV/jute-5973747-1280.jpg)",
                  }}
                >
                  <div className="hero-overlay  bg-transparent bg-gradient-to-r from-[#1a0303f6]"></div>
                  <div className="md:ml-10 ml-5 hero-content text-left text-neutral-content ">
                    <div className="">
                      <h1 className="mb-5 md:text-5xl text-3xl font-bold w-full h-full ">
                        The Promise of Renewable Resources <br /> in Jute &
                        Wooden Crafts
                      </h1>
                      <p className="mb-5 md:w-1/2">
                        Jute and wood are renewable resources that can be
                        harvested sustainably. This means that they can be
                        replenished naturally over time, reducing the strain on
                        natural ecosystems.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="bg-rose-100 w-full h-full">
              <div className="h-full w-full">
                <div
                  className=" hero  w-full bg-cover justify-start bg-gray-500 h-full"
                  style={{
                    backgroundImage:
                      "url(https://i.ibb.co/pnc4w6y/wood-logs-stacked-1033323868-389e301792e049ef8d83caec6765bb5e.webp)",
                  }}
                >
                  <div className="hero-overlay  bg-transparent bg-gradient-to-r from-[#1a0303f6]"></div>
                  <div className="md:ml-10 ml-5 hero-content text-left text-neutral-content ">
                    <div className="">
                      <h1 className="mb-5 md:text-5xl text-3xl font-bold w-full h-full ">
                        The Enduring Durability of <br /> Jute & Wooden Crafts
                      </h1>
                      <p className="mb-5 md:w-1/2">
                        Jute and wood are known for their durability and
                        strength. Crafts made from these materials are
                        long-lasting and resistant to wear and tear, making them
                        practical and sustainable choices for everyday use.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        {/* craft Items section */}

        <div className="bg-[#80808086] pb-10">
          <div>
            <h1 className=" duration-500 text-center text-5xl py-10 font-bold dark:text-white  ">
              Cr
              <span className="border-b-4 dark:border-white border-black">
                aft Ite
              </span>
              ms{" "}
            </h1>
          </div>
          {craftData ? (
            <div>
              <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-3 grid-cols-1 container m-auto p-10 ">
                {craftData.slice(0, 6).map((singleCraftItem, i) => (
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
                    <div className="p-6 pt-0">
                      <button
                        data-ripple-light="true"
                        type="button"
                        className="btn border-none bg-[#e4c49e]  font-bold hover:bg-[#e4c49e93]"
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <div className=" text-center ">
                <Link
                  to="allcraftitems"
                  className=" btn border-none bg-[#e4c49e]  font-bold hover:bg-[#e4c49e93]"
                >
                  {" "}
                  See More{" "}
                </Link>
              </div>
            </div>
          ) : (
            <div className=" min-h-screen flex items-center justify-center">
              <span className="h-16 w-16 loading loading-spinner text-warning"></span>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
