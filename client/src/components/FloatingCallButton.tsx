import React from "react";
import { Link } from "react-router-dom";

const handleWhatsApp = () => {
  // Add your call functionality here
  // For example, you can use window.open() to open the phone app with a number
  window.open('https://wa.me/7200030862?text=Hi%20I%20need%20details%20about%20');
};

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-20 right-4 z-10">
      <Link
        to="https://api.whatsapp.com/send?phone=7200030862" target="_blank"
        className="block w-8  bg-green-500 rounded-full  items-center justify-center mb-4  shadow-md hover:bg-green-600">
        <img src="/Whatsapp.png" className="w-8" alt="WhatsApp" onClick={handleWhatsApp}/>
      </Link>
      <Link
        to="tel:+919340012200"
        className="block w-8 bg-blue-500 rounded-full  items-center justify-center shadow-md hover:bg-blue-600"
      >
        <img src="/telephone.png" className="w-8" alt="Call" />
      </Link>
    </div>
  );
};

export default FloatingButtons;
