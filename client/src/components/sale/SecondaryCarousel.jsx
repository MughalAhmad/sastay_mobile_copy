import React, {useState} from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Card from "../common/Card";
const CustomLeftArrow = ({ onClick }) => {

  return (
    <button
      onClick={onClick}
      className="absolute left-0 top-1/3 z-10 bg-primaryColor text-white w-10 h-10 text-2xl rounded-full shadow-md"
    >
      &lt; {/* Left arrow icon */}
    </button>
  );
};
const CustomRightArrow = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="absolute right-0 top-1/3 z-10 bg-primaryColor text-white w-10 h-10 text-2xl rounded-full shadow-md"
    >
      &gt; {/* Right arrow icon */}
    </button>
  );
};
const SecondaryCarousel = ({ slides, cardsToShow }) => {
  const responsive = {
    superExtraLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1125 },
      items: 2
    },
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 1125, min: 1024 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 1023, min: 790 },
      items: 3
    },
    // tablet: {
    //   breakpoint: { max: 790, min: 525 },
    //   items: 2
    // },
    tablet: {
        breakpoint: { max: 790, min: 525 },
        items: 2
      },
      mobile: {
        breakpoint: { max: 525, min: 0 },
        items: 1
      }
  };

  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle navigation
  const handlePrev = () => {
    setCurrentIndex((prev) => (currentIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (currentIndex + 1));
  };



  return (
  <Carousel
  swipeable={true}
  draggable={true}
  responsive={responsive}
  customLeftArrow={<CustomLeftArrow />}
  customRightArrow={<CustomRightArrow />}
  infinite={true}
  // itemClass="mr-1"
  >
 {slides.map((slide, index) => (
  <div key={index} className="flex justify-center items-center mx-3">
      <Card img={slide.image}/>
    </div>

          // <div
          //   key={index}
          //   className=" w-full"
          // >
          //   <div className="">
          //     <div
          //       className="h-48 w-w8 bg-red-400 relative group"
          //     >
          //        <img className="w-full h-full object-fill" src={slide.image} alt="none"/>
          //           <p className="absolute bottom-0 left-0 bg-white bg-opacity-50 w-full text-center text-white group-hover:h-full cursor-pointer group-hover:bg-opacity-30 transition duration-700 ease-in-out">{slide.caption}</p>
          //           <button className="w-full bg-red-400 text-white absolute bottom-0 left-0 hidden group-hover:block" onClick={()=>alert("hello")}>View</button>
          //     </div>
          //   </div>
          // </div>
        ))} 
        </Carousel>
  );
};

export default SecondaryCarousel;


