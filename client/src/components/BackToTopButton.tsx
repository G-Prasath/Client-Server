import React, { useState, useEffect } from "react";
// import '../assets/css/styles.css';

const BackToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when user scrolls down 3 blocks
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-5 right-4 z-10">
      <div
        className={`back-to-top-button ${isVisible ? "show" : "hide"} cursor-pointer`}
        onClick={scrollToTop}
      >
        <img src="/up-arrow.png" alt="Home" className="w-8" />
      </div>
    </div>
  );
};

export default BackToTopButton;
