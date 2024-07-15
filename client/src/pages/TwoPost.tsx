import React from "react";
import Banner from "../components/Service/Banner";
import Cards from "../components/Service/Cards";
import { TwopostData } from "../data/ServiceData";
import { Helmet } from "react-helmet-async";
import { TwopostPageData as metaTags } from "../data/Metatags";

const TwoPost = () => {
  return (
    <>
      <Helmet>
        <title>{metaTags.title}</title>
        <meta name="description" content={metaTags.description} />
        <meta name="keywords" content={metaTags.keywords} />
        <link rel="canonical" href={metaTags.canonical} />
      </Helmet>
      {TwopostData.map((item, index) => (
        <div key={index}>
          <Banner
            imgSrc={item.banner}
            mainTitle={item.title}
            cnt1={item.cnt1}
            cnt2={item.cnt2}
          />
          <Cards card1={item.card_1} card2={item.card_2} card3={item.card_3} />
        </div>
      ))}
    </>
  );
};

export default TwoPost;
