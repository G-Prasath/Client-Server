import "./navbar.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";
import { RiArrowDownSLine } from "react-icons/ri";
import { useState } from "react";
import React from "react";
import { Navlinks } from "../../data/HomeData";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [subMenuOpen, setSubMenuOpen] = useState(false);

  const toggleSubMenu = () => {
    setSubMenuOpen(!subMenuOpen);
  };

  const [isActive, setIsActive] = useState("Home");

  return (
    <div className="sticky top-0 left-0 z-[9999]">
      <header className="header">
        <nav className="nav nav_container">
          <div className="nav__data">
            <Link to="/" className="nav__logo">
              <img src="/header_logo.png" alt="Home_Logo" />
            </Link>

            <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
              {isMenuOpen ? (
                <MdClose color="#000" fontSize={20} />
              ) : (
                <RxHamburgerMenu color="#000" fontSize={20} />
              )}
            </div>
          </div>
          <div
            className={isMenuOpen ? "nav__menu show-menu" : "nav__menu"}
            id="nav-menu"
          >
            <ul className="nav__list uppercase text-sm">
              <li
                className={`max-lg:border-b border-gray`}
                onClick={() => setIsActive("Home")}
              >
                <Link
                  to="/"
                  className={`nav__link ${
                    isActive === "Home" ? "text-primary" : "text-[#000]"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li onClick={() => setIsActive("About")}>
                <Link
                  to="/about-us"
                  className={`nav__link ${
                    isActive === "About" ? "text-primary" : "text-[#000]"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  About Us
                </Link>
              </li>

              {/*Products Nested Menu */}
              <li className="dropdown__item">
                <div className={`nav__link`} onClick={toggleSubMenu}>
                  Products
                  <RiArrowDownSLine
                    fontSize={20}
                    className={`${subMenuOpen ? "rotate-180" : ""}`}
                  />
                </div>

                <ul
                  className={`dropdown__menu ${subMenuOpen ? "" : "hide-menu"}`}
                >
                  {Navlinks.map((item, index) => (
                    <li key={index}>
                      <Link
                        to={item.link}
                        className="dropdown__link"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>

              {/*Library Nested Menu */}
              <li className="dropdown__item">
                <div className={`nav__link`} onClick={toggleSubMenu}>
                  Library
                  <RiArrowDownSLine
                    fontSize={20}
                    className={`${subMenuOpen ? "rotate-180" : ""}`}
                  />
                </div>

                <ul
                  className={`dropdown__menu ${subMenuOpen ? "" : "hide-menu"}`}
                >
                  <li onClick={() => setIsActive("Gallery")}>
                    <Link
                      to="/gallery"
                      className="dropdown__link"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Our Gallery
                    </Link>
                  </li>

                  <li onClick={() => setIsActive("Videos")}>
                    <Link
                      to="/videos"
                      className="dropdown__link"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Videos
                    </Link>
                  </li>

                  <li onClick={() => setIsActive("Blog")}>
                    <Link
                      to="/blogs"
                      className="dropdown__link"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Blog
                    </Link>
                  </li>
                </ul>
              </li>

              <li onClick={() => setIsActive("Contact")}>
                <Link
                  to="/contact-us"
                  className={`nav__link ${
                    isActive === "Contact" ? "text-primary" : "text-[#000]"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact us
                </Link>
              </li>

              <li onClick={() => setIsActive("Blogs")}>
                <Link
                  to="/careers"
                  className={`nav__link ${
                    isActive === "Blogs" ? "text-primary" : "text-[#000]"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Carrers
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
