import React, {useState} from 'react';
import {useNavigate} from "react-router-dom"
import { menu } from '../../../public/json/common.json';

const Header = ({className}) => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSubmenu, setActiveSubmenu] = useState(null);
  
  const toggleSubmenu = (name) => {
    setActiveSubmenu(activeSubmenu === name ? null : name);
  };
  return (   
    <div className='bg-backgroundNavbarMenu'> 
    <nav className={`${className} text-white`}>
      <div className="px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold md:hidden py-2">LOGO</div>

        {/* Hamburger Menu (Mobile) */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center w-full justify-evenly">
          {menu.map((item, index) => (
            <div key={index} className=" group md:w-10 lg:w-28">
              <span
                onClick={()=>navigate(item.link)}
                className="flex items-center justify-center py-3.5 cursor-pointer text-xs lg:text-base font-medium "
              >
                {item.name}
              </span>
              {item.submenu && (
                <div className="absolute w-screen top-36 left-0 mt-2 hidden group-hover:block bg-zinc700 z-10">
                  <div className='max-w-[1440px] m-auto flex justify-center items-center p-6 gap-10'>
                  {item.submenu.map((subitem, subindex) => (
                    <div key={subindex} className='w-20 h-auto cursor-pointer text-center'
                    onClick={()=>navigate(subitem.link)}
                    >
                      <img src='/svg/common/mobile_svg.svg' className='w-20 h-auto' alt='none'/>
                    <span
                      key={subindex}
                      className="text-primaryColor cursor-pointer text-xs font-medium"
                    >
                      {subitem.name}
                    </span>
                    </div>
                  ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800">
          {menu.map((item, index) => (
            <div key={index} className="border-b border-gray-700">
              <div
                className="flex justify-between items-center px-4 py-2 hover:bg-gray-700"
                onClick={() =>
                  item.submenu ? toggleSubmenu(item.name) : setIsMenuOpen(false)
                }
              >
                <span
                 onClick={()=>navigate(item.link)}
                // href={item.link || "#"}
                 className="flex-1">
                  {item.name}
                </span>
                {item.submenu && (
                  <button className="focus:outline-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-4 w-4 transform ${
                        activeSubmenu === item.name ? "rotate-180" : "rotate-0"
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                )}
              </div>
              {/* Submenu */}
              {item.submenu && activeSubmenu === item.name && (
                <div className="bg-gray-700">
                  {item.submenu.map((subitem, subindex) => (
                    <span
                      key={subindex}
                      // href={subitem.link}
                      onClick={()=>navigate(subitem.link)}
                      className="block px-6 py-2 hover:bg-gray-600"
                    >
                      {subitem.name}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
    </div>
  );
};
export default Header;


