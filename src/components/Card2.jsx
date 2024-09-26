import React from 'react';

function Card2(props) {
  return (
    <div className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded  bg-transparent m-4">
      <img 
        className="w-full h-48 object-cover" 
        src={props.img}
        alt="Card Image" 
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-center">{props.title}</div>
        <p className="text-gray-700 text-center text-sm sm:text-base">
            {props.par}
        </p>
      </div>
    </div>
  );
}

export default Card2;
