import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/HeaderUser";

const Dashboard = ({ profileData }) => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <div className="container mx-auto flex items-center justify-center h-72">
        <div className="bg-white p-6 rounded-lg shadow-xl text-center w-96">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Welcome, {profileData.fname}!
          </h1>
          <div className="flex justify-around">
            <Link to="/profile">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">
                View Profile
              </button>
            </Link>
            <Link to="/updateuser">
              <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-300">
                Update Profile
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
