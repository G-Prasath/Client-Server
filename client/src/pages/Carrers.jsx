import React from "react";
import Banner from "../components/Career/Banner";
import { Helmet } from "react-helmet-async";
import { CareerPageData as metaTags } from "../data/Metatags";


const Carrers = () => {
  return (
    <div>
      <Helmet>
        <title>{metaTags.title}</title>
        <meta name="description" content={metaTags.description} />
        <meta name="keywords" content={metaTags.keywords} />
        <link rel="canonical" href={metaTags.canonical} />
      </Helmet>
      <Banner />

      <h6 className="uppercase text-center font-[700] text-3xl mt-10 mb-5">
        Let's Grow Together
      </h6>

      <div className="flex justify-center items-center mt-10">
        <div className="bg-gray dark:bg-zinc-800 shadow-md rounded-lg p-8 max-w-4xl w-full">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  id="name"
                  className="mt-1 block w-full rounded-lg p-3 border-zinc-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white focus:outline-none"
                />
              </div>
              <div>
                <input
                  type="email"
                  id="email"
                  placeholder="E-Mail"
                  className="mt-1 block w-full rounded-lg p-3 border-zinc-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white focus:outline-none"
                />
              </div>
              <div>
                <input
                  type="number"
                  id="phone"
                  placeholder="Contact I.D"
                  className="mt-1 block w-full rounded-lg p-3 border-zinc-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white focus:outline-none"
                />
              </div>
              <div>
                <select
                  id="subject"
                  className="mt-1 block w-full rounded-lg p-3 border-zinc-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white focus:outline-none"
                >
                  <option value>Profession</option>
                  <option value={"Value"}>Value</option>
                  <option value={"Value"}>Value</option>
                  <option value={"Value"}>Value</option>
                  <option value={"Value"}>Value</option>
                </select>
              </div>
            </div>
            <div className="flex items-center bg-white rounded-lg">
              <input
                type="file"
                id="pdf"
                accept="application/pdf"
                className="hidden"
                onChange={(e) => {
                  const fileName = e.target.files[0].name;
                  document.getElementById("file-name").textContent = fileName;
                }}
              />
              <label
                htmlFor="pdf"
                className="mt-1 block w-full rounded-lg p-3 border-zinc-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white focus:outline-none cursor-pointer"
              >
                Upload File
                <span
                  id="file-name"
                  className="ml-2 text-sm text-gray-500"
                ></span>
              </label>
            </div>
            <div>
              <textarea
                id="message"
                rows="5"
                placeholder="Message"
                className="mt-1 pl-2 pt-2 block w-full rounded-lg border-zinc-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white focus:outline-none"
              ></textarea>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="button relative overflow-hidden h-12 px-8 rounded-full bg-primary text-white border-none cursor-pointer"
              >
                <span className="button-content relative z-10">
                  Submit Request
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Carrers;
