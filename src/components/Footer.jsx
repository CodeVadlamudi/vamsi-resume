import React from "react";
import { SocialIcon } from "react-social-icons";

function Footer() {
  return (
    <footer className="bg-[#363636] py-5 px-10">
      <div className="max-w-7xl mx-auto text-center flex items-center justify-between flex-col sm:flex-row">
        <div className="flex items-center space-x-6">
          <img
            src="./images/avatar.jpg"
            alt="footer-img"
            className="w-10 h-10 object-cover rounded-sm"
          />
          <p className="text-white text-lg">
            Make by <a href="/">Vadlamudi Vamsi</a>
          </p>
        </div>

        <div>
          <SocialIcon network="github" bgColor="transparent" fgColor="white" />
          <SocialIcon
            network="instagram"
            bgColor="transparent"
            fgColor="white"
          />
          <SocialIcon
            network="telegram"
            bgColor="transparent"
            fgColor="white"
          />
          <SocialIcon
            network="facebook"
            bgColor="transparent"
            fgColor="white"
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
