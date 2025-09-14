import { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";
import mouse from "../../assets/Subtract.png";

// Import videos
import Banner_1 from "../../assets/Videos/Banner-1.jpg";
import Banner_2 from "../../assets/Videos/Banner-2.mp4";
import Banner_3 from "../../assets/Videos/Banner-3.mp4";
import Banner_4 from "../../assets/Videos/Banner-4.mp4";
import Banner_6 from "../../assets/Videos/Banner-6.gif";
import Banner_5 from "../../assets/Videos/Banner-5.webm";

import M_Banner_1 from "../../assets/Videos/M-Banner-1.jpg";
import M_Banner_2 from "../../assets/Videos/M-Banner-2.mp4";
import M_Banner_3 from "../../assets/Videos/M-Banner-3.mp4";
import M_Banner_4 from "../../assets/Videos/M-Banner-4.gif";
import M_Banner_5 from "../../assets/Videos/M-Banner-5.webm";

import S_Banner_1 from "../../assets/Videos/S-Banner-1.webm";

// Layout: single and stacked media (video or image)
const layoutMap = [
  Banner_1,
  [M_Banner_1, M_Banner_2, S_Banner_1],
  Banner_2,
  [M_Banner_3, M_Banner_4, S_Banner_1],
  Banner_3,
  [M_Banner_5, M_Banner_1, S_Banner_1],
  Banner_4,
  [M_Banner_2, M_Banner_3, S_Banner_1],
  Banner_5,
  [M_Banner_4, M_Banner_5, S_Banner_1],
  Banner_6,
  [M_Banner_1, M_Banner_2, S_Banner_1],
];

// Helpers to detect media type
const isVideo = (file) => /\.(mp4|webm|mov)$/i.test(file);
const isImage = (file) => /\.(jpg|jpeg|png|webp|gif)$/i.test(file);

const Works = ({ setActiveDot, TOTAL_DOTS }) => {
  const scrollRef = useRef(null);
  const isScrolling = useRef(false);
  const scrollVelocity = useRef(0);
  const containerWidth = useRef(0);

  // Loading state for each media
  const [loadingStates, setLoadingStates] = useState({});

  // Smooth horizontal scroll
  const smoothScroll = () => {
    if (!scrollRef.current) return;
    const scrollEl = scrollRef.current;

    // Infinite scroll wrap
    if (scrollEl.scrollLeft >= containerWidth.current) {
      scrollEl.scrollLeft -= containerWidth.current;
    } else if (scrollEl.scrollLeft < 0) {
      scrollEl.scrollLeft += containerWidth.current;
    }

    // Decelerate scroll
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

  // Update active dot
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

  // Mouse/touch drag and wheel support
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    containerWidth.current = el.scrollWidth / 2;
    updateActiveDot(el.scrollLeft);

    let isDragging = false;
    let startX = 0;
    let scrollLeftStart = 0;

    // Wheel scroll
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

    // Mouse events
    const handleMouseDown = (e) => {
      isDragging = true;
      startX = e.pageX - el.offsetLeft;
      scrollLeftStart = el.scrollLeft;
      el.classList.add("cursor-grabbing");
    };
    const handleMouseLeave = () => {
      isDragging = false;
      el.classList.remove("cursor-grabbing");
    };
    const handleMouseUp = () => {
      isDragging = false;
      el.classList.remove("cursor-grabbing");
    };
    const handleMouseMove = (e) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.pageX - el.offsetLeft;
      const walk = (x - startX) * 1.5;
      el.scrollLeft = scrollLeftStart - walk;
      updateActiveDot(el.scrollLeft);
    };

    // Touch events
    let touchStartX = 0;
    let touchScrollStart = 0;
    const handleTouchStart = (e) => {
      touchStartX = e.touches[0].pageX;
      touchScrollStart = el.scrollLeft;
    };
    const handleTouchMove = (e) => {
      const x = e.touches[0].pageX;
      const walk = (x - touchStartX) * 1.5;
      el.scrollLeft = touchScrollStart - walk;
      updateActiveDot(el.scrollLeft);
    };

    // Scroll event
    const handleScroll = () => updateActiveDot(el.scrollLeft);

    // Add listeners
    el.addEventListener("wheel", handleWheel, { passive: false });
    el.addEventListener("scroll", handleScroll);
    el.addEventListener("mousedown", handleMouseDown);
    el.addEventListener("mouseleave", handleMouseLeave);
    el.addEventListener("mouseup", handleMouseUp);
    el.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("touchstart", handleTouchStart, { passive: true });
    el.addEventListener("touchmove", handleTouchMove, { passive: true });

    return () => {
      el.removeEventListener("wheel", handleWheel);
      el.removeEventListener("scroll", handleScroll);
      el.removeEventListener("mousedown", handleMouseDown);
      el.removeEventListener("mouseleave", handleMouseLeave);
      el.removeEventListener("mouseup", handleMouseUp);
      el.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("touchstart", handleTouchStart);
      el.removeEventListener("touchmove", handleTouchMove);
    };
  }, [TOTAL_DOTS, setActiveDot]);

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

    const timer = setTimeout(() => setLoadingStates({}), 2000);
    return () => clearTimeout(timer);
  }, [layoutMap]);

  // Handle media loaded
  const handleMetadata = (key, e) => {
    const video = e.target;
    if (isVideo(video.src)) {
      video.muted = true;
      video.playsInline = true;
      video.play().catch((err) => console.error("Video play blocked:", err));
    }
    setLoadingStates((prev) => ({ ...prev, [key]: false }));
  };

  // Prepare items
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

  // Render media dynamically
  const renderMedia = (mediaSrc, key) => {
    if (isVideo(mediaSrc)) {
      return (
        <video
          key={key}
          src={mediaSrc}
          autoPlay
          muted
          playsInline
          loop
          className="h-full w-full object-cover"
          onLoadedMetadata={(e) => handleMetadata(key, e)}
          onError={(e) => {
            console.error("Video load failed:", mediaSrc, e);
            setLoadingStates((prev) => ({ ...prev, [key]: false }));
          }}
        />
      );
    } else if (isImage(mediaSrc)) {
      return (
        <img
          key={key}
          src={mediaSrc}
          alt={`Media ${key}`}
          className="h-full w-full object-cover"
          onLoad={() => setLoadingStates((prev) => ({ ...prev, [key]: false }))}
          onError={(e) => {
            console.error(`Image failed to load: ${mediaSrc}`, e);
            setLoadingStates((prev) => ({ ...prev, [key]: false }));
          }}
        />
      );
    } else {
      console.warn(`Unsupported media type: ${mediaSrc}`);
      return null;
    }
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
        className="overflow-x-auto h-[600px] cursor-grab"
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
                  {renderMedia(item.content, idx)}
                </div>
              );
            } else {
              return (
                <div
                  key={idx}
                  className="relative w-[300px] overflow-hidden flex flex-col gap-[10px]"
                >
                  {item.content.map((subMedia, subIdx) => {
                    const flatIndex = `${idx}-${subIdx}`;
                    let mediaHeight = subIdx === 0 || subIdx === 1 ? 250 : 80;
                    return (
                      <div
                        key={subIdx}
                        style={{ height: `${mediaHeight}px` }}
                        className="w-[300px] flex items-center justify-center bg-[#0F172A] border border-gray-700 text-xl font-semibold cursor-pointer overflow-hidden relative"
                        onClick={() => openModal(item)}
                      >
                        {loadingStates[flatIndex] && (
                          <div className="absolute inset-0 flex items-center justify-center bg-[#0F172A] bg-opacity-50 z-10">
                            <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                          </div>
                        )}
                        {renderMedia(subMedia, flatIndex)}
                      </div>
                    );
                  })}
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

// Prop types
Works.propTypes = {
  TOTAL_DOTS: PropTypes.number.isRequired,
  setActiveDot: PropTypes.func.isRequired,
};

export default Works;
