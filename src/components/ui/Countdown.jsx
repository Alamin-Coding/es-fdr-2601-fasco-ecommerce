
import { useState, useEffect } from "react";

const Countdown = () => {
  //  2 din, 6 ghonta, 5 minute, 30 second
  const [totalSeconds, setTotalSeconds] = useState(
    2 * 24 * 60 * 60 + 6 * 60 * 60 + 5 * 60 + 30
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTotalSeconds((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // second theke din, ghonta, minute ber kora
  const days = Math.floor(totalSeconds / (24 * 60 * 60));
  const hours = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60));
  const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
  const seconds = totalSeconds % 60;

  const box =
    "flex h-[52px] w-[52px] items-center justify-center rounded-md bg-white text-2xl font-medium shadow-md";

  return (
    <div className="flex gap-3 text-center">
      <div>
        <div className={box}>{String(days).padStart(2, "0")}</div>
        <p className="mt-1 text-sm text-[#484848]">Days</p>
      </div>
      <div>
        <div className={box}>{String(hours).padStart(2, "0")}</div>
        <p className="mt-1 text-sm text-[#484848]">Hr</p>
      </div>
      <div>
        <div className={box}>{String(minutes).padStart(2, "0")}</div>
        <p className="mt-1 text-sm text-[#484848]">Mins</p>
      </div>
      <div>
        <div className={box}>{String(seconds).padStart(2, "0")}</div>
        <p className="mt-1 text-sm text-[#484848]">Sec</p>
      </div>
    </div>
  );
};

export default Countdown;
