import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../images/logo varahi.png";
function Header({ setIsLoggedIn }) {
  const navigate = useNavigate();
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
            <Link to="/list">
              <button className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                View List
              </button>
            </Link>
            <button
              className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium"
              onClick={() => {
                setIsLoggedIn(false);
                navigate("/");
              }}
            >
              Logout
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
