import React from "react";

function About() {
  return (
    <div className="bg-[#F1F1F1] py-24">
      <div className="max-w-7xl mx-auto px-10 flex flex-col lg:flex-row items-center justify-between space-y-10 lg:space-y-0">
        <div className="lg:w-1/2 flex items-center justify-center">
          <div className="relative mt-5 w-80 h-96 before:absolute before:-top-4 before:-left-4 before:border-t-4 before:border-l-4 before:w-60 before:h-60 before:border-[#FF5C00] after:absolute after:-bottom-4 after:-right-4 after:border-b-4 after:border-r-4 after:w-60 after:h-60 after:border-[#FF5C00]">
            <img
              src="./images/about-img.jpg"
              alt="about-img"
              className="w-80 h-96 object-cover rounded-sm"
            />
          </div>
        </div>

        <div className="lg:w-1/2 md:w-10/12 space-y-5 md:ml-4 flex items-start flex-col text-justify">
          <h2 className="text-[#FF5C00] text-3xl font-semibold">About Me</h2>
          <p className="text-lg">
            Hi there! I am Vadlamudi Vamsi and Junior Software Developer. I have
            a motivations that codes me to my best. This challenged myself daily
            and learned new skills that helped me to do better work. For
            example, I learned how to use React to enhance the web page of our
            pages.
          </p>
          <button className="border-2 border-[#FF5C00] px-20 py-3 text-lg hover:bg-[#FF5C00] hover:text-white duration-200 rounded-sm">
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
