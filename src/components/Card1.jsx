import React from 'react';

function Card1(props) {
  return (
<div className="card bg-base-100 shadow-xl text-center m-2 w-full sm:w-1/2 md:w-1/3 xl:w-[12vw]">
<figure className="flex justify-center">
        <img
          src={props.img}
          alt={props.title}
          className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 " 
        />
      </figure>
      <div className="card-body flex flex-col items-center">
        <h2 className="card-title text-base md:text-lg font-bold">{props.title}</h2>
        <p className="text-sm md:text-base text-center">
          {props.text}
        </p>
      </div>
    </div>
  );
}

export default Card1;
