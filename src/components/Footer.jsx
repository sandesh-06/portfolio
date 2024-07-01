import React from 'react'

const Footer = () => {
    const commityClass = "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text"
  return (
    <footer className='py-2 border border-gray-700 border-r-0 border-l-0 border-b-0  w-full bg-black text-white sm:py-1 px-2 flex items-center justify-between text-xs md:text-sm xl:text-lg'>
      <div className="flex flex-col flex-shrink py-2">
        <span className={`text-lg font-bold font-hamSmith ${commityClass}`}>COMITY<sup className={`${commityClass}`}>&#8482;</sup></span>
        <span className="text-sm font-cata">&copy; 2024 COMITY. All rights reserved.</span>
        <span className="text-sm font-cata font-semibold">contactcomityteam@gmail.com</span>
      </div>
      <div className={`font-hamSmith hover:cursor-pointer`}>
        <span className={`${commityClass}`}>COMITY{" "}</span>Guidelines
      </div>
  </footer>
  
  )
}

export default Footer