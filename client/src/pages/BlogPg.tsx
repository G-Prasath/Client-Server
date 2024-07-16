import React from "react";
import BlogMain from "../components/Blog/BlogMain";

const BlogPg = () => {
  return (
    <div>
      <div className="w-full aspect-[16/9]">
        <img src="/banner/blog.webp" alt="Banner" className="w-full h-full" />
      </div>
      <h1 className="uppercase text-center font-[700] text-3xl mt-10 mb-5">
        Blog
      </h1>
      <BlogMain />

    </div>
  );
};

export default BlogPg;
