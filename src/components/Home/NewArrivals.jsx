import { useState } from "react";
import ProductCard from "../ui/ProductCard";
import p1 from "../../assets/shinyDress.png";
import p2 from "../../assets/longDress.png";
import p3 from "../../assets/swatter.png";
import p4 from "../../assets/whiteDress.png";
import p5 from "../../assets/colorfullDress.png";
import p6 from "../../assets/whiteShirt.png";
import Button from "../ui/Button";

const tabs = [
  "Men's Fashion",
  "Women's Fashion",
  "Women Accessories",
  "Men Accessories",
  "Discount Deals",
];

const products = [
  { id: 1, img: p1, name: "Shiny Dress", brand: "Al Karam", reviews: "4.1k", price: "95.50" },
  { id: 2, img: p2, name: "Long Dress", brand: "Al Karam", reviews: "4.1k", price: "95.50" },
  { id: 3, img: p3, name: "Full Sweater", brand: "Al Karam", reviews: "4.1k", price: "95.50" },
  { id: 4, img: p4, name: "White Dress", brand: "Al Karam", reviews: "4.1k", price: "95.50" },
  { id: 5, img: p5, name: "Colorful Dress", brand: "Al Karam", reviews: "4.1k", price: "95.50" },
  { id: 6, img: p6, name: "White Shirt", brand: "Al Karam", reviews: "4.1k", price: "95.50" },
];

const NewArrivals = () => {
  const [activeTab, setActiveTab] = useState("Women's Fashion");

  return (
    <section className="py-20">
      <div className="container mx-auto max-w-[1281px]">

        {/* Heading */}
        <div className="text-center">
          <h2 className="font-serif text-4xl text-[#1a1a1a]">New Arrivals</h2>
          <p className="mx-auto mt-3 max-w-[386x] text-xs leading-5 text-[#484848]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
            duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices
            sollicitudin
          </p>
        </div>

        {/* Tabs */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`cursor-pointer rounded-md px-5 py-2.5 text-xs ${
                activeTab === tab
                  ? "bg-black text-white shadow-lg"
                  : "bg-[#FAFAFA] text-[#8A8A8A]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Product grid */}
        <div className="mx-auto mt-12 grid max-w-[1000px]  grid-cols-1 gap-[60px] sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View more */}
        <div className="mt-12 text-center">
         <Button text="View More"/>
        </div>

      </div>
    </section>
  );
};

export default NewArrivals;