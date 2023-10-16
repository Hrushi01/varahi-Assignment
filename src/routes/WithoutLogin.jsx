import React from "react";
import { Route, Routes } from "react-router-dom";
import Decide from "../Decide";
import Login from "../login/Login";
import Register from "../login/Register";

function WithoutLogin({
  setIsLoggedIn,
  setStatus,
  status,
  data,
  setData,
  registerData,
  setRegisterData,
  loginData,
  setLoginData,
}) {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Decide setStatus={setStatus} />} />
        <Route path="/decide" element={<Decide setStatus={setStatus} />} />
        <Route
          path="/admin-Login"
          element={
            <Login
              status={status}
              setIsLoggedIn={setIsLoggedIn}
              loginData={loginData}
              setLoginData={setLoginData}
            />
          }
        />
        <Route
          path="/user-Login"
          element={
            <Login
              status={status}
              setIsLoggedIn={setIsLoggedIn}
              loginData={loginData}
              setLoginData={setLoginData}
            />
          }
        />
        <Route
          path="/register"
          element={
            <Register
              status={status}
              data={data}
              setData={setData}
              setIsLoggedIn={setIsLoggedIn}
              registerData={registerData}
              setRegisterData={setRegisterData}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default WithoutLogin;
