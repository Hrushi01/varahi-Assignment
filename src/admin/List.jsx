import React from "react";
import Header from "../components/HeaderAdmin";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
function List({ adminData }) {
  const { list } = adminData;

  return (
    <div className="bg-gray-100 min-h-screen w-screen">
      <Header />
      <div className="flex items-center justify-center mt-5 p-4 w-screen">
        <div className="bg-white rounded-lg shadow-xl p-6">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            User List
          </h2>
          <table className="w-96">
            <thead>
              <tr>
                <th className="text-left">ID</th>
                <th className="text-left">First Name</th>
                <th className="text-left">Last Name</th>
                <th className="text-left">Update</th>
                <th className="text-left">Delete</th>
              </tr>
            </thead>
            <tbody className="">
              {list.map((user, index) => (
                <tr key={index} className="">
                  <td className="text-gray-700 p-2">{user.id}</td>
                  <td className="text-gray-700 p-2">{user.fname}</td>
                  <td className="text-gray-700">{user.lname}</td>
                  <td className="text-gray-700">
                    <Button type="submit" variant="contained" size="small">
                      update
                    </Button>
                  </td>
                  <td className="text-gray-700">
                    <Button
                      type="submit"
                      color="error"
                      variant="contained"
                      size="small"
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default List;
