import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./admin/Dashboard";
import Profile from "./user/Profile";
import Home from "./pages/Home";
import UpdateData from "./user/UpdateData";
import List from "./admin/List";

function WithLogin({
  setIsLoggedIn,
  setStatus,
  status,
  data,
  setData,
  profileData,
  setProfileData,
  adminData,
  setAdminData,
}) {
  return (
    <div>
      {status === "Admin" ? (
        <>
          <Routes>
            <Route path="/" element={<Home status={status} />} />
            <Route
              path="/dashboard"
              element={
                <Dashboard
                  status={status}
                  adminData={adminData}
                  setAdminData={setAdminData}
                />
              }
            />
            <Route
              path="/list"
              element={
                <List adminData={adminData} setAdminData={setAdminData} />
              }
            />
          </Routes>
        </>
      ) : status === "User" ? (
        <>
          <Routes>
            <Route path="/" element={<Home status={status} />} />
            <Route
              path="/dashboard"
              element={<Dashboard profileData={profileData} />}
            />
            <Route
              path="/profile"
              element={<Profile status={status} profileData={profileData} />}
            />
            <Route
              path="/updateuser"
              element={
                <UpdateData
                  status={status}
                  profileData={profileData}
                  setProfileData={setProfileData}
                />
              }
            />
          </Routes>
        </>
      ) : (
        <>Go Back And Select A user type</>
      )}
    </div>
  );
}

export default WithLogin;
