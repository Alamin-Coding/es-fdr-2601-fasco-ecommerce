import { Link } from 'react-router';
import logo from '../assets/FASCO.png'
import { FaChevronDown } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className="bg-white mt-10 pb-4">
      <div className="container border-t-4 border-paragraph">
        <div className="mt-8">
            <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">

   
       <div>
        <img src={logo} alt="" />
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
      </div>

      
      <p className="mt-12 text-center font-poppins font-normal text-[16px] text-paragraph">
        Copyright © 2022 FASCO. All Rights Reserved.
      </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
