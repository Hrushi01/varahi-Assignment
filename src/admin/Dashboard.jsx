import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/HeaderAdmin";
import { Button } from "@mui/material";

function Dashboard({ adminData }) {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <div className="flex items-center justify-center mt-5">
        <div className="bg-white p-6 rounded-lg shadow-xl text-center w-96">
          <h1 className="text-3xl font-semibold text-gray-800 mb-4">
            Welcome, <span className="text-blue-600">{adminData.fname}!</span>
          </h1>
          <div className="flex justify-center">
            <Link to="/list">
              <Button type="submit" variant="contained" size="large">
                {" "}
                View List
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
