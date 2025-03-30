import React from "react";
import NavbarDashboard from "../../dashboardComponents/NavbarDashboard";
import { Outlet} from "react-router-dom";

const LayoutDashboard = () => {
  
  return(
      <div className="flex h-screen">
      {/* Sidebar */}
      <div className="hidden md:flex md:w-52 bg-white text-black flex-col overflow-auto px-7 text-textPrimary">

        <div className="mt-3 flex items-center justify-between mr-5">
    <img src= "/logo.png" alt="logo"/>
       
        </div>

        <nav className="flex-1  space-y-2 mt-10">
          <span className={`flex items-center gap-3 rounded-2xl cursor-pointer h-14 ${location === "/" ? highLight : "font-normal text-sm pl-4 text-slate500" } `} onClick={()=>handleMenu('/')}>
           {/* <img src={`/svgs/${location === "/" ? "dashboardWhite":"dashboardGray"}.svg`} alt="dashboard-icon" className={`${location === "/" ? "w-7 h-auto" : "w-5 h-auto"} `}/> */}
            <p >Dashboard</p>
          </span>
        </nav>

      </div>


      {/* Main Content */}
      <div className="flex-1 bg-gray-100 overflow-auto" >
        <NavbarDashboard/>
        <Outlet />
      </div>
    </div>
  )

};

export default LayoutDashboard;
