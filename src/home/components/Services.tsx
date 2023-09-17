import { icon1, icon2, icon3, icon4 } from "../../assets/assets";

const Services = () => {
   return (
      <div className="mb-[150px]">
         <div className="text-md">Affiliate Services</div>
         <div className="flex flex-col sm:flex-row items-center justify-center gap-5 p-5 bg-opacity-10 bg-white">
            <div className="flex items-center gap-2">
               <img className="icon" src={icon4} alt="" />
               <div>Photo Book</div>
            </div>
            <div className="flex items-center gap-2">
               <img className="icon" src={icon2} alt="" />
               <div>Videography</div>
            </div>
            <div className="flex items-center gap-2">
               <img className="icon" src={icon1} alt="" />
               <div>Photo Frame</div>
            </div>
            <div className="flex items-center gap-2">
               <img className="icon" src={icon3} alt="" />
               <div>Passport Picture</div>
            </div>
         </div>
      </div>
   );
};

export default Services;
