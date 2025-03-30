import React, {useState} from 'react'
import ShowCaseFilter from './ShowCaseFilter';
import Dropdown from '../common/Dropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTableList, faBorderAll } from '@fortawesome/free-solid-svg-icons';
import Card from "../common/Card";
const ShowCase = () => {
    const [view, setView] = useState('vertical')

    const data =[
        "/svg/common/mobile_svg.svg",
        "/svg/common/mobile_svg.svg",
        "/svg/common/mobile_svg.svg",
        "/svg/common/mobile_svg.svg",
        "/svg/common/mobile_svg.svg",
        "/svg/common/mobile_svg.svg",
        "/svg/common/mobile_svg.svg",
        "/svg/common/mobile_svg.svg",
        "/svg/common/mobile_svg.svg",
        "/svg/common/mobile_svg.svg",
        "/svg/common/mobile_svg.svg",
        "/svg/common/mobile_svg.svg",
        "/svg/common/mobile_svg.svg",
        "/svg/common/mobile_svg.svg",
        "/svg/common/mobile_svg.svg",
        "/svg/common/mobile_svg.svg",
        "/svg/common/mobile_svg.svg",
         ]

  return (
    <div className='flex gap-4 flex-col md:flex-row'>
        <div className='min-w-64 bg-showCaseFilter dark:bg-showCaseFilter'><ShowCaseFilter/></div>
        <div className='flex-1 w-full'>
            <div className='flex justify-between border-b-2 pb-7'>
              <Dropdown className='w-32 h-9'/> 
              <div className='flex justify-center items-center gap-3'>
                <span className='text-xs font-bold text-simpleColor dark:text-simpleColor'>View</span>
                <FontAwesomeIcon className='w-9 h-9 text-primaryColor dark:text-primaryColor cursor-pointer' onClick={()=>setView("vertical")} icon={faTableList} />
                <FontAwesomeIcon className='w-9 h-9 text-primaryColor dark:text-primaryColor cursor-pointer' onClick={()=>setView("horizantal")} icon={faBorderAll} />
              </div>
            </div>
            <div className={`mt-12 ${view === "horizantal" ? "flex flex-wrap justify-evenly gap-2 items-center" : ""}`}>
                {data.map((item, index)=>(
                    <Card img={item} key={index} type={view}/>
                ))}

            </div>
        </div>
    </div>
  )
}

export default ShowCase