import React from "react";
import Aboutbanner from "../components/About/Aboutbanner";
import Aboutsec from "../components/About/Aboutsec";
import Ourteam from "../components/About/Ourteam";
import Officeimg from "../components/About/Officeimg";
import { Helmet } from "react-helmet-async";
import { AboutPageData as metaTags } from "../data/Metatags";

const About = () => {
  
  return (
    <>

      <Helmet>
        <title>{metaTags.title}</title>
        <meta name="description" content={metaTags.description} />
        <meta name="keywords" content={metaTags.keywords} />
        <link rel="canonical" href={metaTags.canonical} />
      </Helmet>

      <Aboutbanner />
      <Aboutsec />
      {/* <Ourteam /> */}
      <Officeimg />
    </>
  );
};

export default About;
