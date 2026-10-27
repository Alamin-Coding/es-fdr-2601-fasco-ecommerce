import React from 'react'
import subscribe1 from '../assets/subscribe1.png'
import subscribe2 from '../assets/subscribe2.png'


const SubscribeSection = () => {
  return (
    <>
   <section className="mt-[196px] bg-white">

      <div className='container mx-auto'>
       
      <div className='flex  items-center'>
        <div>
        <img
        src={subscribe1}
        alt="Fashion model"

      />

      </div>
      
    
      <div className="relative z-20 w-full max-w-2xl text-center">

        <h2 className="font-volkhov font-normal text-[46px] text-heading pb-5">
          Subscribe To Our Newsletter
        </h2>

        <p className="font-poppins font-normal text-[16px] text-paragraph pb-7.5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Scelerisque duis ultrices sollicitudin aliquam sem.
          Scelerisque duis ultrices sollicitudin.
        </p>

        {/* Email Form */}
        <form className="mt-7">
          <input
            type="email"
            placeholder="enter your email"
            className="w-full bg-white px-7 py-6 text-base text-gray-800  border-4 border-paragraph  placeholder:text-gray-500 sm:text-xl"
          />

          <button
            type="submit"
            className="mt-8 comon_button_black "
          >
            Subscribe Now
          </button>
        </form>

      </div>

  
      <div>
        <img
        src={subscribe2}
        alt="Fashion model"
        className=""
      />
      </div>
      </div>


      </div>
    </section>
    </>
  )
}

export default SubscribeSection
