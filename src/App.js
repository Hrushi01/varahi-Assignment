import Login from "./Login";
import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import WithLogin from "./WithLogin";
import WithoutLogin from "./WithoutLogin";

function App() {
  const [isLogged, setIsLoggedIn] = useState(true);
  const [status, setStatus] = useState("Admin");

  const [data, setData] = useState({
    password: "",
    username: "",
  });

  const [profileData, setProfileData] = useState({
    fname: "Hrushikesh",
    lname: "Ambike",
    password: "Hrushi@2",
    username: "User1Hrushi",
    role: "User",
  });
  const [registerData, setRegisterData] = useState({
    fname: "Hrushikesh",
    lname: "Ambike",
    password: "Hrushi@2",
    username: "User1Hrushi",
    role: "User",
  });

  const [adminData, setAdminData] = useState({
    fname: "Varahi",
    pass: "1234",
    list: [
      { id: 1, fname: "Dipak ", lname: "Ahirav" },
      { id: 2, fname: "Tejaswini ", lname: "Pawara" },
      { id: 3, fname: "Hinal ", lname: "Gandhi" },
      { id: 4, fname: "Rohit  ", lname: "Shewale" },
      { id: 5, fname: "Hrushi", lname: "Ambike" },
      { id: 6, fname: "Hrushi", lname: "Ambike" },
      { id: 7, fname: "Hrushi", lname: "Ambike" },
      { id: 8, fname: "Hrushi", lname: "Ambike" },
      { id: 9, fname: "Hrushi", lname: "Ambike" },
      { id: 10, fname: "Hrushi", lname: "Ambike" },
    ],
  });
  console.log("hru", data);

  return (
    <div className="App">
      <BrowserRouter>
        {isLogged ? (
          <WithLogin
            data={data}
            setStatus={setStatus}
            status={status}
            setIsLoggedIn={setIsLoggedIn}
            setData={setData}
            profileData={profileData}
            setProfileData={setProfileData}
            adminData={adminData}
            setAdminData={setAdminData}
          />
        ) : (
          <WithoutLogin
            data={data}
            setStatus={setStatus}
            status={status}
            setIsLoggedIn={setIsLoggedIn}
            setData={setData}
            registerData={registerData}
            setRegisterData={setRegisterData}
          />
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
