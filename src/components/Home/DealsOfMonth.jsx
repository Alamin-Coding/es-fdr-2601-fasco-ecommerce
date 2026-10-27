
import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Countdown from "../ui/Countdown";
import deal1 from "../../assets/carosol3.png";
import deal2 from "../../assets/carosol2.png";
import deal3 from "../../assets/carosol1.jpg";
import deal4 from "../../assets/carosol2.png";
import Button from "../ui/Button";


const slides = [
  { id: 1, img: deal1, title: "Spring Sale", discount: "30% OFF" },
  { id: 2, img: deal2, title: "Summer Sale", discount: "25% OFF" },
  { id: 3, img: deal3, title: "Winter Sale", discount: "40% OFF" },
  { id: 4, img: deal4, title: "Party Sale", discount: "20% OFF" },
];

const CARD_W = 280;
const GAP = 20;

const DealsOfMonth = () => {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => Math.max(i - 1, 0));
  const next = () => setIndex((i) => Math.min(i + 1, slides.length - 1));

  return (
    <section className="bg-[#F8F8F8] py-20">
      <div className="container mx-auto flex max-w-[1281px] flex-col gap-10 lg:flex-row">

        {/* Left content */}
        <div className="relative lg:w-[400px] lg:shrink-0">
          <h2 className="font-serif text-4xl text-[#1a1a1a]">Deals Of The Month</h2>
          <p className="mt-5 mb-6 max-w-[320px] text-sm leading-6 text-[#484848]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
            duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices
            sollicitudin
          </p>

         <Button text="Buy Now"/>

          <h3 className="mt-10 text-xl font-medium">Hurry, Before It's Too Late!</h3>
          <div className="mt-4">
            <Countdown />
          </div>

          {/* Arrows */}
          <div className="mt-8 flex gap-3 lg:absolute lg:bottom-0 lg:right-0 lg:mt-0">
            <button
              onClick={prev}
              disabled={index === 0}
              className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white shadow-md disabled:cursor-not-allowed disabled:opacity-40"
            >
              <FiChevronLeft />
            </button>
            <button
              onClick={next}
              disabled={index === slides.length - 1}
              className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white shadow-md disabled:cursor-not-allowed disabled:opacity-40"
            >
              <FiChevronRight />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div className="min-w-0 flex-1">
          <div className="overflow-hidden">
            <div
              className="flex items-start transition-transform duration-500 ease-in-out"
              style={{
                gap: GAP,
                transform: `translateX(-${index * (CARD_W + GAP)}px)`,
              }}
            >
              {slides.map((slide, i) => (
                <div
                  key={slide.id}
                  className="relative shrink-0"
                  style={{ width: CARD_W }}
                >
                  <img
                    src={slide.img}
                    alt={slide.title}
                    className={`w-full object-cover transition-all duration-500 ${
                      i === index ? "h-[410px]" : "h-[345px]"
                    }`}
                  />

                  {i === index && (
                    <div className="absolute bottom-4 left-4 bg-white px-6 py-4">
                      <p className="flex items-center gap-2 text-xs text-[#484848]">
                        <span>0{slide.id}</span>
                        <span className="h-px w-6 bg-[#484848]" />
                        <span>{slide.title}</span>
                      </p>
                      <p className="mt-1 text-xl text-[#1a1a1a]">{slide.discount}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="mt-6 flex items-center gap-3">
            {slides.map((slide, i) => (
              <button
                key={slide.id}
                onClick={() => setIndex(i)}
                className={`flex h-4 w-4 cursor-pointer items-center justify-center rounded-full ${
                  i === index ? "border border-black" : ""
                }`}
              >
                <span
                  className={`block rounded-full ${
                    i === index ? "h-2 w-2 bg-black" : "h-1.5 w-1.5 bg-[#BDBDBD]"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default DealsOfMonth;

 