import React from "react";
import { Formik, Form, Field } from "formik";
// import { schema } from "../../schema/schema";
import { schemalogin } from "./schemas";
import { useNavigate } from "react-router";
import { Button } from "@mui/material";

const Login = (props) => {
  const navigate = useNavigate();
  const { status, setIsLoggedIn, loginData, setLoginData } = props;
  console.log("gg", loginData, status);

  const handelsubmit = () => {
    if (status === "User") {
      if (
        loginData.username === "Hrushi" &&
        loginData.password === "Hrushi@123"
      ) {
        console.log("jsjsjsjsjs user");
        setIsLoggedIn(true);
      }
    }
    if (status === "Admin") {
      if (
        loginData.username === "Varahi" &&
        loginData.password === "Varahi@123"
      ) {
        console.log("jsjsjsjsjs admin");
        setIsLoggedIn(true);
      }
    }
  };

  return (
    <>
      <div className="flex justify-center pt-16">
        <Formik
          initialValues={loginData}
          validationSchema={schemalogin}
          onSubmit={() => {
            handelsubmit();
            navigate("/");
          }}
        >
          {(props) => (
            <Form className="flex flex-col  bg-white  w-3/4 shadow justify-center items-center m-2 p-2">
              <div>{status} Login</div>
              <div className="w-5/6 mb-12 mt-5">
                <div className="  grid grid-cols-1  gap-10  p-2  ">
                  <div className=" items-center  ">
                    <label
                      className="flex justify-start font-bold font-serif text-lg text-gray-600 pl-1"
                      htmlFor="username"
                    >
                      Username:
                    </label>

                    <Field
                      id="username"
                      type="text"
                      label="username"
                      name="username"
                      placeholder="username"
                      className=" p-2 m-1 w-full   rounded border-2 border-blue-200"
                    />
                    <div className="flex justify-left pl-3">
                      {props.errors.username && props.touched.username ? (
                        <p className="  text-red-600">
                          {props.errors.username}
                        </p>
                      ) : null}
                    </div>
                  </div>
                </div>
                <div className="  grid grid-cols-1  gap-10  p-2  ">
                  <div className=" items-center  ">
                    <label
                      className="flex justify-start font-bold font-serif text-lg text-gray-600 pl-1"
                      htmlFor="password"
                    >
                      Password:
                    </label>

                    <Field
                      id="password"
                      type="password"
                      label="password"
                      name="password"
                      placeholder="password"
                      className=" p-2 m-1 w-full   rounded border-2 border-blue-200"
                    />
                    <div className="flex justify-left pl-3">
                      {props.errors.password && props.touched.password ? (
                        <p className="  text-red-600">
                          {props.errors.password}
                        </p>
                      ) : null}
                    </div>
                  </div>
                </div>
                <div className="flex justify-around">
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    onClick={() => {
                      navigate("/");
                    }}
                  >
                    Back
                  </Button>
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    onClick={() => {
                      setLoginData(props.values);
                    }}
                  >
                    Submit
                  </Button>
                  <Button
                    type="but"
                    variant="contained"
                    size="large"
                    onClick={() => {
                      navigate("/register");
                    }}
                  >
                    Registration
                  </Button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
      <div className="flex justify-around">
        <div className="mt-8 border-2 border-gray-500 rounded-lg p-4 text-center w-fit">
          <p className="text-lg font-semibold">
            For login use the following credentials:
          </p>
          {status === "User" ? (
            <div>
              <p>Username: Hrushi</p>
              <p>Password: Hrushi@123</p>
            </div>
          ) : status === "Admin" ? (
            <div>
              <p>Username: Varahi</p>
              <p>Password: Varahi@123</p>
            </div>
          ) : (
            <></>
          )}{" "}
        </div>
      </div>
    </>
  );
};

export default Login;
