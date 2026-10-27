import { FiShoppingCart, FiArrowUp } from "react-icons/fi";

const FloatingButtons = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-10 right-10 z-50 flex items-center gap-4">
      {/* Cart button */}
      <button className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg bg-black text-white shadow-lg">
        <FiShoppingCart size={16} />
      </button>

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-black bg-white text-black"
      >
        <FiArrowUp size={16} />
      </button>
    </div>
  );
};

export default FloatingButtons;