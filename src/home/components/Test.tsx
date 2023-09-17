import { ava1, ava2, ava3 } from "../../assets/assets";

const Test = () => {
   return (
      <div className="mb-[100px]">
         <div className="text-center">
            <div className="text-md">testimonials</div>
            <div className="text-lg mb-[150px]">
               Read what others have to say
            </div>
            <div className="flex flex-col  md:flex-row items-center gap-10 md:gap-0 justify-center md:justify-between">
               <div className="text-md relative p-2 rounded-lg bg-blue bg-opacity-30 max-w-[80vw] md:max-w-[300px] flex items-center justify-center flex-col">
                  <img
                     src={ava1}
                     className="icon relative -top-10 h-[150px] w-[150px] rounded-full"
                     alt="ava1"
                  />
                  <div className="mb-5">olivia cole</div>
                  <div>
                     {" "}
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                     Nunc ullamcorper scelerisque mi, in malesuada felis
                     malesuada vel.{" "}
                  </div>
               </div>

               <div className="text-md relative p-2 rounded-lg bg-blue bg-opacity-30 max-w-[80vw] md:max-w-[300px] flex items-center justify-center flex-col">
                  <img
                     src={ava2}
                     className="icon relative -top-10 h-[150px] w-[150px] rounded-full"
                     alt="ava1"
                  />
                  <div className="mb-5">olivia cole</div>
                  <div>
                     {" "}
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                     Nunc ullamcorper scelerisque mi, in malesuada felis
                     malesuada vel.{" "}
                  </div>
               </div>

               <div className="text-md relative p-2 rounded-lg bg-blue bg-opacity-30 max-w-[80vw] md:max-w-[300px] flex items-center justify-center flex-col">
                  <img
                     src={ava3}
                     className="icon relative -top-10 h-[150px] w-[150px] rounded-full"
                     alt="ava1"
                  />
                  <div className="mb-5">olivia cole</div>
                  <div>
                     {" "}
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                     Nunc ullamcorper scelerisque mi, in malesuada felis
                     malesuada vel.{" "}
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Test;
