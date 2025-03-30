import React from 'react';
const Banner = ({werient='2',images}) => {
  return (
    <>
        {werient === '1' &&
        <div className="w-full">
          {images.map((img, index)=>(
              <img
              key={index}
              className={`w-full`}
              src={img}
              alt="none"
              />
          ))}
    
      </div>
      }
       {werient === '2' &&
       <div className='w-full flex flex-col md:flex-row gap-2'>
           {images.map((img, index)=>(
              <img
              key={index}
              className={`w-full md:w-1/2 object-cover`}
              src={img}
              alt="none"
              />
          ))}
      </div>
      }
    </>
  );
};

export default Banner;

