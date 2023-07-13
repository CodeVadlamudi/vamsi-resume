import React from "react";
import { SocialIcon } from "react-social-icons";

function Header() {
  return (
    <header className="shadow-md">
      <div className="max-w-7xl mx-auto p-5 flex items-center justify-between">
        <a href="/" className="text-3xl font-bold">
          Vamsi<span className="text-[#FF5C00]">.</span>
        </a>

        <div className="flex items-center">
          <SocialIcon network="email" bgColor="transparent" fgColor="black" />
          <p className="hidden lg:block font-medium text-lg">Get in Touch!</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
