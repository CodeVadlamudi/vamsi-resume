import React from "react";

function Buttons() {
  return (
    <div className="space-x-4 space-y-2">
      <button
        id="#home"
        className="px-4 py-2 border-[#FF5C00] border rounded-md font-medium hover:bg-[#FF5C00] hover:text-white duration-300 transition-all"
      >
        Home
      </button>
      <button
        id="#about"
        className="px-5 py-2 border-[#FF5C00] border rounded-md font-medium hover:bg-[#FF5C00] hover:text-white duration-300 transition-all"
      >
        About Me
      </button>
      <button
        id="#Skills"
        className="px-5 py-2 border-[#FF5C00] border rounded-md font-medium hover:bg-[#FF5C00] hover:text-white duration-300 transition-all"
      >
        Skills
      </button>
      <button
        id="#project"
        className="px-5 py-2 border-[#FF5C00] border rounded-md font-medium hover:bg-[#FF5C00] hover:text-white duration-300 transition-all"
      >
        Projects
      </button>
      <button
        id="#contact"
        className="px-5 py-2 border-[#FF5C00] border rounded-md font-medium hover:bg-[#FF5C00] hover:text-white duration-300 transition-all"
      >
        Contact Me
      </button>
    </div>
  );
}

export default Buttons;
