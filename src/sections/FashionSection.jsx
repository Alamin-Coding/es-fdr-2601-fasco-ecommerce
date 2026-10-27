import React from 'react'
import ProductCart from "../components/ProductCart"
import Sidebar from "../components/Sidebar"
import shopImage from "../assets/shopImage.png"
import { FaChevronRight } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa6";
import { Link } from 'react-router'

const FashionSection = () => {
  return (
    <>
      <section className=" mt-20 mb-17.5 ">
        <div className="container mx-auto text-center">
          <div className=" ">
          <h1 className="font-volkhov font-bold text-heading text-[42px]">Fashion</h1>
        <div className='flex items-center  justify-center gap-2'>
          <a href="/Home" className='font-jost font-normal text-[16px] text-paragraph'>Home</a>
          <FaChevronRight className='text-paragraph' />
          <a href="/Fashion" className='font-jost font-normal text-[16px] text-paragraph'>Fashion</a>
        </div>
        </div>
        <div className="  mt-[148px] pb-16 ">
        <div className="grid grid-cols-[3fr_7fr]  gap-6  ">
          <div className=" ">
            <Sidebar/>
          </div>
          <div className=" ">
            <div>
            <div className="flex justify-between items-center mb-5 ">
              <div className='flex items-center gap-3'>
                <p className="font-volkhov font-normal text-heading text-[24px]">
                Best selling
                 
                </p>
                 <FaChevronDown />

              </div>
              <div className="flex gap-2">
                <button className="bg-gray-100 p-2">▦</button>
                <button className="bg-gray-100 p-2">▤</button>
                <button className="bg-gray-100 p-2">▥</button>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-5">
              <ProductCart
              image={shopImage}
             title={"Rounded Red Hat"}
             price={"$8.00"}
            />
            <ProductCart
              image={shopImage}
             title={"Rounded Red Hat"}
             price={"$8.00"}
           
            />
            <ProductCart
              image={shopImage}
             title={"Rounded Red Hat"}
             price={"$8.00"}
             
            />
            <ProductCart
              image={shopImage}
             title={"Rounded Red Hat"}
             price={"$8.00"}
             
            />
            <ProductCart
              image={shopImage}
             title={"Rounded Red Hat"}
             price={"$8.00"}
             
            />
            <ProductCart
              image={shopImage}
             title={"Rounded Red Hat"}
             price={"$8.00"}
            
            />
            <ProductCart
              image={shopImage}
             title={"Rounded Red Hat"}
             price={"$8.00"}
             
            />
            <ProductCart
              image={shopImage}
             title={"Rounded Red Hat"}
             price={"$8.00"}
             
            />
            <ProductCart
              image={shopImage}
             title={"Rounded Red Hat"}
             price={"$8.00"}
             
            />
            </div>
          </div> 

        </div>
        </div>
        </div>

        <div>
            <div className='flex items-center justify-center gap-3'>
               <Link to="/home" className=" bg-gray-300 rounded-full  w-8 h-8 flex items-center justify-center  hover:bg-black hover:text-white transition-all duration-300 " >1</Link>
               <Link to="/shop" className=" rounded-full w-8 h-8 flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300" >2</Link>
               <Link to="/page3" className=" rounded-full w-8 h-8 flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300" >3</Link>
               <Link to="/page4" className=" rounded-full w-8 h-8 flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300" >4</Link>
            </div>
        </div>




        </div>
      </section>
    </>
  )
}

export default FashionSection
