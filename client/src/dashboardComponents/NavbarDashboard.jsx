import React from "react";
// import Search from "/svgs/search.svg";
import Notification from "/svgs/notification.svg";
import { CDropdown, CDropdownItem, CDropdownMenu, CDropdownToggle } from '@coreui/react'

const NavbarDashboard = () => {

  return (
    <>
    <nav className="bg-white shadow-md py-3 flex flex-col-reverse gap-4 sm:gap-1 lg:flex-row lg:items-center lg:justify-between mt-16 md:mt-0 sticky top-[90px] md:top-0 z-10">
      {/* Left Section: Search Bar */}
      <div className="flex items-center h-14 w-full lg:ml-4 lg:w-96 rounded-2xl bg-backgroundGray50">
      {/* <img src={Search} alt="Search" className="m-4"/> */}
        <input
          type="text"
          placeholder="Search here..."
          className="w-full text-lg text-black text-opacity-50 font-normal pr-4 outline-none bg-transparent"
        />
      </div>

      {/* Right Section: Icons and Dropdowns */}
      <div className="flex justify-end items-center">
      

        {/* Notification Icon */}
        <button  className="relative flex justify-center items-center bg-backgroundYellow400 bg-opacity-12 w-12 h-12 rounded-lg mx-8">
         {/* <img src={Notification} alt="Notification" className="w-5 h-auto" /> */}
          <div className="absolute top-1 right-1 text-white w-5 h-5 bg-red-500 rounded-full flex justify-center items-center">3</div>
        </button>

        {/* Profile Icon with Dropdown */}
          <div className="flex items-center md:pr-5">
            {/* <img
              src={userImg}
              alt="Profile"
              className="w-16 h-16 mr-3 rounded-xl hidden md:block"
            /> */}
            <div className="pr-2 leading-5 flex flex-col">
              <span className="text-base font-medium text-textPrimary">User</span>
              <span className="text-sm font-normal text-stone300">admin</span>
            </div>
            <CDropdown>
              <CDropdownToggle>
              </CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem className="cursor-pointer" >Profile</CDropdownItem>
                <CDropdownItem className="cursor-pointer" >Logout</CDropdownItem>
              </CDropdownMenu>
            </CDropdown>
          </div>
      </div>


    </nav>
    </>
  );
};

export default NavbarDashboard;
