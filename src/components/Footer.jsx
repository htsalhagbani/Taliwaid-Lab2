import React from 'react';
import bgw from '../assets/bgw.avif'; // Replace with your actual image path

function Footer() {
  return (
    <div className="relative mt-8">
    <div
      className="bg-cover bg-center h-[60vh] flex flex-col justify-center items-center"
      style={{ backgroundImage: `url(${bgw})` }} // Correctly format the URL
    >
      <div className="text-center text-black p-4  flex justify-center items-center flex-col">
        <h1 className="text-4xl md:text-6xl lg:text-8xl mb-4 w-[80%] md:w-[80%] lg:w-[60%]">
          End with one final Call to action
        </h1>
        <p className="text-lg md:text-xl mb-4 w-[80%] md:w-[60%] lg:w-[70%]">
        This is your last shot at converting someone. Remind them about the benefits of your offer and encourage them to act now.        </p>
        <button className="bg-orange-500 text-black px-6 py-2 rounded-lg text-3xl ">
          Order Now
        </button>
      </div>
    </div>
  
    {/* Footer Section */}
    <div className="flex flex-col md:flex-row items-center justify-around bg-black p-4 text-white">
  <h1 className="text-lg md:text-lg xl:ml-6">Fresh Goods</h1>
  <p className="text-sm md:text-base">© 2020 Insert Name Here. All rights reserved.</p>
</div>
  </div>
  
);
}

export default Footer;
