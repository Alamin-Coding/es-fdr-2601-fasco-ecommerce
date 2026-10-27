import swiper from '../PrductImage/swiper-container.png'
import slide from '../PrductImage/swiper-slide.png'
import slide01 from '../PrductImage/swiper-slide01.png'
import slide02 from '../PrductImage/swiper-slide02.png'
import slide03 from '../PrductImage/swiper-slide03.png'
import slide04 from '../PrductImage/swiper-slide04.png'
import slide05 from '../PrductImage/swiper-slide05.png'
import slide06 from '../PrductImage/swiper-slide06.png'
import Star from '../PrductImage/Star.svg'
import StarBlack from '../PrductImage/StarBlack.svg'
import StarBlank from '../PrductImage/StarBlank.svg'
import eyelogo from '../PrductImage/eyelogo.svg'
import arrow from '../PrductImage/arrow.svg'
import ask from '../PrductImage/ask.svg'
import share from '../PrductImage/share.svg'
import car from '../PrductImage/car.svg'
import ship from '../PrductImage/ship.svg'
import bankcard from '../PrductImage/bankcard.svg'


const ProductPage = () => {
  return (
    <div className='container'>
        <div className='flex gap-16.25'>
            <div className="productleft flex w-[615px]">
            <div className=''>
                <img src={slide} alt="Image" />
                <img src={slide01} alt="Image" />
                <img src={slide02} alt="Image" />
                <img src={slide03} alt="Image" />
                <img src={slide04} alt="Image" />
                <img src={slide05} alt="Image" />
                <img src={slide06} alt="Image" />
            </div>
            <div>
                <img src={swiper} alt="Image" />
            </div>
        </div>
        <div className="producright flex flex-col w-[615px]">
            <h3 className='font-volkhov text-sm leading-5 text-[#666666] mb-1.25'>FASCO</h3>
            <div className="flex justify-between items-center">
                <h1 className='font-volkhov text-3xl leading-10.5 text-black mb-1.25'>Denim Jacket</h1>
                <img className='w-11.25 h-11.25' src={Star} alt="Image" />
            </div>
            <div className='rating flex gap-3.25 items-center mb-6'>
                <div className='flex'>
                    <img className='w-3.75 h-3.75' src={StarBlack} alt="Star" />
                    <img className='w-3.75 h-3.75' src={StarBlack} alt="Star" />
                    <img className='w-3.75 h-3.75' src={StarBlack} alt="Star" />
                    <img className='w-3.75 h-3.75' src={StarBlack} alt="Star" />
                    <img className='w-3.75 h-3.75' src={StarBlank} alt="Star" />
                </div>
                <span className='font-jost text-[15px]  leading-[22.5px] text-black'>(3)</span>
            </div>
            <div className="price flex items-center mb-[30px]">
                <span className='font-volkhov text-3xl leading-8 text-black mr-[7.17px]'>$39.00</span>
                <span className='line-through font-jost text-base leading-[19.2px] text-[#666666] mr-[8.91px]'>$59.00</span>
                <button className='font-jost text-[11px] leading-4 text-white px-[9.69px] py-[2.25px] rounded-2xl bg-[#DA3F3F]'>SAVE <span>33%</span></button>
            </div>
            <div className="flex gap-2.5 mb-[31px]">
                <img className='w-5 h-5' src={eyelogo} alt="" />
                <p className='font-poppins text-base leading-6 text-[#8A8A8A]'>24 people are viewing this right now</p>
            </div>
            <div className="saleend flex justify-between px-3.5 py-3.25 bg-[#FDEFEE] border-[#F8CCCC] border-2 mb-[29px]">
                <h3 className='font-volkhov text-[18px] leading-7 text-[#FF7068]'>Hurry up! Sale ends in:</h3>
                <div className='flex gap-2'>
                    <span className='font-jost text-[20px] leading-8 text-[#FF7068]'>00</span>
                    <span className='font-jost text-[20px] leading-8 text-[#FF7068]'>:</span>
                    <span className='font-jost text-[20px] leading-8 text-[#FF7068]'>05</span>
                    <span className='font-jost text-[20px] leading-8 text-[#FF7068]'>:</span>
                    <span className='font-jost text-[20px] leading-8 text-[#FF7068]'>59</span>
                    <span className='font-jost text-[20px] leading-8 text-[#FF7068]'>:</span>
                    <span className='font-jost text-[20px] leading-8 text-[#FF7068]'>47</span>  
                </div>
            </div>
            {/* range */}
            <div className="range flex flex-col gap-3 mb-7.5">
                <h2 className='font-jost text-base leading-6 text-[#666666]'>Only <span className='font-jost font-bold'>9</span> item(s) left in stock!</h2>
                <div className='w-full h-1.25 bg-[#DEDEDE] rounded-2xl'>
                    <div className='w-[10%] h-1.25 bg-[#EF2D2D] rounded-2xl'></div>
                </div>
            </div>
            {/* //Size */}
            <div className='mb-3.5'>
                <h2 className='font-volkhov text-base leading-6 text-black font-semibold mb-3'>Size: M</h2>
                <div className="flex gap-3">
                    <span className='font-poppins text-[18px] leading-6.75 text-white bg-black rounded-[5px] w-11.25 h-11.25 flex items-center justify-center'>M</span>
                    <span className='font-poppins text-[18px] leading-6.75 text-black border-2 border-[#EEEEEE] rounded-[5px] w-11.25 h-11.25 flex items-center justify-center'>L</span>
                    <span className='font-poppins text-[18px] leading-6.75 text-black border-2 border-[#EEEEEE] rounded-[5px] w-11.25 h-11.25 flex items-center justify-center'>XL</span>
                    <span className='font-poppins text-[18px] leading-6.75 text-black border-2 border-[#EEEEEE] rounded-[5px] w-11.25 h-11.25 flex items-center justify-center'>XXL</span>
                </div>
                
            </div>
            <div className='mb-7.5'>
                    <h2 className='font-volkhov text-base leading-6 text-black font-semibold mb-3'>Color: Blue</h2>
                    <div className="flex gap-2.5">
                        <div className='w-10 h-10 bg-[#8DB4D2] rounded-full'></div>
                        <div className='w-10 h-10 bg-black rounded-full'></div>
                        <div className='w-10 h-10 bg-[#FFD1DC] rounded-full drop-shadow-black-500 '></div>
                    </div>
                </div>
            {/* Quantity */}
            <div>
                <h2 className='font-volkhov text-base leading-6 text-black font-semibold mb-3'>Quantity</h2>
                <div className='flex gap-10'>
                <div className="flex gap-2 border-2 border-[#EEEEEE] w-[128px] h-[46px] items-center justify-around">
                    <span>-</span>
                    <span>1</span>
                    <span>+</span>
                </div>
                <a className='px-[179px] py-[11px] whitespace-nowrap border-2 border-black font-volkhov text-base leading-6 mb-16.25 rounded-[5px]' href="#">Add to cart</a>
            </div>
            </div>
            {/* opinion */}
            <div className="flex gap-7.5">
                <div className="flex gap-2">
                    <img className='w-5 h-5' src={arrow} alt="Image" />
                    <h2 className='font-jost text-base leading-6 text-black'>Compare</h2>
                </div>
                <div className="flex gap-2">
                    <img className='w-5 h-5' src={ask} alt="Image" />
                    <h2 className='font-jost text-base leading-6 text-black'>Ask a question</h2>
                </div>
                <div className="flex gap-2">
                    <img className='w-5 h-5' src={share} alt="Image" />
                    <h2 className='font-jost text-base leading-6 text-black'>Share</h2>
                </div>
            </div>
            {/* delivery */}
            <div className='my-7.5'>
                <div className="flex mb-2 gap-2">
                    <img src={car} alt="Image" />
                    <h2 className='font-volkhov text-base leading-6'><span className='font-bold'>Estimated Delivery:</span><span className='font-jost text-base leading-6'> Jul 30 - Aug 03</span></h2>
                </div>
                <div className="flex gap-2">
                    <img src={ship} alt="Image" />
                    <h2 className='font-jost text-base leading-6'><span className='font-bold'>Free Shipping & Returns: </span><span className='font-jost text-base leading-6'> On all orders over $75</span></h2>
                </div>
            </div>

            {/* Bank */}
            <div className='flex flex-col gap-5.25 items-center justify-center'>
                <img className='w-[320px]' src={bankcard} alt="Image" />
                <h2 className='font-volkhov text-base'>Guarantee safe & secure checkout</h2>
            </div>
        </div>
        </div>
    </div>
  )
}

export default ProductPage