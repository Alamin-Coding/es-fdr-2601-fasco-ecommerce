import { FaStar } from "react-icons/fa";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white p-2 shadow-md rounded-2xl ">
      <img
        src={product.img} alt={product.name} className="h-55 w-full object-cover rounded-2xl"
      />

      <div className="mt-6 flex items-start justify-between">
        <div>
          <h3 className="text-sm font-medium text-[#1a1a1a]">{product.name}</h3>
          <p className="text-[10px] text-[#8A8A8A]">{product.brand}</p>
        </div>
        <div className="flex gap-0.5 text-[#FF9529]">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} size={10} />
          ))}
        </div>
      </div>

      <p className="mt-3 text-[10px] text-[#484848]">
        ({product.reviews}) Customer Reviews
      </p>

      <div className="mt-3 flex items-center justify-between">
        <span className="text-sm font-medium text-[#1a1a1a]">${product.price}</span>
        <span className="text-[10px] text-[#FF4646]">Almost Sold Out</span>
      </div>
    </div>
  );
};

export default ProductCard;