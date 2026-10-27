import React from "react";
import instagram1 from "../assets/instabram1.png"
import instagram2 from "../assets/instagram2.png"

import instagram3 from "../assets/instagram3.png"
import instagram4 from "../assets/instagram4.png"
import instagram5 from "../assets/instagram5.png"
import instagram6 from "../assets/instagram6.png"
import instagram7 from "../assets/instagram7.png"

const InstagramGelary = () => {
  return (
    <section className="w-full bg-white overflow-hidden">

      {/* Heading */}
      <div className=" container px-5 py-12 text-center">
        <h2 className="mb-5 font-volkhov text-[46px] font-normal text-heading ">
          Follow Us On Instagram
        </h2>

        <p className="mx-auto max-w-xl text-[16px] font-poppins font-normal text-paragraph ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Scelerisque duis ultrices sollicitudin aliquam sem.
          Scelerisque duis ultrices sollicitudin.
        </p>
      </div>

      {/* Gallery */}
      <div className="flex flex-wrap items-center sm:flex-nowrap">
        <img className="h-full w-full object-cover hover:scale-110 transition-transform duration-300"  src={instagram1} alt="assets" />
        <img className="h-full w-full object-cover hover:scale-110 transition-transform duration-300" src={instagram2} alt="assets" />
        <img className="h-full w-full object-cover hover:scale-110 transition-transform duration-300" src={instagram3} alt="assets" />
        <img className="h-full w-full object-cover hover:scale-110 transition-transform duration-300" src={instagram4} alt="assets" />
        <img className="h-full w-full object-cover hover:scale-110 transition-transform duration-300" src={instagram5} alt="assets" />
        <img className="h-full w-full object-cover hover:scale-110 transition-transform duration-300" src={instagram6} alt="assets" />
        <img className="h-full w-full object-cover hover:scale-110 transition-transform duration-300" src={instagram7} alt="assets" />
       
      </div>

    </section>
  );
};

export default InstagramGelary;