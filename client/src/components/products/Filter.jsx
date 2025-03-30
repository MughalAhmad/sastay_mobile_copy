import React from "react";
import Dropdown from "../common/Dropdown";
const Filter = () => {
  return (
    <div className="flex flex-wrap gap-3 justify-evenly items-center">
      <Dropdown className="w-64 h-12"/>
      <Dropdown className="w-64 h-12"/>
      <Dropdown className="w-64 h-12"/>
      <div className="h-12 w-64 border-2 border-primaryColor dark:border-primaryColor flex justify-center items-center px-3 rounded-md">
        <span className="text-xs font-bold text-simpleColor dark:simpleColor">
          CLICK RESET FILTER
        </span>
      </div>
    </div>
  );
};

export default Filter;
