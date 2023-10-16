import React, { useState } from "react";
import Header from "../components/HeaderAdmin";
import { Button } from "@mui/material";
import { useNavigate } from "react-router";
import ReactPaginate from "react-paginate";

function List({
  adminData,
  selectuser,
  setSelectUser,
  setAdminData,
  setIsLoggedIn,
}) {
  const navigate = useNavigate();
  const { list } = adminData;
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const indexOfLastItem = (currentPage + 1) * itemsPerPage;
  const indexOfFirstItem = currentPage * itemsPerPage;
  const currentItems = list.slice(indexOfFirstItem, indexOfLastItem);

  const handleDeleteUser = (userId) => {
    const updatedList = list.filter((user) => user.id !== userId);
    setAdminData({
      ...adminData,
      list: updatedList,
    });
  };

  return (
    <div className="bg-gray-100 min-h-screen w-screen">
      <Header setIsLoggedIn={setIsLoggedIn} />
      <div className="flex items-center justify-center mt-5 p-4 w-screen">
        <div className="bg-white rounded-lg shadow-xl p-6">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            User List
          </h2>
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-left p-2">ID</th>
                <th className="text-left pr-2">First Name</th>
                <th className="text-left pr-2">Last Name</th>
                <th className="text-left ">Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((user, index) => (
                <tr key={index}>
                  <td className="text-gray-700 p-2">{user.id}</td>
                  <td className="text-gray-700 p-2">{user.fname}</td>
                  <td className="text-gray-700">{user.lname}</td>
                  <td className="text-gray-700 space-x-2">
                    <Button
                      type="submit"
                      variant="contained"
                      size="small"
                      onClick={() => {
                        setSelectUser(user);
                        navigate("/update-list-user");
                      }}
                    >
                      Update
                    </Button>
                    <Button
                      type="submit"
                      color="error"
                      variant="contained"
                      size="small"
                      onClick={() => {
                        handleDeleteUser(user.id);
                      }}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="mt-4 flex flex-col border-2 border-black justify-center items-center ">
            <p className="mr-2">Pagination</p>
            <ReactPaginate
              previousLabel={"<-Previous"}
              nextLabel={"Next->"}
              breakLabel={"..."}
              pageCount={Math.ceil(list.length / itemsPerPage)}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              onPageChange={handlePageChange}
              containerClassName={"pagination"}
              subContainerClassName={"pages pagination"}
              activeClassName={"active"}
              previousClassName={
                "px-3 py-2 border-2 m-2 border-black text-gray-700 rounded-l-xl"
              }
              nextClassName={
                "px-3 py-2 border-2 m-2 border-black text-gray-700 rounded-r-xl"
              }
              previousLinkClassName={"hover:bg-gray-400"}
              nextLinkClassName={"hover:bg-gray-400"}
              pageClassName={"mr-2"}
              pageLinkClassName={
                "px-3 py-2 m-2 text-gray-700 hover:bg-gray-400"
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default List;
