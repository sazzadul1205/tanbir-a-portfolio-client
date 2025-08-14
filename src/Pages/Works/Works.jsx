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

const Works = ({ setActiveDot, TOTAL_DOTS }) => {
  const scrollRef = useRef(null);
  const isScrolling = useRef(false);
  const scrollVelocity = useRef(0);
  const containerWidth = useRef(0);

  // eslint-disable-next-line no-unused-vars
  const [videoDimensions, setVideoDimensions] = useState({});
  // eslint-disable-next-line no-unused-vars
  const [isModalOpen, setIsModalOpen] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [selectedItem, setSelectedItem] = useState(null);

  // NEW: Track loading state for each container and sub-video uniquely
  const [loadingStates, setLoadingStates] = useState({});

  // Layout with single and stacked video groups
  const layoutMap = [
    video2,
    [video1, videoS1, video1],
    video3,
    [video1, videoS1, video1],
    video4,
    [video1, videoS1, video1],
    video5,
    [video1, videoS1, video1],
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

  // Initialize loading states for each single video and for each sub-video in stacked groups
  useEffect(() => {
    const initialLoadingStates = {};
    layoutMap.forEach((entry, i) => {
      if (Array.isArray(entry)) {
        // For stacked container, set loader true for each sub-video
        entry.forEach((_, subIdx) => {
          initialLoadingStates[`${i}-${subIdx}`] = true;
        });
      } else {
        // For single video container
        initialLoadingStates[i] = true;
      }
    });
    setLoadingStates(initialLoadingStates);

    // Clear loaders after 2 seconds for all videos
    const timer = setTimeout(() => {
      setLoadingStates({});
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleMetadata = (key, e) => {
    const { videoWidth, videoHeight } = e.target;
    setVideoDimensions((prev) => ({
      ...prev,
      [key]: { width: videoWidth, height: videoHeight },
    }));
    // Optional: Remove loader on metadata loaded (can override timeout if you want)
    setLoadingStates((prev) => ({
      ...prev,
      [key]: false,
    }));
  };

  const items = layoutMap.map((entry, i) => ({
    id: i + 1,
    type: Array.isArray(entry) ? "stacked" : "single",
    content: entry,
  }));

  // Duplicate items for infinite scroll effect
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
        <div
          className="pointer-events-none absolute top-0 right-0 md:h-full w-[100px] md:w-[300px]"
          style={{
            background:
              "linear-gradient(to left, rgba(0,0,0,1), rgba(0,0,0,0))",
            zIndex: 5,
          }}
        />

        {/* Side text */}
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
          <div className="flex gap-[10px] w-max items-center">
            {doubledItems.map((item, idx) => {
              if (item.type === "single") {
                return (
                  <div
                    key={idx}
                    className="h-[600px] w-[300px] flex items-center justify-center bg-[#0F172A] text-black border border-gray-700 text-xl font-semibold cursor-pointer overflow-hidden relative"
                    onClick={() => openModal(item)}
                  >
                    {/* Spinner Overlay */}
                    {loadingStates[idx] && (
                      <div className="absolute inset-0 flex items-center justify-center bg-[#0F172A] bg-opacity-50 z-10">
                        <div className="w-10 h-10 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                      </div>
                    )}

                    <video
                      src={item.content}
                      onLoadedMetadata={(e) => handleMetadata(idx, e)}
                      autoPlay
                      muted
                      playsInline
                      loop
                      className="h-full w-full object-cover"
                    />
                  </div>
                );
              } else {
                return (
                  <div
                    key={idx}
                    className="relative w-[300px] h-[600px] overflow-hidden"
                  >
                    <div className="flex flex-col absolute top-0 left-0 space-y-[10px]">
                      {item.content.map((subVideo, subIdx) => {
                        const flatIndex = `${idx}-${subIdx}`; // unique per sub-video

                        return (
                          <div
                            key={subIdx}
                            className="h-[250px] w-[300px] flex items-center justify-center bg-[#0F172A] text-black border border-gray-700 text-xl font-semibold cursor-pointer overflow-hidden relative"
                            onClick={() => openModal(item)}
                          >
                            {/* Loader overlay per sub-video */}
                            {loadingStates[flatIndex] && (
                              <div className="absolute inset-0 flex items-center justify-center bg-[#0F172A] bg-opacity-50 z-10">
                                <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                              </div>
                            )}

                            <video
                              src={subVideo}
                              onLoadedMetadata={(e) =>
                                handleMetadata(flatIndex, e)
                              }
                              autoPlay
                              muted
                              playsInline
                              loop
                              className="h-full w-full object-cover"
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
    </>
  );
};

Works.propTypes = {
  TOTAL_DOTS: PropTypes.number.isRequired,
  setActiveDot: PropTypes.func.isRequired,
};

export default Works;
