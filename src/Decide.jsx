import React from "react";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";

import student from "./images/1.png";
import admin from "./images/2.png";

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";

function Decide(props) {
  const { setStatus } = props;
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  useEffect(() => {
    fetch("https://api.quotable.io/random")
      .then((response) => response.json())
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <div className=" max-w-7xl mx-auto pb-20 pt-12 px-4 sm:px-6 lg:px-8 ">
        <h1 className="text-3xl font-bold text-gray-900 bg-slate-200 items-center flex justify-center p-2 rounded-lg">
          Select Your Role Type
        </h1>

        <div className="mt-6 grid grid-cols-2  gap-6 sm:grid-cols-2">
          <div className="flex items-center justify-center bg-white shadow-xl rounded-lg">
            <Link to="/admin-login">
              <Button
                type="button"
                className="flex items-center justify-center space-x-2 text-lg font-medium text-gray-900 hover:text-gray-700 py-3"
                onClick={() => {
                  setStatus("admin");
                }}
              >
                <img src={admin} alt="admin" className="w-20 h-20" />
                <span>Admin</span>
              </Button>
            </Link>
          </div>
          <div className="flex items-center justify-center bg-white shadow-xl rounded-lg">
            <Link to="/user-login">
              <Button
                type="button"
                className="flex items-center justify-center space-x-2 text-lg font-medium text-gray-900 hover:text-gray-700 py-3"
                onClick={() => {
                  setStatus("user");
                }}
              >
                <img src={student} alt="user" className="w-20 h-20" />
                <span>User</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className=" h-full mx-auto max-w-lg text-center">
        {quote && (
          <>
            <div className="text-center font-bold inline text-xl">
              A Small Quote for you!!{" "}
            </div>
            <div className="text-center font-bold  "> "{quote}"</div>
          </>
        )}
        {author && <p className="text-center">~ {author}</p>}
      </div>
    </div>
  );
}

export default Decide;
