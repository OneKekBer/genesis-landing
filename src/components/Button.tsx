import React, { ReactNode } from "react";

interface Props {
   children: ReactNode;
   className: string;
}

const Button = ({ children, className }: Props) => {
   return (
      <div
         className={`cursor-pointer w-[170px] h-[57px] rounded-md flex justify-center hover:opacity-40 duration-300 items-center  ${
            className || ""
         }`}
      >
         {children}
      </div>
   );
};

export default Button;
