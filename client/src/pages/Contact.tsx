import React from "react";
import Banner from "../components/Contact/Banner";
import Form from "../components/Contact/Form";
import { Helmet } from "react-helmet-async";
import { ContactusPageData as metaTags } from "../data/Metatags";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>{metaTags.title}</title>
        <meta name="description" content={metaTags.description} />
        <meta name="keywords" content={metaTags.keywords} />
        <link rel="canonical" href={metaTags.canonical} />

      </Helmet>
      <Banner />
      <Form />
    </>
  );
};

export default Contact;
