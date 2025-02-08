
// eslint-disable-next-line react/prop-types
const BlogCard = ({bhead,image}) => {
  return (
    <div className="  bg-white rounded-2xl pb-6 shadow-3xl ">
      <img src={image} alt="blog" className="rounded-2xl  " />
      <div className="flex flex-col gap-10 py-4 px-2">
        <h1 className=" text-lg text-center md:text-left md:text-lg font-semibold">
          {bhead}
        </h1>

        <button className="py-3 px-4 w-full md:w-1/2 mx-auto border  rounded-xl cursor-pointer">
          Read More
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
