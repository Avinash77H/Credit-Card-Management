import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoIosArrowDown, IoIosArrowUp, IoIosCreate } from "react-icons/io";
import { MdCreateNewFolder } from "react-icons/md";

function Sidebar() {

  /* DashBoard */
  const [isDashBoard, setIsDashBoard] = useState(false);

  const toggleDashBoard = () => {
    setIsDashBoard(!isDashBoard);
  };

  /* Manage Card */
  const [isManageCard, setIsManageCard] = useState(false);

  const toggleManageCard = () => {
    setIsManageCard(!isManageCard);
  };

  return (
    <div className="">
      <div className="h-screen w-64 bg-[#A3D1C6] flex flex-col shadow-lg lg:w-52 md:w-46">
        {/* <div className="p-6">
          <h1 className="text-2xl font-bold text-[#3D8D7A]">Menu</h1>
        </div> */}
        <nav className="flex flex-col p-4 space-y-2">
          <NavLink
            to="/home"
            className="w-full hover:bg-[#3D8D7A] p-2 cursor-pointer rounded transition duration-200 hover:text-white"
          >
            Home
          </NavLink>

          {/* DashBoard */}
          <div>
            <div
              onClick={toggleDashBoard}
              className="p-2 cursor-pointer rounded transition duration-200 flex items-center gap-2 hover:bg-[#3D8D7A] hover:text-white"
            >
              Dashboard {isDashBoard ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </div>
            <div
              className={`flex flex-col space-y-2 transform transition-all duration-300 ease-in-out ${isDashBoard
                ? "max-h-40 opacity-100 mt-2"
                : "max-h-0 opacity-0"
                } overflow-hidden`}
            >
              <NavLink
                to="dashboard/cardpage"
                className="p-2 rounded pl-4 transition duration-200  hover:bg-[#3D8D7A] hover:text-white"
              >
                Cards
              </NavLink>
              <NavLink
                to="dashboard/history"
                className="p-2 rounded pl-4 transition duration-200  hover:bg-[#3D8D7A] hover:text-white"
              >
                History
              </NavLink>
            </div>
          </div>

          {/* Manage Card */}
          <div>
            <div
              onClick={toggleManageCard}
              className="p-2 cursor-pointer rounded transition duration-200 flex items-center gap-2 hover:bg-[#3D8D7A] hover:text-white"
            >
              Manage Card {isManageCard ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </div>
            <div
              className={`flex flex-col space-y-2 transform transition-all duration-300 ease-in-out ${isManageCard
                ? "max-h-40 opacity-100 mt-2"
                : "max-h-0 opacity-0"
                } overflow-hidden`}
            >
              <NavLink
                to="managecard/createcard"
                className="p-2 rounded pl-4 transition duration-200  hover:bg-[#3D8D7A] hover:text-white flex items-center gap-2"
              >
                Create Card <MdCreateNewFolder className="mt-0.5"/>
              </NavLink>
              <NavLink
                to="managecard/modifycard"
                className="p-2 rounded pl-4 transition duration-200  hover:bg-[#3D8D7A] hover:text-white flex items-center gap-2"
              >
                Modify Card <IoIosCreate className="mt-0.5"/>
              </NavLink>
            </div>
          </div>

          {/* Add expense */}
          <NavLink
            to="/addExpense"
            className="hover:bg-[#3D8D7A] p-2 cursor-pointer rounded transition duration-200 hover:text-white"
          >
            Add Expense
          </NavLink>

        </nav>
      </div>
    </div>
  );
}

export default Sidebar;