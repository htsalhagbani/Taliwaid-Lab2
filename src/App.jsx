import { useState } from 'react'
import './App.css'
import bg4 from './assets/bg.avif'
import Card1 from './components/Card1'
import be1 from './assets/be1.avif'
import lock from './assets/lock.avif'
import car from './assets/car.avif'
import black3 from './assets/black-bg.avif'
import avatar from './assets/avatar.avif'
import Card2 from './components/Card2'
import f1 from './assets/f1.avif'
import f2 from './assets/f2.avif'
import f3 from './assets/f3.avif'
import women from './assets/women.avif'
import Footer from './components/Footer'



function App() {
  

  return (
    <>
<div className=' h-[100vh] overflow-hidden relative'>
  <img src={bg4} alt="Background" className="w-full h-full object-cover" />
  
  <div className="absolute top-0 left-0 p-6 flex flex-col justify-center h-full">
    <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Fresh Goods</h1>
    <p className="text-white mb-4 text-2xl md:text-4xl lg:text-5xl w-full md:w-3/4 lg:w-1/2">Consistently describe your product or service.</p>
    <p className="text-white mb-4 text-sm md:text-md lg:text-lg w-full md:w-3/4 lg:w-2/3">
      Needs to get clever. Tell people exactly what you're offering, then use this space to communicate your key value proposition.
    </p>
    <button className="bg-[#eec02a] text-black font-bold px-4 py-2 rounded w-40">Order Now</button>
  </div>
</div>

<div className='  flex flex-col justify-between items-center mt-9 mb-5'>
<div className=' flex flex-col items-center'>
  <h1 className='text-3xl sm:text-4xl md:text-6xl font-bold text-center w-11/12 md:w-10/12'>
    Here are some of the benefits of your offer
  </h1>
  <p className='text-base sm:text-lg md:text-xl w-11/12 md:w-10/12 mt-5 text-center'>
    Explain what makes your product or service great. Talk about features in a way that highlights the real value people get out of them.
  </p>
</div>


  <div className="flex flex-wrap justify-center items-center w-full mt-8 px-4">
  <div className="w-full sm:w-1/2 lg:w-1/3 p-2 flex justify-center">
    <Card1 
      img={be1} 
      title={'Benefits 1'} 
      text={'For example, restaurants and bakeries could outline the health benefits of their all-natural ingredients.'}
    />
  </div>
  <div className="w-full sm:w-1/2 lg:w-1/3 p-2 flex justify-center">
    <Card1 
      img={lock} 
      title={'Benefits 2'} 
      text={'Florists and other small retailers might use this space to describe how their products make delightful, one-of-a-kind gifts.'}
    />
  </div>
  <div className="w-full sm:w-1/2 lg:w-1/3 p-2 flex justify-center">
    <Card1 
      img={car} 
      title={'Benefits 3'} 
      text={'You could also add buttons to this section and share links to other products or available delivery methods.'}
    />
  </div>
</div>

</div>

<div
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${black3})` }}
    >
     <div className="flex items-center justify-center h-full bg-green bg-opacity-50">
  <div className="text-center text-white flex flex-col items-center justify-between">
    <h6 className="text-xl md:text-4xl font-bold ">What our Customers say.</h6>
    <p className='text-9xl font-bold text-yellow-500 mb-9'>,,</p>
    <h6 className="text-xl md:text-4xl font-light w-[50vw]">Share a real testimonial that hits some of your benefits (but isn't too sale-y).</h6>
    <div className="flex items-center p-4 bg-transparent shadow-md rounded-lg mt-8">
  <div className="flex flex-col items-center">
  <div className="avatar">
      <div className="w-24 rounded-full">
        <img src={avatar} alt="Avatar" />
      </div>
    </div>
    <div className="mt-2 text-center">
      <h2 className="text-lg font-bold">REAL NAME</h2>
      <p className="text-gray-500">Location</p>
      <div className="flex mt-1 justify-center">
        {[...Array(5)].map((_, index) => (
          <svg
            key={index}
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-yellow-500"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 15l-5.878 3.09 1.12-6.528L0 6.09l6.572-.957L10 0l2.428 5.133L20 6.09l-5.242 5.472 1.12 6.528z" />
          </svg>
        ))}
      </div>
    </div>
  </div>
</div>

  </div>
</div>
    </div>
   

    <div className='bg-[lightgray] flex flex-col md:flex-row justify-center items-center gap-10 p-4 h-auto md:h-[50vh]'>
  <Card2 img={f1} title={'Feature 1'} par={'Talk about some of the details of your offer with a focus on the value people get back.'}/>
  <Card2 img={f2} title={'Feature 2'} par={'Is there a pain point that your product or service resolves? Tell visitors about it here.'}/>
  <Card2 img={f3} title={'Feature 3'} par={'Alternatively, you could use this section to address some frequently asked questions.'}/>
</div>

<div className=' w-full  flex flex-col md:flex-row items-center justify-center p-4'>
  <img 
    src={women}
    alt="Description" 
    className="w-full md:w-[30vw] h-auto md:h-[60vh] object-cover" 
  />
  <div className='text-black m-4 w-full md:w-1/2 p-4'>
    <h1 className='text-4xl md:text-6xl'>Some more information about your business</h1>
    <p className='mt-5 text-lg'>Share a little about yourself as a business owner, or maybe describe what makes your product or service unique. Give visitors one more reason to care about your offer and want to buy from you.</p>
  </div>
</div>

<Footer/>
    </>
  )
}

export default App
