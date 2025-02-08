import BlogCard from "./BlogCard"
import { Blog } from "../../../utils/constant"

const Blogs = () => {
  return (
    <>
      <div className="w-full bg-blue-100  rounded-2xl py-10 px-5">
           <h1 className="text-black text-3xl text-center">Trending <span className="font-semibold">Insights & Blogs </span> </h1>
           <div
          
           className="w-52 lg:w-76 p-1 bg-gradient-to-r rounded-xl mx-auto mt-2"
           style={{
             background:
               "linear-gradient(135deg, var(--color-blue) 15%, var(--color-lightBlue) 35%, var(--color-pink) 65%, var(--color-violet) 100%)",
           }}
         ></div>
         <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  gap-10 px-2 py-5 lg:px-10 lg:py-10">
            {
                Blog.map((item)=>(
                    <BlogCard key={item?.id} bhead={item?.heading} image={item?.img}/>
                ))
            }
         
          
          
         </div>
          
      </div>
    </>
  )
}

export default Blogs
