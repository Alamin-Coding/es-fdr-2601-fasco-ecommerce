
import { FiTrash2, FiMinus, FiPlus } from "react-icons/fi";

const ProductCart = ({ title, image, price, color}) => {
  return (
     <div className=" ">
   
  
       <div>
         <div>
             <img
        src={image}
        alt={title}
        className="object-cover overflow-hidden "
      />
        </div>

   
      {/* Product Details */}
      <div className="text-left">
        <h3 className="font-volkhov font-normal text-[16px] text-heading leading-[24px] mt-5 ">
        {title}
      </h3>

    
      <p className="font-jost font-normal text-[16px] text-paragraph mt-2">
         
        ${price}
      </p>
     <div className="flex gap-3 mb-3">
        <div className="w-6 h-6 rounded-full border-2 border-gray-400
                      flex items-center justify-center mt-2">
        <div className="w-4 h-4 rounded-full bg-amber-500" ></div>
        
      </div>
       <div className="w-6 h-6 rounded-full border-2 border-gray-400
                      flex items-center justify-center mt-2">
        <div className="w-4 h-4 rounded-full bg-black" ></div>
        
      </div>
     </div>
      </div>
       </div>
    </div>
  );
};

export default ProductCart;
