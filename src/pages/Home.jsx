import React from "react";
import HeaderU from "../components/HeaderUser";
import HeaderA from "../components/HeaderAdmin";

function Home({ status }) {
  return (
    <div className="bg-gray-100 min-h-screen">
      {status === "Admin" ? (
        <HeaderA />
      ) : status === "User" ? (
        <HeaderU />
      ) : (
        <></>
      )}

      <div className="container mx-auto py-8 text-center">
        <h1 className="text-3xl font-semibold text-gray-800 mb-4">
          Welcome to "{status}" Homepage
        </h1>
        <p className="text-lg text-gray-600">
          This is the landing page of our application.
        </p>
      </div>
    </div>
  );
}

export default Home;
