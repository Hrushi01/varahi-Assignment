import React from "react";
import { Formik, Form, Field } from "formik";
// import { schema } from "../../schema/schema";
import { schemaregister } from "./schemas";
import { useNavigate } from "react-router";
import { Button } from "@mui/material";

function Register({ status, registerData, setRegisterData }) {
  const navigate = useNavigate();
  console.log("register", registerData);
  return (
    <>
      <div className="flex justify-center pt-16">
        <Formik
          initialValues={registerData}
          validationSchema={schemaregister}
          onSubmit={() => {}}
        >
          {(props) => (
            <Form className="flex flex-col  bg-white  w-3/4 shadow justify-center items-center m-2 p-2">
              <div>{status} Login</div>
              <div className="w-5/6 mb-12 mt-5">
                <div className="  grid grid-cols-1  gap-10  p-2  ">
                  <div className=" items-center  ">
                    <label
                      className="flex justify-start font-bold font-serif text-lg text-gray-600 pl-1"
                      htmlFor="fname"
                    >
                      fname:
                    </label>

                    <Field
                      id="fname"
                      type="text"
                      label="fname"
                      name="fname"
                      placeholder="fname"
                      className=" p-2 m-1 w-full   rounded border-2 border-blue-200"
                    />
                    <div className="flex justify-left pl-3">
                      {props.errors.fname && props.touched.fname ? (
                        <p className="  text-red-600">{props.errors.fname}</p>
                      ) : null}
                    </div>
                  </div>
                </div>
                <div className="  grid grid-cols-1  gap-10  p-2  ">
                  <div className=" items-center  ">
                    <label
                      className="flex justify-start font-bold font-serif text-lg text-gray-600 pl-1"
                      htmlFor="lname"
                    >
                      lname:
                    </label>

                    <Field
                      id="lname"
                      type="text"
                      label="lname"
                      name="lname"
                      placeholder="lname"
                      className=" p-2 m-1 w-full   rounded border-2 border-blue-200"
                    />
                    <div className="flex justify-left pl-3">
                      {props.errors.lname && props.touched.lname ? (
                        <p className="  text-red-600">{props.errors.lname}</p>
                      ) : null}
                    </div>
                  </div>
                </div>

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
                <div className="grid grid-cols-1 gap-10 p-2">
                  <div className="items-center">
                    <label
                      className="flex justify-start font-bold font-serif text-lg text-gray-600 pl-1"
                      htmlFor="role"
                    >
                      Role:
                    </label>
                    <Field
                      as="select"
                      id="role"
                      name="role"
                      className="p-2 m-1 w-full rounded border-2 border-blue-200"
                    >
                      <option value="">-Select a option from below-</option>
                      <option value="user">User</option>
                      <option value="admin">Admin</option>
                    </Field>
                    <div className="flex justify-left pl-3">
                      {props.errors.role && props.touched.role ? (
                        <p className="text-red-600">{props.errors.role}</p>
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
                      setRegisterData(props.values);
                    }}
                  >
                    Submit
                  </Button>
                  <Button
                    type="but"
                    variant="contained"
                    size="large"
                    onClick={() => {
                      navigate("/decide");
                    }}
                  >
                    Login
                  </Button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
        {registerData.fname ? (
          <div className="bg-green-200 text-green-900 p-2 rounded mt-2">
            <p>Your details have been successfully submitted!</p>
            <p>First Name: {registerData.fname}</p>
            <p>Last Name: {registerData.lname}</p>
            <p>User Name: {registerData.username}</p>
            <p>Password: {registerData.password}</p>
            <p>Role: {registerData.role}</p>
          </div>
        ) : null}
      </div>
    </>
  );
}

export default Register;
