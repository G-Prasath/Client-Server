import React from "react";
import { blogData } from "../../data/BlogData"; // Assuming blogData is imported correctly

const BlogCard = ({ imageSrc, title, event, date, link }) => {
  return (
    <>
    <div
    data-aos="zoom-in-down"
    data-aos-easing="ease-out-cubic"
    data-aos-duration="700"
     className="relative bg-card rounded-lg overflow-hidden">
      <img src={imageSrc} alt={title} className="w-full h-auto" />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent text-white">
        <div className="p-4 max-md:p-1 max-lg:p-1 bg-dark_gray bg-opacity-55 mb-5 max-md:mb-2">
          <h2 className="text-lg font-bold max-md:text-xs max-lg:text-xs">{title}</h2>
          <p className="text-sm max-md:text-xs max-lg:text-xs">{event}</p>
          <p className="text-xs">{date}</p>
        </div>
        <a href={link} className="bg-primary bg-opacity-85 mt-3 hover:text-white font-semibold py-2 px-10 max-md:px-2 max-md:py-1 max-lg:px-2 max-lg:py-1 w-full rounded-tr-lg shadow">
          Read More
        </a>
      </div>
    </div>
    </>
  );
};

const BlogMain = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-20">
      
      {blogData.map((entry, index) => (
        <BlogCard
          key={index}
          imageSrc={entry.imageSrc}
          title={entry.title}
          event={entry.event}
          date={entry.date}
          link={entry.link} // Pass the link from JSON data to BlogCard component
        />
      ))}
    </div>
  );
};

export default BlogMain;
