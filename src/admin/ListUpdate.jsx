import React from "react";
import { Formik, Form, Field } from "formik";
import { useNavigate } from "react-router";
import { Button } from "@mui/material";

function ListUpdate({
  selectuser,
  setSelectUser,
  adminData,
  setAdminData,
  setIsLoggedIn,
}) {
  const navigate = useNavigate();

  const handleUpdateAdminData = (updatedUser) => {
    // Update the user in the list using setAdminData
    const updatedList = adminData.list.map((user) =>
      user.id === updatedUser.id ? updatedUser : user
    );

    // Update the adminData with the updated list
    setAdminData({
      ...adminData,
      list: updatedList,
    });

    // Navigate to the list page
    navigate("/list");
  };

  return (
    <div>
      <div className="flex justify-center pt-16">
        <Formik
          initialValues={selectuser}
          onSubmit={(values) => {
            handleUpdateAdminData(values);
          }}
        >
          {(props) => (
            <Form className="flex flex-col bg-white w-3/4 shadow justify-center items-center m-2 p-2">
              <div className="text-2xl font-semibold text-blue-600 mb-4">
                Update User from list
              </div>
              <div className="w-5/6 mb-12 mt-5 space-y-4">
                <FormField
                  label="First Name"
                  name="fname"
                  type="text"
                  placeholder="First Name"
                />
                <FormField
                  label="Last Name"
                  name="lname"
                  type="text"
                  placeholder="Last Name"
                />

                <div className="flex justify-around">
                  <Button type="submit" variant="contained" size="large">
                    Update
                  </Button>
                </div>
                <div className="flex justify-around font-semibold text-red-500">
                  Note: To update data, change the existing values of the user
                  and click update.
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

const FormField = ({ label, name, type, placeholder }) => {
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
    </div>
  );
};

export default ListUpdate;
