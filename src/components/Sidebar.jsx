import React from 'react'

const Sidebar = () => {
  return (
    <div>
      <div className='text-left '>
            <h2 className="font-volkhov font-normal text-heading text-[30px] leading-[36px] mb-5">Filters</h2>

            <h3 className="font-volkhov font-normal tex-[18px] text-paragraph mb-3">Size</h3>
            <div className="flex items-center justify-start gap-3 mb-6">
              <div className=" flex items-center justify-center border-2 border-paragraph w-10 h-10 text-sm">S</div>
              <div className="flex items-center justify-center border-2 border-paragraph w-10 h-10 text-sm">M</div>
              <div className=" flex items-center justify-center border-2 border-paragraph w-10 h-10 text-sm">L</div>
              <div className=" flex items-center justify-center border-2 border-paragraph w-10 h-10 text-sm">XL</div>
            </div>

            <h3 className="font-volkhov font-normal text-[18px] text-heading mb-3">Colors</h3>
            <div className="flex flex-wrap gap-2 mb-6">
              <div className="w-4 h-4 rounded-full bg-red-400" />
              <div className="w-4 h-4 rounded-full bg-orange-400" />
              <div className="w-4 h-4 rounded-full bg-yellow-300" />
              <div className="w-4 h-4 rounded-full bg-green-400" />
              <div className="w-4 h-4 rounded-full bg-blue-400" />
              <div className="w-4 h-4 rounded-full bg-purple-400" />
              <div className="w-4 h-4 rounded-full bg-pink-400" />
              <div className="w-4 h-4 rounded-full bg-red-400" />
              <div className="w-4 h-4 rounded-full bg-orange-400" />
              <div className="w-4 h-4 rounded-full bg-yellow-300" />
              <div className="w-4 h-4 rounded-full bg-green-400" />
              <div className="w-4 h-4 rounded-full bg-blue-400" />
              <div className="w-4 h-4 rounded-full bg-purple-400" />
              <div className="w-4 h-4 rounded-full bg-pink-400" />
            </div>

            <h3 className="font-volkhov font-normal text-[18px] text-heading mb-3">Prices</h3>
            <div className=" mb-6">
              <p className=' mb-4 font-poppins font-normal text-[18px] text-paragraph'>$0 - $50</p>
              <p className=' mb-4 font-poppins font-normal text-[18px] text-paragraph'>$50 - $100</p>
              <p className=' mb-4 font-poppins font-normal text-[18px] text-paragraph'>$100 - $150</p>
              <p className=' mb-4 font-poppins font-normal text-[18px] text-paragraph'>$150 - $200</p>
              <p className=' mb-4 font-poppins font-normal text-[18px] text-paragraph'>$200 - $300</p>
            </div>

            <h3 className="font-volkhov font-normal text-[18px] text-heading mb-3">Brands</h3>
            <div className=" mb-6">
              <p className=' mb-4 font-poppins font-normal text-[18px] text-paragraph'>Minimog</p>
              <p className=' mb-4 font-poppins font-normal text-[18px] text-paragraph'>Retrolie</p>
              <p className=' mb-4 font-poppins font-normal text-[18px] text-paragraph'>Brook</p>
              <p className=' mb-4 font-poppins font-normal text-[18px] text-paragraph'>Vagabond</p>
            </div>

            <h3 className="font-volkhov font-normal text-[18px] text-heading mb-3">Collections</h3>
            <div className=" mb-6">
              <p className=' mb-4 font-poppins font-normal text-[18px] text-paragraph'>All products</p>
              <p>Best sellers</p>
              <p>New arrivals</p>
              <p>Accessories</p>
            </div>

            <h3 className="font-volkhov font-normal text-[18px] text-heading mb-3">Tags</h3>
            <div className='flex flex-wrap gap-2   mb-6'>
              <p className='  font-poppins font-normal text-[12px]  text-paragraph'>  Beachwear</p>
              <p className='  font-poppins font-normal text-[12px] text-paragraph'>Belt</p>
              <p className='  font-poppins font-normal text-[12px] text-paragraph'>Denim</p>
              <p className='  font-poppins font-normal text-[12px] text-paragraph'>Minimog</p>
              <p className='  font-poppins font-normal text-[12px] text-paragraph'>Vagabond</p>
              <p className='  font-poppins font-normal text-[12px] text-paragraph'>Sunglasses</p>
              <p className='  font-poppins font-normal text-[12px] text-paragraph'>Beachwear</p>
              <p className='  font-poppins font-normal text-[12px] text-paragraph'>Sandal</p>
               <p className='  font-poppins font-normal text-[12px] text-paragraph'>Belt</p>
                <p className='  font-poppins font-normal text-[12px] text-paragraph'>Bags</p>
                 <p className='  font-poppins font-normal text-[12px] text-paragraph'>Snacker</p>
                  <p className='  font-poppins font-normal text-[12px] text-paragraph'>Belt</p>

              
            </div>
          </div>
    </div>
  )
}

export default Sidebar
