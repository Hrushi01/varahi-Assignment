import React from "react";
import { Formik, Form, Field } from "formik";
// import { schema } from "../../schema/schema";
import { schemalogin } from "./schemas";
import { useNavigate } from "react-router";
import { Button } from "@mui/material";

const Login = (props) => {
  const navigate = useNavigate();
  const { data, status, setData, setIsLoggedIn } = props;
  console.log("gg", data);

  return (
    <>
      <div className="flex justify-center pt-16">
        <Formik
          initialValues={data}
          validationSchema={schemalogin}
          onSubmit={() => {
            setIsLoggedIn(true);
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
                      setData(props.values);
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
    </>
  );
};

export default Login;
