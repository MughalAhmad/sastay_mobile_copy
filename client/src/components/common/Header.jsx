import React, { useState, useEffect } from 'react'
import {header} from "../../../public/json/common.json";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping, faUser, faHeart } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
const Header = ({className}) => {
  const navigate = useNavigate();
  const [theme, setTheme] = useState(localStorage.getItem('theme'));
  
  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);
  

  const toggleTheme = () => {
    localStorage.setItem('theme', theme);
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className='bg-backgroundTopHeader'>
    <div className={`${className} flex flex-col md:flex-row justify-between items-center px-8 2xl:px-0 py-3 gap-3 md:py-0 md:gap-0`}>
      <img className=' h-10' onClick={toggleTheme} src="/logo.png" alt='logo' />
      <div className='h-10 w-full md:w-1/2 flex justify-center'>
       <input className='h-full w-full  rounded-bl-[5px] rounded-tl-[5px]'/><button className='h-full py-2 px-9 text-base text-white bg-backgroundNavbarMenu dark:bg-backgroundNavbarMenu border border-white rounded-tr-[5px] rounded-br-[5px]'>{header.btnText}</button>
      </div>
      <div className='flex items-center justify-center gap-4 md:gap-3.5'>
      <FontAwesomeIcon className='w-5 h-5 text-zinc700 dark:text-white cursor-pointer' icon={faUser} />
      <FontAwesomeIcon onClick={()=>navigate("/wishlist")} className='w-5 h-5 text-zinc700 dark:text-white cursor-pointer' icon={faHeart} />
      <FontAwesomeIcon className='w-5 h-5 text-zinc700 dark:text-white cursor-pointer' icon={faBagShopping} />
      </div>
    </div>
    </div>
  )
}

export default Header