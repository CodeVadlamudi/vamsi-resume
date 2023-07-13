import React from "react";

function Skills() {
  const Brands = [
    { name: "./images/html.png" },
    { name: "./images/css-3.png" },
    { name: "./images/react.png" },
    { name: "./images/tw.png" },
    { name: "./images/styc.png" },
    { name: "./images/bootstrap.png" },
  ];
  return (
    <div className="max-w-7xl mx-auto my-24 px-10 space-y-10">
      <div className="text-center">
        <h2 className="text-[#FF5C00] text-3xl font-semibold">Skills</h2>
        <p className="text-lg">My Programming Language</p>
      </div>

      <div className="flex items-center flex-wrap justify-center w-full gap-5">
        {Brands.map((brand) => (
          <div className="shadow-md border p-10 h-40 w-40 flex items-center justify-center rounded-lg cursor-pointer hover:bg-slate-200 duration-200">
            <img
              src={brand.name}
              alt="brand-img"
              className="w-40 h-40 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
