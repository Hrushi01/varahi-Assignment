import React from "react";
import { Formik, Form, Field } from "formik";
import { schemaupdate } from "../login/schemas";
import { useNavigate } from "react-router";
import { Button } from "@mui/material";
import Header from "../components/HeaderUser";

function UpdateData({ profileData, status, setProfileData }) {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <div className="flex justify-center pt-16">
        <Formik
          initialValues={profileData}
          validationSchema={schemaupdate}
          onSubmit={() => {
            navigate("/dashboard");
          }}
        >
          {(props) => (
            <Form className="flex flex-col bg-white w-3/4 shadow justify-center items-center m-2 p-2">
              <div className="text-2xl font-semibold text-blue-600 mb-4">
                Update Profile
              </div>
              <div className="w-5/6 mb-12 mt-5 space-y-4">
                <FormField
                  label="First Name"
                  name="fname"
                  type="text"
                  placeholder="First Name"
                  errors={props.errors.fname}
                  touched={props.touched.fname}
                />
                <FormField
                  label="Last Name"
                  name="lname"
                  type="text"
                  placeholder="Last Name"
                  errors={props.errors.lname}
                  touched={props.touched.lname}
                />
                <FormField
                  label="Username"
                  name="username"
                  type="text"
                  placeholder="Username"
                  errors={props.errors.username}
                  touched={props.touched.username}
                />
                <FormField
                  label="Password"
                  name="password"
                  type="password"
                  placeholder="Password"
                  errors={props.errors.password}
                  touched={props.touched.password}
                />
                <div className="flex justify-around">
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    onClick={() => {
                      setProfileData(props.values);
                    }}
                  >
                    Update
                  </Button>
                </div>
                <div className="flex justify-around font-semibold text-red-500">
                  Note:To Update data change the existing values of the user and
                  click update
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
}

const FormField = ({ label, name, type, placeholder, errors, touched }) => {
  return (
    <div className="grid grid-cols-1 gap-4">
      <div className="flex items-center">
        <label className="flex justify-start font-bold font-serif text-lg text-gray-600 pl-1">
          {label}:
        </label>
        <Field
          id={name}
          type={type}
          label={name}
          name={name}
          placeholder={placeholder}
          className="p-2 m-1 w-full rounded border-2 border-blue-200"
        />
      </div>
      <div className="flex justify-left pl-3">
        {errors && touched ? <p className="text-red-600">{errors}</p> : null}
      </div>
    </div>
  );
};

export default UpdateData;
