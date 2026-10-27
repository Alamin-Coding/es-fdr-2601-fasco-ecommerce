

import logo from '../assets/FASCO.png'
import { FaChevronDown } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router";

const Header = () => {
  return (
    <nav className=" bg-white mt-20">
      <div className=" container  mx-auto px-6  flex items-center justify-between">

   
        <div>
            <img src={logo} alt="logo" />
        </div>

       <ul className="flex flex-wrap justify-center gap-6 ">
                 <li>
                   <Link to="/Home" className='font-poppins font-normal text-[16px] text-paragraph' >Home</Link>
                   </li>
                   <li>
                   <Link to="/Shop" className='font-poppins font-normal text-[16px] text-paragraph' >Shop</Link>
                   </li>
                   <li>
                   <Link to="/Products" className='font-poppins font-normal text-[16px] text-paragraph' >Products</Link>
                   </li>
                   <li>
                   <Link to="/Pages" className=' flex gap-3 items-center justify-center font-poppins font-normal text-[16px] text-paragraph' >
                   Psges
                   <FaChevronDown />
                   </Link>
                   </li>
               </ul>
        

        {/* Icons */}
        <div className="flex items-center gap-6">
          <Link to="/search" className='text-[24px] text-paragraph' >
           <IoSearchOutline  />
          </Link>

          <Link to="/account" className='text-[24px] text-paragraph' >
            <FaRegUser  />
          </Link>

          <Link to="/wishlist" className='text-[24px] text-paragraph' >
          <FaRegStar />
          </Link>

          <Link to="/cart" className='text-[24px] text-paragraph' >
           <FiShoppingBag />
          </Link>
        </div>

      </div>
    </nav>
  );
};

export default Header;
