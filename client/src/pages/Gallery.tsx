import React from "react";
import Banner from "../components/Gallery/Banner";
import Compltedproject from "../components/Gallery/Compltedproject";
import Ongoingproject from "../components/Gallery/Ongoingproject";
import { Helmet } from "react-helmet-async";
import { GalleryPageData as metaTags } from "../data/Metatags";

const Gallery = () => {
  return (
    <div>
      <Helmet>
        <title>{metaTags.title}</title>
        <meta name="description" content={metaTags.description} />
        <meta name="keywords" content={metaTags.keywords} />
        <link rel="canonical" href={metaTags.canonical} />
      </Helmet>
      <Banner />
      <Compltedproject />
      <Ongoingproject />
    </div>
  );
};


export default Gallery;
