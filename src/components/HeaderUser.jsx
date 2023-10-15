import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo varahi.png";
function Header() {
  return (
    <div className="marginLeftZero">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="space-x-3 flex items-center">
            <img className="h-12 w-auto" src={Logo} alt="Varahi logo" />
          </div>
          <div>
            <Link to="/dashboard">
              <button className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                Dashboard
              </button>
            </Link>
            <Link to="/profile">
              <button className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                View Profile
              </button>
            </Link>
            <Link to="/updateuser">
              <button className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                Update Profile
              </button>
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
