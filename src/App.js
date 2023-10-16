import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import WithLogin from "./WithLogin";
import WithoutLogin from "./WithoutLogin";

function App() {
  const [isLogged, setIsLoggedIn] = useState(false);
  console.log("sss", isLogged);
  const [status, setStatus] = useState("");

  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const [profileData, setProfileData] = useState({
    fname: "Hrushikesh",
    lname: "Ambike",
    password: "Hrushi@2",
    username: "User1Hrushi",
    role: "User",
  });
  const [registerData, setRegisterData] = useState({
    fname: "",
    lname: "",
    password: "",
    username: "",
    role: "",
  });

  const [adminData, setAdminData] = useState({
    fname: "Varahi",
    pass: "1234",
    list: [
      { id: 1, fname: "Dipak ", lname: "Ahirav" },
      { id: 2, fname: "Tejaswini ", lname: "Pawara" },
      { id: 3, fname: "Hinal ", lname: "Gandhi" },
      { id: 4, fname: "Rohit  ", lname: "Shewale" },
      { id: 5, fname: "Vikas ", lname: "Shinde" },
      { id: 6, fname: "Rituparna ", lname: "Basu" },
      { id: 7, fname: "Hrushi", lname: "Ambike" },
      { id: 8, fname: "Janhavi ", lname: "Pandya" },
      { id: 9, fname: "Amit ", lname: "Bhosale" },
      { id: 10, fname: "Samriddhi ", lname: "Gupta" },
      { id: 11, fname: "Dipak ", lname: "Ahirav" },
      { id: 12, fname: "Tejaswini ", lname: "Pawara" },
      { id: 13, fname: "Hinal ", lname: "Gandhi" },
      { id: 14, fname: "Rohit  ", lname: "Shewale" },
      { id: 15, fname: "Vikas ", lname: "Shinde" },
      { id: 16, fname: "Rituparna ", lname: "Basu" },
      { id: 17, fname: "Hrushi", lname: "Ambike" },
      { id: 18, fname: "Janhavi ", lname: "Pandya" },
      { id: 19, fname: "Amit ", lname: "Bhosale" },
      { id: 20, fname: "Samriddhi ", lname: "Gupta" },
    ],
  });
  const [selectuser, setSelectUser] = useState({
    fname: "",
    lname: "",
  });
  // console.log("hru", data);

  return (
    <div className="App">
      <BrowserRouter>
        {isLogged ? (
          <WithLogin
            setStatus={setStatus}
            status={status}
            setIsLoggedIn={setIsLoggedIn}
            profileData={profileData}
            setProfileData={setProfileData}
            adminData={adminData}
            setAdminData={setAdminData}
            selectuser={selectuser}
            setSelectUser={setSelectUser}
          />
        ) : (
          <WithoutLogin
            loginData={loginData}
            setLoginData={setLoginData}
            setStatus={setStatus}
            status={status}
            setIsLoggedIn={setIsLoggedIn}
            registerData={registerData}
            setRegisterData={setRegisterData}
          />
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
