import { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";
import mouse from "../../assets/Subtract.png";

// Import videos
import video1 from "../../assets/Videos/Vid-1.mp4";
import video2 from "../../assets/Videos/Vid-2.mp4";
import video3 from "../../assets/Videos/Vid-3.mp4";
import video4 from "../../assets/Videos/Vid-4.mp4";
import video5 from "../../assets/Videos/Vid-5.webm";
import videoS1 from "../../assets/Videos/Vid-S-1.webm";
import videoM1 from "../../assets/Videos/Vid-M-1.webm";

const Works = ({ setActiveDot, TOTAL_DOTS }) => {
  const scrollRef = useRef(null);
  const isScrolling = useRef(false);
  const scrollVelocity = useRef(0);
  const containerWidth = useRef(0);

  const [loadingStates, setLoadingStates] = useState({});

  // Layout: single and stacked videos
  const layoutMap = [
    video2,
    [video1, videoS1, videoM1],
    video3,
    [video1, videoS1, videoM1],
    video4,
    [video1, videoS1, videoM1],
    video5,
    [video1, videoS1, videoM1],
  ];

  // Smooth horizontal scrolling
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
    const progress = Math.max(
      0,
      Math.min(1, scrollLeft / containerWidth.current)
    );
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Initialize loading states
  useEffect(() => {
    const initialLoadingStates = {};
    layoutMap.forEach((entry, i) => {
      if (Array.isArray(entry)) {
        entry.forEach((_, subIdx) => {
          initialLoadingStates[`${i}-${subIdx}`] = true;
        });
      } else {
        initialLoadingStates[i] = true;
      }
    });
    setLoadingStates(initialLoadingStates);

    // Clear all loaders after 2 seconds as fallback
    const timer = setTimeout(() => setLoadingStates({}), 2000);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleMetadata = (key, e) => {
    // Force play after metadata loads
    e.target.play().catch(() => console.log("play blocked"));
    setLoadingStates((prev) => ({ ...prev, [key]: false }));
  };

  const items = layoutMap.map((entry, i) => ({
    id: i + 1,
    type: Array.isArray(entry) ? "stacked" : "single",
    content: entry,
  }));

  const doubledItems = [...items, ...items];

  const openModal = () => {
    const modal = document.getElementById("my_modal_2");
    if (modal) modal.showModal();
  };

  return (
    <div className="relative pt-2 md:pt-10 bg-[#0F172A] text-white">
      {/* Gradient overlay */}
      <div
        className="pointer-events-none absolute top-0 right-0 md:h-full w-[100px] md:w-[300px]"
        style={{
          background: "linear-gradient(to left, rgba(0,0,0,1), rgba(0,0,0,0))",
          zIndex: 5,
        }}
      />

      {/* Side text */}
      <div className="absolute right-0 top-1/2 md:top-2/3 -translate-y-1/2 z-10 md:pr-6 flex flex-col items-end gap-6">
        <div className="writing-vertical text-[30px] font-bold tracking-widest text-white rotate-180">
          EXPLORE WORKS
        </div>
        <div className="absolute right-10 md:right-15 bottom-15 flex space-x-2">
          <span className="text-white uppercase tracking-widest text-[16px] font-medium">
            SCROLL
          </span>
          <span className="text-white uppercase tracking-widest text-[16px] font-medium">
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
        className="overflow-x-auto h-[600px]"
        style={{
          scrollBehavior: "auto",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <style>{`#works-scroll::-webkit-scrollbar { display: none; }`}</style>
        <div className="flex gap-[10px] h-[600px] w-max items-center">
          {doubledItems.map((item, idx) => {
            if (item.type === "single") {
              return (
                <div
                  key={idx}
                  className="h-[600px] w-[300px] flex items-center justify-center bg-[#0F172A] border border-gray-700 text-xl font-semibold cursor-pointer overflow-hidden relative"
                  onClick={() => openModal(item)}
                >
                  {loadingStates[idx] && (
                    <div className="absolute inset-0 flex items-center justify-center bg-[#0F172A] bg-opacity-50 z-10">
                      <div className="w-10 h-10 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                    </div>
                  )}
                  <video
                    src={item.content}
                    autoPlay
                    muted
                    playsInline
                    loop
                    className="h-[600px] w-full object-cover"
                    onLoadedMetadata={(e) => handleMetadata(idx, e)}
                  />
                </div>
              );
            } else {
              return (
                <div key={idx} className="relative w-[300px] overflow-hidden">
                  <div className="flex flex-col space-y-[10px]">
                    {item.content.map((subVideo, subIdx) => {
                      const flatIndex = `${idx}-${subIdx}`;
                      // eslint-disable-next-line react-hooks/rules-of-hooks
                      const [videoHeight, setVideoHeight] = useState(null);

                      const handleLoadedMetadata = (e) => {
                        const vid = e.target;
                        const aspectRatio = vid.videoHeight / vid.videoWidth;
                        const containerWidth = 300; // since you use w-[300px]
                        setVideoHeight(containerWidth * aspectRatio);
                        handleMetadata(flatIndex, e);
                      };

                      return (
                        <div
                          key={subIdx}
                          style={{
                            height: videoHeight ? `${videoHeight}px` : "250px",
                          }}
                          className="w-[300px] flex items-center justify-center bg-[#0F172A] border border-gray-700 text-xl font-semibold cursor-pointer overflow-hidden relative"
                          onClick={() => openModal(item)}
                        >
                          {loadingStates[flatIndex] && (
                            <div className="absolute inset-0 flex items-center justify-center bg-[#0F172A] bg-opacity-50 z-10">
                              <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                            </div>
                          )}
                          <video
                            src={subVideo}
                            autoPlay
                            muted
                            playsInline
                            loop
                            className="h-full w-full object-cover"
                            onLoadedMetadata={handleLoadedMetadata}
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

Works.propTypes = {
  TOTAL_DOTS: PropTypes.number.isRequired,
  setActiveDot: PropTypes.func.isRequired,
};

export default Works;
