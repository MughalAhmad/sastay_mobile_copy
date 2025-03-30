import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

const Dropdown = ({className}) => {
  const [state, setState] = useState(false);
  const dropdownRef = useRef(null);

  // Close the dropdown if clicking outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setState(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="relative">
      {/* Dropdown toggle */}
      <div
        className={`${className} border-2 border-primaryColor dark:border-primaryColor flex justify-between items-center px-3 rounded-md`}
        onClick={() => setState(!state)}
      >
        <span className="text-xs font-bold text-simpleColor dark:simpleColor">text</span>
        <FontAwesomeIcon className="text-primaryColor dark:primaryColor" icon={faAngleDown} />
      </div>

      {/* Dropdown menu */}
      {state && (
        <div className={`${className} h-auto bg-zinc700 p-3 absolute top-14 left-0 flex flex-col gap-3 shadow-lg rounded-md z-10`}>
          <span className="text-primaryColor dark:text-primaryColor text-base font-semibold">
            SHOP BY PRICE
          </span>
          <span className="text-primaryColor dark:text-primaryColor text-xs font-medium">hello-1</span>
          <span className="text-primaryColor dark:text-primaryColor text-xs font-medium">hello-2</span>
          <span className="text-primaryColor dark:text-primaryColor text-xs font-medium">hello-3</span>
          <span className="text-primaryColor dark:text-primaryColor text-xs font-medium">hello-4</span>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
