import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SKILLLINK_SERVICES, serviceSlider } from "../../../utils/constant";
import { IoMdArrowBack } from "react-icons/io";
import { IoMdArrowForward } from "react-icons/io";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const sliderRef = useRef(null);

  return (
    <>
      <div className="w-full lg:flex gap-4">
        <h1 className="w-full lg:w-1/2 mb-4 lg:mb-0 text-xl sm:text-3xl lg:text-3xl text-center lg:text-left font-semibold lg:font-bold">
          Connecting Ambitions To Opportunities, Shaping Futures
        </h1>
        <div className="w-full lg:w-1/2">
          <h4 className="text-[var(--color-blue)] text-center md:text-left text-xl font-semibold mb-3">
            Services
          </h4>
          <p className="text-md text-center md:text-left md:text-lg text-zinc-400">
            {SKILLLINK_SERVICES}
          </p>
        </div>
      </div>
      <hr className="border-1 border-zinc-400 w-full" />

      <div className="relative w-full">
        <div className="flex justify-between items-center absolute top-1/2 left-0 right-0 transform -translate-y-1/2 z-10">
          <button
            className="bg-[var(--color-blue)] hidden md:block text-white p-3 rounded-full cursor-pointer hover:bg-gray-800"
            onClick={() => sliderRef.current.slickPrev()}
          >
            <IoMdArrowBack />
          </button>
          <button
            className="bg-[var(--color-blue)] hidden md:block text-white p-3 rounded-full cursor-pointer hover:bg-blue-700"
            onClick={() => sliderRef.current.slickNext()}
          >
            <IoMdArrowForward />
          </button>
        </div>

        
        <div className="slider-container w-full px-12">
       
         
          <Slider ref={sliderRef} {...serviceSlider}>
            {Array.from({ length: 8 }).map((_, i) => (
            //   <div key={i} className="bg-red-400 p-10">
            //     <h3>{i + 1}</h3>
            //   </div>
            <ServiceCard key={i}/>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Services;
