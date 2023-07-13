import React from "react";

function Projects() {
  return (
    <div className="bg-[#F1F1F1] py-24 px-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[#FF5C00] text-3xl font-semibold mb-10 text-center">
          Projects
        </h2>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5">
          <div className="h-60 border-2 border-[#FF5C00] border-opacity-40 rounded-md overflow-hidden hover:shadow-md cursor-pointer duration-200 flex items-center justify-center bg-white shadow-xl">
            <img
              src="./images/project1.png"
              alt=""
              className="w-full h-full object-cover block"
            />
          </div>
          <div className="h-60 border-2 border-[#FF5C00] border-opacity-40 rounded-md overflow-hidden hover:shadow-md cursor-pointer duration-200 flex items-center justify-center bg-white">
          <img
              src="./images/project2.png"
              alt=""
              className="w-full h-full object-cover block"
            />
          </div>
          <div className="h-60 border-2 border-[#FF5C00] border-opacity-40 rounded-md overflow-hidden hover:shadow-md cursor-pointer duration-200 bg-white flex items-center justify-center">
          <img
              src="./images/project3.png"
              alt=""
              className="w-full h-full object-cover block"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
