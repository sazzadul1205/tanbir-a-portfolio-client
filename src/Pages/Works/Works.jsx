import { useRef, useEffect, useState } from "react";

// Prop Types
import PropTypes from "prop-types";

// Assets
import mouse from "../../assets/Subtract.png";

const Works = ({ setActiveDot, TOTAL_DOTS }) => {
  const scrollRef = useRef(null);
  const isScrolling = useRef(false);
  const scrollVelocity = useRef(0);
  const containerWidth = useRef(0);

  // Modal state
  // eslint-disable-next-line no-unused-vars
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const smoothScroll = () => {
    if (!scrollRef.current) return;

    const scrollEl = scrollRef.current;

    if (scrollEl.scrollLeft >= containerWidth.current) {
      scrollEl.scrollLeft -= containerWidth.current;
    } else if (scrollEl.scrollLeft < 0) {
      scrollEl.scrollLeft += containerWidth.current;
    }

    if (Math.abs(scrollVelocity.current) < 0.1) {
      scrollVelocity.current = 0;
      isScrolling.current = false;
      return;
    }

    scrollEl.scrollLeft += scrollVelocity.current;
    scrollVelocity.current *= 0.92;

    updateActiveDot(scrollEl.scrollLeft);

    requestAnimationFrame(smoothScroll);
  };

  const updateActiveDot = (scrollLeft) => {
    if (!containerWidth.current || !scrollRef.current) return;

    // Calculate scroll progress from 0 to 1 (wraps around containerWidth)
    let progress = scrollLeft / containerWidth.current;
    if (progress < 0) progress = 0;
    if (progress > 1) progress = 1;

    // Determine which dot is active
    const dotIndex = Math.min(
      TOTAL_DOTS - 1,
      Math.floor(progress * TOTAL_DOTS)
    );

    setActiveDot(dotIndex);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    containerWidth.current = el.scrollWidth / 2;

    // Initial active dot set
    updateActiveDot(el.scrollLeft);

    const handleWheel = (e) => {
      e.preventDefault();

      scrollVelocity.current += e.deltaY * 0.6;

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

  // Modal functions
  const openModal = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
    const modal = document.getElementById("my_modal_2");
    if (modal) modal.showModal();
  };

  return (
    <>
      <div className="relative pt-2 md:pt-10 bg-[#0F172A] text-white">
        {/* Gradient Background */}
        <div
          className="pointer-events-none absolute top-0 right-0 md:h-full w-[100px] md:w-[300px]"
          style={{
            background:
              "linear-gradient(to left, rgba(0,0,0,1), rgba(0,0,0,0))",
            zIndex: 5,
          }}
        />

        {/* Scroll Container */}
        <div className="absolute right-0 top-1/2 md:top-2/3 -translate-y-1/2 z-10 md:pr-6 flex flex-col items-end gap-6">
          {/* Title */}
          <div className="writing-vertical text-[30px] inter font-bold tracking-widest text-white rotate-180">
            EXPLORE WORKS
          </div>

          {/* Scroll Text */}
          <div className="absolute right-10 md:right-15 bottom-15 flex space-x-2">
            <span className="text-white uppercase tracking-widest text-[16px] font-medium inter">
              SCROLL
            </span>
            <span className="text-white uppercase tracking-widest text-[16px] font-medium inter">
              TO
            </span>
          </div>

          {/* Mouse Icon */}
          <div className="mt-auto pb-2 pr-2">
            <img src={mouse} alt="mouse icon" className="w-[35px]" />
          </div>
        </div>

        {/* Scroll Container */}
        <div
          ref={scrollRef}
          className="overflow-hidden"
          style={{
            overflowX: "auto",
            scrollBehavior: "auto",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {/* Scroll Items */}
          <style>{`
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>

          {/* Scroll Items */}
          <div className="flex gap-1 w-max items-center">
            {/* Loop through doubled items */}
            {doubledItems.map((item, idx) =>
              item.type === "single" ? (
                // Single item
                <div
                  key={idx}
                  className="h-[400px] md:h-[600px] w-[400px] flex items-center justify-center rounded text-black text-xl font-semibold cursor-pointer"
                  style={{ backgroundColor: item.color }}
                  onClick={() => openModal(item)}
                >
                  {item.label}
                </div>
              ) : (
                // Stacked item
                <div key={idx} className="flex flex-col gap-1">
                  {/* Two blocks */}
                  <div
                    className="h-[200px] md:h-[300px] w-[400px] flex items-center justify-center rounded text-black text-xl font-semibold cursor-pointer"
                    style={{ backgroundColor: item.color }}
                    onClick={() => openModal(item)}
                  >
                    {item.label} Top
                  </div>
                  <div
                    className="h-[200px] md:h-[300px] w-[400px] flex items-center justify-center rounded text-black text-xl font-semibold cursor-pointer"
                    style={{ backgroundColor: item.color }}
                    onClick={() => openModal(item)}
                  >
                    {item.label} Bottom
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>

      {/* Modal */}
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            {selectedItem ? selectedItem.label : "No item selected"}
          </h3>
          <p className="py-4">This is more detail about the block.</p>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button onClick={() => setIsModalOpen(false)}>close</button>
        </form>
      </dialog>
    </>
  );
};

// Prop Validation
Works.propTypes = {
  TOTAL_DOTS: PropTypes.number.isRequired,
  setActiveDot: PropTypes.number.isRequired,
};

export default Works;
