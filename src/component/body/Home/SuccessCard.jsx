import p1 from "../../../assets/p1.png";

const SuccessCard = () => {
  return (
    <div className=" lg:max-w-full xl:max-w-[650px] bg-white flex flex-col md:flex-row gap-0 md:gap-4 rounded-xl shadow-xl">
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center gap-4 py-6 ">
        <img src={p1} alt="p1" className="rounded-full" />
        <p className="text-lg md:text-xl text-[var(--color-blue)] font-semibold">
          Marry Welsom
        </p>
        <p className=" text-sm md:text-lg text-black">
          Founder and CEO OF PREMIUM
        </p>
        <div className="rating">
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
            defaultChecked
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
        </div>
      </div>
      <div className="w-full md:w-1/2 p-2 md:p-4">
        <h2 className="text-sm md:text-lg text-center ">
          <span className="text-2xl ">❝</span>Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ecommodo consequat.
          Duis aute irure dolor in reprehenderit{" "}
          <span className="text-2xl">❞</span>
        </h2>
      </div>
    </div>
  );
};

export default SuccessCard;
