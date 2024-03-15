import React from 'react';
import Journalism from "../assets/Journalism.jpg"
import { Link } from 'react-scroll';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

const Course = () => {
  
  return (
   <>
    <div
     name="course"
     className="h-screen w-full bg-gradient-to-b from-black to-gray-800 text-white">

     <div className="max-w-screen-lg mx-auto flex justify-center h-full px-4 md:flex-row">
      <div>
        <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Course
          </p>
      </div>

     <div className="flex  h-full px-5 items-center">

      <div className="w-full flex justify-center">
      <img src={Journalism} alt="Journalism" className="rounded-2xl mx-auto w-2/3 md:w-full hover:scale-105 duration-200"/>
      </div>
      <div className="w-full px-10">
        <div space-y-5>
      <p>
        <h1 className="font-semibold">Features</h1>
        <li>Duration:-2 week</li>
        <li>Learn from real-life example</li>
        <li>Detail Case Study</li>
        <li>Interactive Sessions</li>
        <li><b>Fees:-Rs.499 only</b></li>
        <p>Join Mr.Arun for 2 week online course where you'll gain insight and skills essential for success in Journalism</p>
        <h2>Ready to start your Journalism journey? Click below!</h2>
        <div>
    <Link to="contact" smooth duration={500} className="group text-white w-fit px-6 py-3 my-2 flex item-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
    Enroll Now
    <span className="group-hover:rotate-90 duration-300">
    <MdOutlineKeyboardArrowRight size={25}
    className="ml-1"/>
    </span>
    </Link>
    </div>
      </p>
      </div>
      </div>
    </div>
    </div>
    </div>   
   </>        
  );
};

export default Course;


