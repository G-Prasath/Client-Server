import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
  FaLinkedin,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FooterData } from "../data/HomeData";
import FloatingButtons from "./FloatingCallButton";

const Footer = () => {
  return (
    <div>
      <div className="bg-footer_bg px-[5%]">
        <div className="container mx-auto max-md:mx-0 px-4 pb-10">
          <div className="max-md:mb-4 w-[100px]">
            <img
              src="/footer_logo.png"
              alt="Logo"
              className="mb-4 w-[100px] pt-10"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-5 max-lg:grid-cols-2 max-md:grid-cols-1">
            <div className="md:col-span-1">
              <h4 className="text-white mb-4 text-[22px] font-[600]">
                Factory-I :
              </h4>
              <ul className="text-gray-300 leading-7">
                <li className="my-2 text-[16px]">
                  <Link to="tel:9340012200" className="text-light_white">
                    Phone: +91 93400 12200
                  </Link>
                </li>
                <li className="my-2 text-[16px]">
                  <Link
                    to="mailto:carparking@estar.in"
                    className="text-light_white"
                  >
                    Email: carparking@estar.in
                  </Link>
                  <p className="my-2 text-[16px] text-light_white">
                    B/S Manawala Govt Hospital,
                    <br /> Amristar- 144115,
                    <br /> India.
                  </p>
                </li>
              </ul>
            </div>

            <div className="md:col-span-1">
              <h4 className="text-white mb-4 text-[22px] font-[600]">
                Factory-II :
              </h4>
              <ul className="text-gray-300 leading-7">
                <li className="my-2 text-[16px]">
                  <Link to="tel:7550044048" className="text-light_white">
                    Phone: +91 75500 44048
                  </Link>
                </li>
                <li className="my-2 text-[16px]">
                  <Link to="mailto:info@estar.in" className="text-light_white">
                    Email: info@estar.in
                  </Link>
                  <p className="my-2 text-[16px] text-light_white">
                    Periya Koladi Rd, Konrajakuppam,
                    <br /> Ayappakkam, Chennai-600 095,
                    <br /> India.
                  </p>
                </li>
              </ul>
            </div>

            {FooterData.map((item, index) => (
              <div key={index} className="md:col-span-1">
                <h4 className="text-white mb-4 text-[22px] font-[600]">
                  {item.title}
                </h4>
                <ul className="text-gray-300 leading-7">
                  {item.links.map((link, idx) => (
                    <li key={idx} className="my-2 text-[16px]">
                      <Link to={`${link.url}`} className="text-light_white">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-footer_dark_bg">
        <div className="container flex justify-between max-md:grid mx-auto p-3 max-sm:p-0">
          <h6 className="text-light_white text-[16px] font-[400] max-sm:text-[13px] ">
            &#169; Estar Engineers Pvt Ltd, All Rights Reservered 2024.
          </h6>
          <div className="flex max-md:pt-3 max-md:space-x-5 max-md:mx-auto">
            <Link to="#">
              <FaLinkedin className="text-2xl px-1 text-icon_color" />
            </Link>
            <Link to="#">
              <FaFacebookSquare className="text-2xl px-1 text-icon_color" />
            </Link>
            <Link to="#">
              <FaSquareXTwitter className="text-2xl px-1 text-icon_color" />
            </Link>
            <Link to="#">
              <FaInstagramSquare className="text-2xl px-1 text-icon_color" />
            </Link>
            <Link to="#">
              <FaYoutubeSquare className="text-2xl px-1 text-icon_color" />
            </Link>
          </div>
        </div>
      </div>
      <FloatingButtons />
    </div>
  );
};

export default Footer;
