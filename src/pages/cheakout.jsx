import React, { useState } from "react";
import img1 from "../assets/img1";

const Checkout = () => {
  const [saveDelivery, setSaveDelivery] = useState(false);
  const [saveCard, setSaveCard] = useState(false);

  const input =
    "w-full h-[46px] border border-[#d9d9d9] bg-white px-3 text-[13px] text-black placeholder:text-[#7a7a7a] outline-none focus:border-black rounded-[4px]";
  const cardInput = `${input} h-[40px]`;
  const heading = "font-['Gelasio',Georgia,serif] text-[26px]";

  return (
    <div className="w-full bg-white font-['Poppins',sans-serif] text-black">
      {/* Page title */}
      <div className="border-b border-[#e5e5e5]">
        <h1 className="font-['Gelasio',Georgia,serif] text-[28px] text-center pt-1 pb-4">
          FASCO Demo Checkout
        </h1>
      </div>

      {/* Checkout */}
      <main className="grid grid-cols-1 md:grid-cols-2 border-b border-[#e5e5e5]">
        {/* LEFT: form */}
        <section className="flex justify-end md:pr-5 px-4 md:pl-0 border-r border-[#e5e5e5] pb-6">
          <div className="w-full md:w-[464px]">
            {/* Contact */}
            <div className="mt-6 flex items-end justify-between">
              <h2 className={heading}>Contact</h2>
              <p className="text-[10px] text-[#444] pb-1">
                Have an account?{" "}
                <a href="#" className="text-blue-600">
                  Create Account
                </a>
              </p>
            </div>
            <input type="email" placeholder="Email Address" className={`${input} mt-3`} />

            {/* Delivery */}
            <h2 className={`${heading} mt-10`}>Delivery</h2>
            <div className="mt-3 space-y-3">
              <div className="relative">
                <select defaultValue="" className={`${input} appearance-none pr-8`}>
                  <option value="" disabled>
                    Country / Region
                  </option>
                  <option>United States</option>
                  <option>United Kingdom</option>
                  <option>Qatar</option>
                </select>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-3 h-3 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <input placeholder="First Name" className={input} />
                <input placeholder="Last Name" className={input} />
              </div>
              <input placeholder="Address" className={input} />
              <div className="grid grid-cols-2 gap-2">
                <input placeholder="City" className={input} />
                <input placeholder="Postal Code" className={input} />
              </div>

              <label className="flex items-center gap-2 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={saveDelivery}
                  onChange={(e) => setSaveDelivery(e.target.checked)}
                  className="w-[18px] h-[18px] accent-black"
                />
                <span className="text-[12px] text-[#555]">Save This Info For Future</span>
              </label>
            </div>

            {/* Payment */}
            <h2 className={`${heading} mt-10`}>Payment</h2>
            <div className="mt-3 border border-[#d9d9d9] rounded-[4px] bg-[#f5f5f5]">
              <div className="h-[46px] bg-white border-b border-[#d9d9d9] rounded-t-[4px] px-3 flex items-center justify-between">
                <span className="text-[12px] text-[#444]">Credit Card</span>
                <span className="flex items-center gap-2">
                  {/* CARD LOGO IMAGE: Mastercard logo — add your image here */}
                  <span className="w-6 h-4 block">
                    {/* <img src="" alt="Mastercard" className="w-full h-full object-contain" /> */}
                  </span>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-3 h-3"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </span>
              </div>

              <div className="p-3 space-y-2">
                <div className="relative">
                  <input placeholder="Card Number" className={`${cardInput} pr-9`} />
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-3.5 h-3.5 text-[#555] absolute right-3 top-1/2 -translate-y-1/2"
                  >
                    <rect x="5" y="11" width="14" height="9" rx="1.5" />
                    <path d="M8 11V8a4 4 0 018 0v3" />
                  </svg>
                </div>
                <div className="grid grid-cols-2 gap-1">
                  <input placeholder="Expiration Date" className={cardInput} />
                  <input placeholder="Security Code" className={cardInput} />
                </div>
                <input placeholder="Card Holder Name" className={cardInput} />
                <label className="flex items-center gap-2 cursor-pointer select-none pt-2 pb-1">
                  <input
                    type="checkbox"
                    checked={saveCard}
                    onChange={(e) => setSaveCard(e.target.checked)}
                    className="w-[18px] h-[18px] accent-black"
                  />
                  <span className="text-[12px] text-[#555]">Save This Info For Future</span>
                </label>
              </div>
            </div>

            <button className="mt-4 w-full h-[48px] bg-black text-white text-[12px] rounded-[6px] shadow-[0_10px_20px_rgba(0,0,0,0.25)]">
              Pay Now
            </button>

            <p className="text-center text-[8px] text-[#555] mt-6">
              Copyright © 2022 FASCO . All Rights Reserved
            </p>
          </div>
        </section>

        {/* RIGHT: order summary */}
        <section className="self-start bg-[#f4f4f4] px-4 md:pl-[60px] md:pr-10 pt-5 pb-8">
          <div className="md:max-w-[424px]">
            {/* Product */}
            <div className="flex items-start gap-3">
              <div className="relative w-[54px] h-[54px] bg-[#e4e4e4] shrink-0">
                {/* PRODUCT IMAGE: woman in red dress — add your image here */}
                {/* <img src="" alt="Mini Dress With Ruffled Straps" className="w-full h-full object-cover" /> */}
                <span className="absolute -top-1.5 -right-1.5 w-[14px] h-[14px] rounded-full bg-red-600 text-white text-[8px] flex items-center justify-center">
                  1
                </span>
              </div>
              <div className="flex-1 pt-1">
                <p className="font-['Gelasio',Georgia,serif] text-[11px] font-semibold">
                  Mini Dress With Ruffled Straps
                </p>
                <div className="flex justify-between text-[9px] text-[#555] mt-1">
                  <span>Red</span>
                  <span className="font-semibold text-black">$100.00</span>
                </div>
              </div>
            </div>

            {/* Discount */}
            <div className="mt-5 flex items-center bg-white rounded-[4px] h-[34px] pl-3 relative">
              <input
                placeholder="Discount code"
                className="flex-1 text-[9px] outline-none bg-transparent placeholder:text-[#555]"
              />
              <button className="absolute right-0 top-[-2px] h-[40px] w-[76px] bg-black text-white text-[9px] rounded-[5px] shadow-[0_6px_12px_rgba(0,0,0,0.25)]">
                Apply
              </button>
            </div>

            {/* Totals */}
            <dl className="mt-5 space-y-2 text-[9px] text-[#444]">
              <div className="flex justify-between">
                <dt>Subtotal</dt>
                <dd className="font-semibold text-black">$100.00</dd>
              </div>
              <div className="flex justify-between">
                <dt>Shipping</dt>
                <dd className="font-semibold text-black">$40.00</dd>
              </div>
              <div className="flex justify-between">
                <dt>Total</dt>
                <dd className="font-bold text-black">$140.00</dd>
              </div>
            </dl>
          </div>
        </section>
      </main>

      {/* Newsletter */}
      <section className="w-full py-10">
        <div className="max-w-[1000px] mx-auto px-4">
          <div className="relative min-h-[360px] flex items-center justify-center">
            {/* LEFT IMAGE: man in mustard coat — add your image here */}
            <div className="hidden md:block absolute left-0 bottom-0 w-[220px] h-[340px]">
               <img src="img1" alt="Model in mustard coat" className="w-ful l h-full object-contain" /> 
            </div>

            {/* RIGHT IMAGE: woman in grey coat — add your image here */}
            <div className="hidden md:block absolute right-0 bottom-0 w-[220px] h-[340px]">
              {/* <img src="" alt="Model in grey coat" className="w-full h-full object-contain" /> */}
            </div>

            <div className="w-full max-w-[480px] text-center">
              <h2 className="font-['Gelasio',Georgia,serif] text-[30px] text-[#222] leading-tight">
                Subscribe To Our Newsletter
              </h2>
              <p className="mt-4 text-[10px] leading-[1.7] text-[#6b6b6b] max-w-[430px] mx-auto">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis
                ultrices sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin
              </p>

              <div className="mt-6 bg-white shadow-[0_20px_40px_rgba(0,0,0,0.08)] px-4 pt-5 pb-8">
                <input
                  type="email"
                  defaultValue="michael@ymail.com"
                  className="w-full text-[13px] text-[#333] outline-none bg-transparent text-left"
                />
                <button className="mt-8 bg-black text-white text-[10px] px-6 py-3 rounded-[4px] shadow-[0_8px_16px_rgba(0,0,0,0.25)]">
                  Subscribe Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Checkout;