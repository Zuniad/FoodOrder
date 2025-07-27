import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="banner">
          <div className="left">ZEESHU</div>
          <div className="right">
            <p>Z6 Gulshan-e-Maymar, Karachi</p>
            <p>Open: 05:00 PM - 12:00 AM</p>
          </div>
        </div>

        <div className="banner">
          <div className="left">
            <p>Developed By CODEWITHZEESHU</p>
          </div>
          <div className="right">
            <p>All Rights Reserved By CodeWithZeeshu.</p>
          </div>
        </div>

        {/* ✅ New Button */}
        <div className="show-reservations text-center mt-4">
          <Link to="/reservations">
            <button className="px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
              Show All Reservations
            </button>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
