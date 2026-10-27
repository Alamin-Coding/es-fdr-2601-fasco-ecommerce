import leftModel from "../../assets/heromodel1.png"
import rightModel from "../../assets/heromodel2.png"
import topImg from "../../assets/heromodel3.png"
import bottomImg from "../../assets/heromodel4.png"
const Hero = () => {
  return (
     <section className="bg-white">
      <div className="container max-w-[1281px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr_1fr] gap-4 items-center text-center">

          {/* Left image */}
          <div className="hidden h-full items-end justify-center bg-[#E0E0E0] lg:flex">
            <img src={leftModel} alt="Model" className="h-[76%] w-auto object-contain" />
          </div>

          {/* Center content */}
          <div className="flex flex-col items-center text-center">
            <img src={topImg} alt="Models" className="w-full h-[20%]  rounded-lg object-cover" />

            <div className="py-6">
              <h1 className="text-6xl font-bold ">
                ULTIMATE
              </h1>
                <h1 className="text-[120px] leading-none text-transparent [-webkit-text-stroke:1px_#1a1a1a]">
                 SALE
               </h1>
              
              <p className="text-sm tracking-widest text-[#484848] mt-2">
                NEW COLLECTION
              </p>
              <button className='black-button ml-15'>
                Shop Now
              </button>
            </div>

            <img src={bottomImg} alt="Models" className="h-[20%] w-full rounded-lg object-cover" />
          </div>

          {/* Right image */}
          <div className="hidden h-full items-end justify-center bg-[#E0E0E0] lg:flex">
            <img src={rightModel} alt="Model" className="h-[76%] w-auto object-contain" />
          </div>

        </div>
      </div>
    </section>
  
  )
}

export default Hero
