// import bg from "../assets/bg.svg"

import { Navigation, A11y, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Home = () => {
  return (
    <>
      <div>
        <div className=" w-full md:px-10 px-3 mt-3 h-[70vh] ">
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
      </div>
    </>
  );
};

export default Home;
