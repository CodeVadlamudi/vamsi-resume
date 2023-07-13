import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { SocialIcon } from "react-social-icons";
import Buttons from "./Buttons";

function Hero() {
  const [text] = useTypewriter({
    words: ["Vadlamudi Vamsi", "React Front-End Developer", "UI Designer"],
    loop: true,
  });
  return (
    <div className="max-w-7xl mx-auto px-10 my-24">
      <div className="flex justify-between lg:flex-row-reverse flex-col items-center">
        <div className="lg:w-1/2 flex justify-end">
          <img
            src="./images/hero-img.jpg"
            alt="hero-img"
            className="w-60 h-60 object-cover lg:w-[450px] lg:h-[450px]"
          />
        </div>

        <div className="text-center lg:text-start lg:w-1/2 space-y-2 mt-5">
          <h4 className="text-lg font-medium text-gray-500">Hi, Everyone!</h4>
          <h1 className="text-3xl md:text-4xl font-bold">
            I am <span className="text-[#FF5C00]">{text}</span>
            <Cursor cursorColor="#FF5C00" />
          </h1>
          <h3 className="uppercase font-medium tracking-[4px] text-black">
            Junior Software Developer
          </h3>
          <p>I eat, play, travel and breathe React!</p>
          <div>
            <SocialIcon
              network="github"
              bgColor="transparent"
              fgColor="black"
            />
            <SocialIcon
              network="instagram"
              bgColor="transparent"
              fgColor="black"
            />
            <SocialIcon
              network="telegram"
              bgColor="transparent"
              fgColor="black"
            />
            <SocialIcon
              network="facebook"
              bgColor="transparent"
              fgColor="black"
            />
          </div>

          <Buttons />
        </div>
      </div>
    </div>
  );
}

export default Hero;
