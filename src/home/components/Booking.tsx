import React from "react";
import Button from "../../components/Button";

const Booking = () => {
   return (
      <div>
         <div className="min-h-[300px] p-5 mb-[100px] flex flex-col items-center justify-center text-center bg-opacity-30 w-full bg-gradient-to-r from-blue to-violet rounded-md">
            <div className="text-md">are you ready?</div>
            <div className="text-xl mb-2 font-bold">
               be a part of the
               <br /> next big thing
            </div>
            <Button className="bg-white text-black">Book now</Button>
         </div>
      </div>
   );
};

export default Booking;
