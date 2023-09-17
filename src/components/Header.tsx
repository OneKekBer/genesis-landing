import React from "react";
import { logo } from "../assets/assets";

const Header = () => {
   return (
      <div className="">
         <div className="flex w-full justify-between items-center my-20">
            <div>
               <img src={logo} alt="" />
            </div>
            <nav className="hidden md:flex gap-4">
               <div>About</div>
               <div>Services</div>
               <div>Pricing</div>
               <div>Contact</div>
            </nav>
            <div className="flex md:hidden">menu</div>
         </div>
      </div>
   );
};

export default Header;
