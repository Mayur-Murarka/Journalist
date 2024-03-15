import React from "react";

const Review = () => {
  const techs = [
    {
      id: 1,
      view:"Mr.Arun's course transformed my approach to journalism. His guidance is invaluable!",
      title: "John Doe,Former Student",
      style: "shadow-gray-500",
    },
    {
      id: 2,
      view:"I higly recommend Mr.Arun's course to anyone serious about a carrer in journalism",
      title: "John Smith,Industry Professional",
      style: "shadow-gray-500",
    },
   
    
  ];

  return (
    <div
      name="review"
      className="bg-gradient-to-b from-gray-800 to-black w-full text-white md:h-screen p-4"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Review
          </p>
          <p className="py-6">Some of the reviw from our student</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {techs.map(({ id,view, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg border-white ${style}`}
            >
              <p>{view}</p>
              
              <center><p className="m-4">{title}</p></center>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Review;