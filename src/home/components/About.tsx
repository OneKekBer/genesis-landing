import React from "react";
import { more, pricing } from "../../assets/assets";
import Button from "../../components/Button";

const About = () => {
   return (
      <div className="text-center mb-[150px] justify-center md:text-start md:justify-start">
         <div className="grid gap-5 grid-cols-1 md:grid-cols-2 mb-[100px]">
            <div>
               <img src={pricing} alt="" />
            </div>
            <div>
               <div className="text-lg">
                  Well-Equipped Studio Set Up for both Video and Photo
                  Production
               </div>
               <div className="text-sm my-5">
                  We have current equipment to facilitate studio productions
               </div>
               <Button className="bg-blue hover:opacity-80  md:mx-0 mx-auto">
                  View Pricing
               </Button>
            </div>
         </div>

         <div className="grid gap-5 grid-cols-1 md:grid-cols-2">
            <div className="md:order-2">
               <img src={more} className="s" alt="" />
            </div>
            <div className="">
               <div className="text-lg">
                  Over 10 Years of Experience in Video Production
               </div>
               <div className="text-sm my-5">
                  We have experienced cinematographers with current equipment
                  and tools to produce awesome footage
               </div>
               <Button className="bg-violet hover:opacity-80 mx-auto md:mx-0">
                  Read More
               </Button>
            </div>
         </div>
      </div>
   );
};

export default About;
