import React from "react";
import pikeyImage from "../assets/pikyImage.png";

const PeakyBlinderSection = () => {
  return (
   
    <>
    <div className="">
      <div className=" flex  gap-10  w-full overflow-hidden bg-[#d9d9d9]">
         <img className="block w-1/2" src={pikeyImage} alt="Peaky Blinders outfit" />
   
      <div className="">
        <div className="flex items-center justify-center ">
         

      
      <div className=" mt-20">
        <p className="text-sm font-poppins font-normal text-paragraph">Women Collection</p>
        <h2 className="mt-3 font-volkhov font-normal text-[48px] text-heading">Peaky Blinders</h2>
 
        <p className="mt-8 font-poppins font-normal text-[16px] text-paragraph">DESCRIPTION</p>
        <p className="mt-4 max-w-md text-sm font-poppins">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices
          sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Scelerisque duis.
        </p>

        <div className="mt-5 flex items-center gap-3">
          <p className="text-sm text-paragraph">Size:</p>
          <p className="rounded-xl bg-black px-5 py-1 text-sm text-white">M</p>
        </div>

        <p className="my-6 text-2xl font-medium">$100.00</p>

        <button className="comon_button_black ">
          Buy Now
        </button>
      </div>
        </div>
      </div>
    </div>
    </div>
    </>
  );
};

export default PeakyBlinderSection;