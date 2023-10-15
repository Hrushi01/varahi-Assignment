import React from "react";
import Header from "../components/HeaderUser";
import { Button } from "@mui/material";
import { useNavigate } from "react-router";

const Profile = ({ status, profileData }) => {
  const navigate = useNavigate();
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <div className="container mx-auto flex items-center justify-center mt-11">
        <div className="bg-white p-6 rounded-lg shadow-xl w-96 text-center">
          <h2 className="text-3xl font-semibold text-blue-600 mb-4">
            User Profile
          </h2>
          <div className="text-left mb-4">
            <div className="grid grid-cols-1 gap-4">
              <div className="flex items-center justify-between border-b border-gray-300 py-2">
                <p className="text-gray-600 font-semibold">First Name:</p>
                <p className="text-blue-600 text-xl">{profileData.fname}</p>
              </div>
              <div className="flex items-center justify-between border-b border-gray-300 py-2">
                <p className="text-gray-600 font-semibold">Last Name:</p>
                <p className="text-blue-600 text-xl">{profileData.lname}</p>
              </div>
              <div className="flex items-center justify-between border-b border-gray-300 py-2">
                <p className="text-gray-600 font-semibold">Username:</p>
                <p className="text-blue-600 text-xl">{profileData.username}</p>
              </div>
              <div className="flex items-center justify-between py-2">
                <p className="text-gray-600 font-semibold">Role:</p>
                <p className="text-blue-600 text-xl">{profileData.role}</p>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <Button
              type="submit"
              variant="contained"
              size="large"
              onClick={() => {
                navigate("/updateuser");
              }}
            >
              Update Profile
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
