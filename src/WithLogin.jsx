import React from "react";
import { Route, Routes } from "react-router-dom";
import DashboardA from "./admin/Dashboard";
import DashboardU from "./user/Dashboard";
import Profile from "./user/Profile";
import Home from "./pages/Home";
import UpdateData from "./user/UpdateData";
import List from "./admin/List";
import ListUpdate from "./admin/ListUpdate";

function WithLogin({
  setIsLoggedIn,
  setStatus,
  status,

  profileData,
  setProfileData,
  adminData,
  setAdminData,
  selectuser,
  setSelectUser,
}) {
  return (
    <div>
      {status === "Admin" ? (
        <>
          <Routes>
            <Route
              path="/"
              element={<Home status={status} setIsLoggedIn={setIsLoggedIn} />}
            />
            <Route
              path="/dashboard"
              element={
                <DashboardA
                  status={status}
                  adminData={adminData}
                  setAdminData={setAdminData}
                  setIsLoggedIn={setIsLoggedIn}
                />
              }
            />
            <Route
              path="/list"
              element={
                <List
                  adminData={adminData}
                  setAdminData={setAdminData}
                  selectuser={selectuser}
                  setSelectUser={setSelectUser}
                  setIsLoggedIn={setIsLoggedIn}
                />
              }
            />
            <Route
              path="/update-list-user"
              element={
                <ListUpdate
                  selectuser={selectuser}
                  setSelectUser={setSelectUser}
                  adminData={adminData}
                  setAdminData={setAdminData}
                  setIsLoggedIn={setIsLoggedIn}
                />
              }
            />
          </Routes>
        </>
      ) : status === "User" ? (
        <>
          <Routes>
            <Route
              path="/"
              element={<Home status={status} setIsLoggedIn={setIsLoggedIn} />}
            />
            <Route
              path="/dashboard"
              element={
                <DashboardU
                  profileData={profileData}
                  setIsLoggedIn={setIsLoggedIn}
                />
              }
            />
            <Route
              path="/profile"
              element={
                <Profile
                  status={status}
                  profileData={profileData}
                  setIsLoggedIn={setIsLoggedIn}
                />
              }
            />
            <Route
              path="/updateuser"
              element={
                <UpdateData
                  status={status}
                  profileData={profileData}
                  setProfileData={setProfileData}
                  setIsLoggedIn={setIsLoggedIn}
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
