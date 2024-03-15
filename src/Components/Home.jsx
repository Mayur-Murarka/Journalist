import React, { useEffect, useRef } from 'react';
import Journalism from "../assets/Journalism.jpg";
import {MdOutlineKeyboardArrowRight} from "react-icons/md";
import { Link } from 'react-scroll';
const Home = () => {
  return (
    <div
     name="home"
     className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800">

    <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
    <div className="flex flex-col justify-center h-full px-5">
    <p className="text-gray-300 py-4 max-w-md">
   <h1> Unveil Journalism:A Journey with Mr.Arun</h1>
    </p>

    <div>
    <Link to="course" smooth duration={500} className="group text-white w-fit px-6 py-3 my-2 flex item-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
    Course Detail
    <span className="group-hover:rotate-90 duration-300">
    <MdOutlineKeyboardArrowRight size={25}
    className="ml-1"/>
    </span>
    </Link>
    </div>
    </div>
    <div>
      <img src={Journalism} alt="my profile" className="rounded-2xl mx-auto w-2/3 md:w-full"/>
    </div>
    </div>
  </div>
    
  )
}

export default Home;
