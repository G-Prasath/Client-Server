import React from "react";
import Videobanner from "../components/Videos/Videobanner";
import Videogrid from "../components/Videos/Videogrid";
import { Helmet } from "react-helmet-async";
import { GalleryPageData as metaTags } from "../data/Metatags";

const Videogallery = () => {
  return (
    <div>
      <Helmet>
        <title>{metaTags.title}</title>
        <meta name="description" content={metaTags.description} />
        <meta name="keywords" content={metaTags.keywords} />
        <link rel="canonical" href={metaTags.canonical} />
      </Helmet>
      <Videobanner />
      <Videogrid />
    </div>
  );
};

export default Videogallery;
