import { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";
import mouse from "../../assets/Subtract.png";

// Import videos
import video1 from "../../assets/Videos/Vid-1.mp4";
import video2 from "../../assets/Videos/Vid-2.mp4";
import video3 from "../../assets/Videos/Vid-3.mp4";
import video4 from "../../assets/Videos/Vid-4.mp4";

const Works = ({ setActiveDot, TOTAL_DOTS }) => {
  const scrollRef = useRef(null);
  const isScrolling = useRef(false);
  const scrollVelocity = useRef(0);
  const containerWidth = useRef(0);

  const [, setVideoDimensions] = useState({});
  const [, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  // Explicit mapping: Single = video or null, Stacked = [top, middle, bottom]
  const layoutMap = [
    video2, // Single
    [video1, video1, video1], // Stacked
    video3, // Single
    [video1, video1, video1], // Stacked
    video4, // Single
    [video1, video1, video1], // Stacked
    video2, // Single
    [video1, video1, video1], // Stacked
    video3, // Single
    [video1, video1, video1], // Stacked
    video4, // Single
    [video1, video1, video1], // Stacked
  ];

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
    scrollVelocity.current *= 0.35;
    updateActiveDot(scrollEl.scrollLeft);
    requestAnimationFrame(smoothScroll);
  };

  const updateActiveDot = (scrollLeft) => {
    if (!containerWidth.current || !scrollRef.current) return;
    let progress = scrollLeft / containerWidth.current;
    progress = Math.max(0, Math.min(1, progress));
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
    updateActiveDot(el.scrollLeft);

    const handleWheel = (e) => {
      e.preventDefault();
      scrollVelocity.current += e.deltaY * 1.1;
      scrollVelocity.current = Math.max(
        -50,
        Math.min(50, scrollVelocity.current)
      );
      if (!isScrolling.current) {
        isScrolling.current = true;
        requestAnimationFrame(smoothScroll);
      }
    };

    const handleScroll = () => updateActiveDot(el.scrollLeft);

    el.addEventListener("wheel", handleWheel, { passive: false });
    el.addEventListener("scroll", handleScroll);

    return () => {
      el.removeEventListener("wheel", handleWheel);
      el.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMetadata = (index, e) => {
    const { videoWidth, videoHeight } = e.target;
    setVideoDimensions((prev) => ({
      ...prev,
      [index]: { width: videoWidth, height: videoHeight },
    }));
  };

  // Build layout items based on mapping length
  const items = layoutMap.map((entry, i) => ({
    id: i + 1,
    type: Array.isArray(entry) ? "stacked" : "single",
    content: entry,
  }));

  // Repeat for infinite scroll
  const doubledItems = [...items, ...items];

  const openModal = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
    const modal = document.getElementById("my_modal_2");
    if (modal) modal.showModal();
  };

  return (
    <>
      <div className="relative pt-2 md:pt-10 bg-[#0F172A] text-white">
        {/* Fade right effect */}
        <div
          className="pointer-events-none absolute top-0 right-0 md:h-full w-[100px] md:w-[300px]"
          style={{
            background:
              "linear-gradient(to left, rgba(0,0,0,1), rgba(0,0,0,0))",
            zIndex: 5,
          }}
        />

        {/* Side text + mouse */}
        <div className="absolute right-0 top-1/2 md:top-2/3 -translate-y-1/2 z-10 md:pr-6 flex flex-col items-end gap-6">
          <div className="writing-vertical text-[30px] inter font-bold tracking-widest text-white rotate-180">
            EXPLORE WORKS
          </div>
          <div className="absolute right-10 md:right-15 bottom-15 flex space-x-2">
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

        {/* Scroll section */}
        <div
          id="works-scroll"
          ref={scrollRef}
          className="overflow-x-auto"
          style={{
            scrollBehavior: "auto",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          <style>{`#works-scroll::-webkit-scrollbar { display: none; }`}</style>
          <div className="flex gap-1 w-max items-center">
            {doubledItems.map((item, idx) => {
              if (item.type === "single") {
                return (
                  <div
                    key={idx}
                    className="h-[600px] w-[300px] flex items-center justify-center rounded bg-gray-300 text-black text-xl font-semibold cursor-pointer overflow-hidden"
                    onClick={() => openModal(item)}
                  >
                    {item.content ? (
                      <video
                        src={item.content}
                        onLoadedMetadata={(e) => handleMetadata(idx, e)}
                        autoPlay
                        muted
                        playsInline
                        loop
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      `Box ${item.id}`
                    )}
                  </div>
                );
              } else {
                return (
                  <div
                    key={idx}
                    className="relative w-[300px] h-[600px] overflow-hidden"
                  >
                    <div className="flex flex-col gap-1 absolute top-0 left-0">
                      {item.content.map((subVideo, subIdx) => (
                        <div
                          key={subIdx}
                          className="h-[200px] w-[300px] flex items-center justify-center rounded bg-gray-400 text-black text-xl font-semibold cursor-pointer overflow-hidden"
                          onClick={() => openModal(item)}
                        >
                          {subVideo ? (
                            <video
                              src={subVideo}
                              onLoadedMetadata={(e) =>
                                handleMetadata(`${idx}-${subIdx}`, e)
                              }
                              autoPlay
                              muted
                              playsInline
                              loop
                              className="h-full w-full object-cover"
                            />
                          ) : (
                            `Box ${item.id} Part ${subIdx + 1}`
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>

      {/* Modal */}
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            {selectedItem ? `Item ${selectedItem.id}` : "No item selected"}
          </h3>
          <p className="py-4">This is more detail about the item.</p>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button onClick={() => setIsModalOpen(false)}>close</button>
        </form>
      </dialog>
    </>
  );
};

Works.propTypes = {
  TOTAL_DOTS: PropTypes.number.isRequired,
  setActiveDot: PropTypes.func.isRequired,
};

export default Works;
