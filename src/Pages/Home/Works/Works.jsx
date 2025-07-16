import { useRef, useEffect } from "react";
import mouse from "../../../assets/Subtract.png";

const Works = () => {
  const scrollRef = useRef(null);
  const isScrolling = useRef(false);
  const scrollVelocity = useRef(0);
  const containerWidth = useRef(0);

  const smoothScroll = () => {
    if (!scrollRef.current) return;

    const scrollEl = scrollRef.current;

    // Infinite scroll wrap logic
    if (scrollEl.scrollLeft >= containerWidth.current) {
      scrollEl.scrollLeft -= containerWidth.current;
    } else if (scrollEl.scrollLeft < 0) {
      scrollEl.scrollLeft += containerWidth.current;
    }

    // Stop scrolling if velocity is very low
    if (Math.abs(scrollVelocity.current) < 0.1) {
      scrollVelocity.current = 0;
      isScrolling.current = false;
      return;
    }

    scrollEl.scrollLeft += scrollVelocity.current;

    // Friction for smooth slowdown
    scrollVelocity.current *= 0.92;

    requestAnimationFrame(smoothScroll);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    containerWidth.current = el.scrollWidth / 2; // doubled items

    const handleWheel = (e) => {
      e.preventDefault();

      // Adjust scroll speed multiplier here to tune speed
      scrollVelocity.current += e.deltaY * 0.6;

      // Clamp velocity for control
      if (scrollVelocity.current > 10) scrollVelocity.current = 10;
      if (scrollVelocity.current < -10) scrollVelocity.current = -10;

      if (!isScrolling.current) {
        isScrolling.current = true;
        requestAnimationFrame(smoothScroll);
      }
    };

    el.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      el.removeEventListener("wheel", handleWheel);
    };
  }, []);

  // Sample data
  const items = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    type: i % 2 === 0 ? "single" : "stacked",
    color: i % 2 === 0 ? "#A7F3D0" : "#BFDBFE",
    label: `Block ${i + 1}`,
  }));

  // Double the items array for infinite scroll
  const doubledItems = [...items, ...items];

  return (
    <div className="relative pt-10 bg-[#0F172A] text-white">
      <div
        className="pointer-events-none absolute top-0 right-0 h-full w-[300px]"
        style={{
          background: "linear-gradient(to left, rgba(0,0,0,1), rgba(0,0,0,0))",
          zIndex: 5,
        }}
      />

      <div className="absolute right-0 top-2/3 -translate-y-1/2 z-10 pr-6 flex flex-col items-end gap-6">
        <div className="writing-vertical text-[30px] inter font-bold tracking-widest text-white rotate-180">
          EXPLORE WORKS
        </div>

        <div className="absolute right-15 bottom-15 flex space-x-2">
          <span className="text-white uppercase tracking-widest text-[16px] font-medium inter">
            SCROLL
          </span>
          <span className="text-white uppercase tracking-widest text-[16px] font-medium inter">
            TO
          </span>
        </div>

        <div className="mt-auto pb-2 pr-2">
          <img src={mouse} alt="mouse icon" className="w-[35px]" />
        </div>
      </div>

      <div
        ref={scrollRef}
        className="pb-10 overflow-hidden"
        style={{
          overflowX: "auto",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          scrollBehavior: "auto", // Important for immediate jump in scrollLeft reset
        }}
      >
        <style>{`
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>

        <div className="flex gap-1 w-max">
          {doubledItems.map((item, idx) =>
            item.type === "single" ? (
              <div
                key={idx} // idx instead of item.id because of duplicates
                className="h-[600px] w-[400px] flex items-center justify-center rounded text-black text-xl font-semibold"
                style={{ backgroundColor: item.color }}
              >
                {item.label}
              </div>
            ) : (
              <div key={idx} className="flex flex-col gap-1">
                <div
                  className="h-[300px] w-[400px] flex items-center justify-center rounded text-black text-xl font-semibold"
                  style={{ backgroundColor: item.color }}
                >
                  {item.label} Top
                </div>
                <div
                  className="h-[300px] w-[400px] flex items-center justify-center rounded text-black text-xl font-semibold"
                  style={{ backgroundColor: item.color }}
                >
                  {item.label} Bottom
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Works;
