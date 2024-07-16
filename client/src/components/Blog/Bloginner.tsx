import React from "react";
import { Link } from "react-router-dom";
import { innerData } from "../../data/BlogData"; // Adjust the path as necessary

const Bloginner = () => {
  const { mainPost, sidePosts } = innerData;

  return (
    <div>
      <div className="max-w-7xl mx-auto p-4">
        <h2 className="text-2xl font-bold mb-6">Recent blog posts</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 flex flex-col md:flex-row items-start">
            <div>
              <img
                src={mainPost.image}
                alt={mainPost.alt}
                className="w-full rounded-lg mb-4 md:mb-0 md:mr-4"
              />
              <p className="text-sm text-muted-foreground mt-5">
                {mainPost.author} • {mainPost.date}
              </p>
              <h3 className="text-xl font-semibold mt-2">{mainPost.title}</h3>
              <p className="mt-2 text-muted-foreground text-justify mb-7">
                {mainPost.content}
              </p>
              <div className="mt-4 flex space-x-2">
                {mainPost.tags.map((tag, index) => (
                  <Link
                    key={index}
                    to="/contact-us"
                    className="bg-primary text-white max-sm:text-sm max-sm:text-[9px] px-2 py-1 rounded"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {sidePosts.map((post, index) => (
              <div key={index} className="flex items-start space-x-4">
                <img
                  src={post.image}
                  alt={post.alt}
                  className="w-24 h-24 object-cover rounded-lg"
                />
                <div>
                  <p className="text-sm text-muted-foreground">
                    {post.author} • {post.date}
                  </p>
                  <h4 className="text-lg font-semibold mt-1">{post.title}</h4>
                  <div className="mt-2 flex space-x-2">
                    {post.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-secondary text-secondary-foreground px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bloginner;
