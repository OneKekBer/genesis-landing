import { hero } from "../../assets/assets";
import Button from "../../components/Button";

const Hero = () => {
   return (
      <div className="grid grid-cols-1 gap-5 text-center md:text-start md:grid-cols-2 mb-[100px]">
         <div className="">
            <div className="text-[50px] leading-tight">
               keeping memories
               <br /> with an
               <span className="font-bold"> Aesthetic Pictures and Videos</span>
            </div>
            <div className="my-5 text-md">
               The most reliable studio for Photography
               <br /> and Videography
            </div>
            <div className="flex justify-center md:justify-start gap-5">
               <Button className="bg-red ">Portfolio</Button>
               <Button className="bg-transparent border border-white rounded-md">
                  Book now
               </Button>
            </div>
         </div>
         <div className="h-[50vh]">
            <img className="object-cover w-full h-full" src={hero} alt="" />
         </div>
      </div>
   );
};

export default Hero;
