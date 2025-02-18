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
    
      <div className="hidden sm:visible h-screen w-36 text-sm bg-[#A3D1C6] sm:flex flex-col shadow-lg lg:w-52 md:w-46 sm:w-28 max-sm:text-red-500">
       
        <nav className="flex flex-col p-2 md:p-4 space-y-2 border-2 border-red-500">
        
          <NavLink
            to="/home"
            className="w-full hover:bg-[#3D8D7A] p-2 md:p-2 cursor-pointer rounded transition duration-200 hover:text-white"
          >
            Home
          </NavLink>

          {/* DashBoard */}
          <div>
            <div
              onClick={toggleDashBoard}
              className="p-1 cursor-pointer rounded transition duration-200 flex items-center gap-2 hover:bg-[#3D8D7A] hover:text-white"
            >
              
              Dashboard {isDashBoard ? <IoIosArrowUp className="text-xl sm:text-lg"/> : <IoIosArrowDown className="text-xl sm:text-lg" />}
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
              className="p-1 md:p-2 cursor-pointer rounded transition duration-200 flex items-center gap-2 hover:bg-[#3D8D7A] hover:text-white"
            >
              ManageCard {isManageCard ? <IoIosArrowUp className="text-xl"/> : <IoIosArrowDown className="text-xl"/>}
            </div>
            <div
              className={`border-2 border-blue-500 flex flex-col  transform transition-all duration-300 ease-in-out  ${isManageCard
                ? "max-h-40 opacity-100 mt-2"
                : "max-h-0 opacity-0"
                } overflow-hidden`}
            >
              <NavLink
                to="managecard/createcard"
                className="p-2 rounded pl-2  sm:pl-2 md:pl-4 transition duration-200  hover:bg-[#3D8D7A] hover:text-white flex items-center gap-2"
              >
                Create Card <MdCreateNewFolder className="mt-0.5 text-2xl sm:text-lg"/>
              </NavLink>
              <NavLink
                to="managecard/modifycard"
                className="p-2 rounded pl-2 sm:pl-2 md:pl-4 transition duration-200  hover:bg-[#3D8D7A] hover:text-white flex items-center gap-2"
              >
                Modify Card <IoIosCreate className="mt-0.5 text-2xl sm:text-lg"/>
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
    
  );
}

export default Sidebar;