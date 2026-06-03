// Pages/Works/Works.jsx

// React
import { useRef, useEffect, useState, useCallback, useMemo } from "react";

// Prop types
import PropTypes from "prop-types";

// Import Images
import mouse from "../../assets/Subtract.png";

// Import Videos
// Large Banners
import L_Banner_1 from "../../assets/Videos/Banner-1.jpg";
import L_Banner_2 from "../../assets/Videos/Banner-6.gif";
import L_Banner_3 from "../../assets/Videos/Banner-5.webm";
import L_Banner_4 from "../../assets/L_Videos/L_Videos_1.mp4";
import L_Banner_5 from "../../assets/L_Videos/L_Videos_2.mp4";
import L_Banner_6 from "../../assets/L_Videos/L_Videos_3.mp4";
import L_Banner_7 from "../../assets/L_Videos/L_Videos_4.mp4";
import L_Banner_8 from "../../assets/L_Videos/L_Videos_5.mp4";
import L_Banner_9 from "../../assets/L_Videos/L_Videos_6.mp4";
import L_Banner_10 from "../../assets/L_Videos/L_Videos_7.mp4";
import L_Banner_11 from "../../assets/L_Videos/L_Videos_8.mp4";
import L_Banner_12 from "../../assets/L_Videos/L_Videos_9.mp4";
import L_Banner_13 from "../../assets/L_Videos/L_Videos_10.mp4";
import L_Banner_14 from "../../assets/L_Videos/L_Videos_11.mp4";

// Medium Banners
import M_Banner_1 from "../../assets/M_Videos/M_Videos_1.mp4";
import M_Banner_2 from "../../assets/M_Videos/M_Videos_2.mp4";
import M_Banner_3 from "../../assets/M_Videos/M_Videos_3.mp4";
import M_Banner_4 from "../../assets/M_Videos/M_Videos_4.mp4";
import M_Banner_5 from "../../assets/M_Videos/M_Videos_5.mp4";
import M_Banner_6 from "../../assets/M_Videos/M_Videos_6.mp4";
import M_Banner_7 from "../../assets/M_Videos/M_Videos_7.mp4";
import M_Banner_8 from "../../assets/M_Videos/M_Videos_8.mp4";
import M_Banner_9 from "../../assets/M_Videos/M_Videos_9.mp4";
import M_Banner_14 from "../../assets/Videos/M-Banner-1.jpg";
import M_Banner_10 from "../../assets/M_Videos/M_Videos_10.mp4";
import M_Banner_11 from "../../assets/M_Videos/M_Videos_11.mp4";
import M_Banner_12 from "../../assets/M_Videos/M_Videos_12.mp4";
import M_Banner_15 from "../../assets/Videos/M-Banner-4.gif";
import M_Banner_13 from "../../assets/M_Videos/M_Videos_13.mp4";
import M_Banner_16 from "../../assets/Videos/M-Banner-5.webm";

// Small Banner
import S_Banner_1 from "../../assets/Videos/S-Banner-1.webm";

// Layout configuration
const layoutMap = [
  L_Banner_1,
  [M_Banner_1, M_Banner_2, S_Banner_1],
  L_Banner_2,
  [M_Banner_3, M_Banner_4, S_Banner_1],
  L_Banner_3,
  [M_Banner_5, M_Banner_6, S_Banner_1],
  L_Banner_4,
  [M_Banner_7, M_Banner_8, S_Banner_1],
  L_Banner_5,
  [M_Banner_9, M_Banner_10, S_Banner_1],
  L_Banner_6,
  [M_Banner_11, M_Banner_12, S_Banner_1],
  L_Banner_7,
  [M_Banner_13, M_Banner_14, S_Banner_1],
  L_Banner_8,
  [M_Banner_15, M_Banner_16, S_Banner_1],
  L_Banner_9,
  [M_Banner_2, M_Banner_5, S_Banner_1],
  L_Banner_10,
  [M_Banner_4, M_Banner_7, S_Banner_1],
  L_Banner_11,
  [M_Banner_9, M_Banner_11, S_Banner_1],
  L_Banner_12,
  [M_Banner_13, M_Banner_15, S_Banner_1],
  L_Banner_13,
  [M_Banner_1, M_Banner_3, S_Banner_1],
  L_Banner_14,
  [M_Banner_6, M_Banner_10, S_Banner_1],
];

// Media type detection helpers
const isVideo = (file) => /\.(mp4|webm|mov)$/i.test(file);
const isImage = (file) => /\.(jpg|jpeg|png|webp|gif)$/i.test(file);
const isGif = (file) => /\.gif$/i.test(file);

const Works = ({ setActiveDot, TOTAL_DOTS }) => {
  const scrollRef = useRef(null);
  const isScrolling = useRef(false);
  const scrollVelocity = useRef(0);
  const containerWidth = useRef(0);
  const animationFrameId = useRef(null);

  const [loadingStates, setLoadingStates] = useState({});
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  // Prepare items with memoization
  const items = useMemo(() => {
    return layoutMap.map((entry, i) => ({
      id: i,
      type: Array.isArray(entry) ? "stacked" : "single",
      content: entry,
    }));
  }, []);

  // Update active dot based on scroll position
  const updateActiveDot = useCallback((scrollLeft) => {
    if (!containerWidth.current || !scrollRef.current || containerWidth.current === 0) return;

    const progress = Math.max(0, Math.min(0.99, scrollLeft / containerWidth.current));
    const dotIndex = Math.min(TOTAL_DOTS - 1, Math.floor(progress * TOTAL_DOTS));
    setActiveDot(dotIndex);
  }, [TOTAL_DOTS, setActiveDot]);

  // Smooth scroll animation
  const smoothScroll = useCallback(() => {
    if (!scrollRef.current) return;
    const scrollEl = scrollRef.current;

    // Infinite scroll wrap
    if (scrollEl.scrollLeft >= containerWidth.current) {
      scrollEl.scrollLeft -= containerWidth.current;
    } else if (scrollEl.scrollLeft < 0) {
      scrollEl.scrollLeft += containerWidth.current;
    }

    // Apply velocity
    if (Math.abs(scrollVelocity.current) > 0.01) {
      scrollEl.scrollLeft += scrollVelocity.current;
      scrollVelocity.current *= 0.95; // Smoother deceleration
      updateActiveDot(scrollEl.scrollLeft);

      animationFrameId.current = requestAnimationFrame(smoothScroll);
      isScrolling.current = true;
    } else {
      scrollVelocity.current = 0;
      isScrolling.current = false;
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
        animationFrameId.current = null;
      }
    }
  }, [updateActiveDot]);

  // Handle wheel scroll
  const handleWheel = useCallback((e) => {
    e.preventDefault();

    // Add velocity with smooth acceleration
    const delta = e.deltaY * 0.8;
    scrollVelocity.current += delta;

    // Limit maximum velocity
    scrollVelocity.current = Math.max(-30, Math.min(30, scrollVelocity.current));

    if (!isScrolling.current) {
      isScrolling.current = true;
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      animationFrameId.current = requestAnimationFrame(smoothScroll);
    }
  }, [smoothScroll]);

  // Handle media loading
  const handleMediaLoad = useCallback((key) => {
    setLoadingStates((prev) => ({ ...prev, [key]: false }));
  }, []);

  const handleVideoMetadata = useCallback((key, e) => {
    const video = e.target;
    if (video && isVideo(video.src)) {
      video.muted = true;
      video.playsInline = true;
      video.play().catch(err => {
        // Silent fail for autoplay restrictions
        if (err.name !== 'AbortError') {
          console.debug('Video autoplay prevented:', err.message);
        }
      });
    }
    handleMediaLoad(key);
  }, [handleMediaLoad]);

  // Initialize loading states
  useEffect(() => {
    const initialLoadingStates = {};
    items.forEach((item, i) => {
      if (item.type === "stacked") {
        item.content.forEach((_, subIdx) => {
          initialLoadingStates[`${i}-${subIdx}`] = true;
        });
      } else {
        initialLoadingStates[i] = true;
      }
    });
    setLoadingStates(initialLoadingStates);

    // Clear loading states after timeout as fallback
    const timer = setTimeout(() => {
      setLoadingStates(prev => {
        const newState = { ...prev };
        Object.keys(newState).forEach(key => {
          newState[key] = false;
        });
        return newState;
      });
    }, 5000);

    return () => clearTimeout(timer);
  }, [items]);

  // Setup scroll event listeners
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    // Calculate container width after DOM is ready
    const updateWidth = () => {
      containerWidth.current = el.scrollWidth / 2;
      updateActiveDot(el.scrollLeft);
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);

    let startX = 0;
    let scrollLeftStart = 0;
    let touchStartX = 0;
    let touchScrollStart = 0;

    // Mouse drag handlers
    const handleMouseDown = (e) => {
      if (e.button !== 0) return; // Left click only
      setIsDragging(true);
      startX = e.pageX - el.offsetLeft;
      scrollLeftStart = el.scrollLeft;
      el.style.cursor = 'grabbing';
      el.style.userSelect = 'none';

      // Stop any ongoing scroll animation
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
        animationFrameId.current = null;
      }
      scrollVelocity.current = 0;
      isScrolling.current = false;
    };

    const handleMouseMove = (e) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.pageX - el.offsetLeft;
      const walk = (x - startX) * 1.2;
      el.scrollLeft = scrollLeftStart - walk;
      updateActiveDot(el.scrollLeft);
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      el.style.cursor = 'grab';
      el.style.userSelect = '';
    };

    // Touch handlers
    const handleTouchStart = (e) => {
      touchStartX = e.touches[0].pageX;
      touchScrollStart = el.scrollLeft;

      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
        animationFrameId.current = null;
      }
      scrollVelocity.current = 0;
      isScrolling.current = false;
    };

    const handleTouchMove = (e) => {
      const x = e.touches[0].pageX;
      const walk = (x - touchStartX) * 1.2;
      el.scrollLeft = touchScrollStart - walk;
      updateActiveDot(el.scrollLeft);
    };

    const handleScroll = () => {
      if (!isDragging && !isScrolling.current) {
        updateActiveDot(el.scrollLeft);
      }
    };

    // Add event listeners
    el.addEventListener("wheel", handleWheel, { passive: false });
    el.addEventListener("scroll", handleScroll, { passive: true });
    el.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    el.addEventListener("touchstart", handleTouchStart, { passive: false });
    el.addEventListener("touchmove", handleTouchMove, { passive: false });
    el.addEventListener("touchend", handleMouseUp);

    // Set initial cursor
    el.style.cursor = 'grab';

    return () => {
      window.removeEventListener('resize', updateWidth);
      el.removeEventListener("wheel", handleWheel);
      el.removeEventListener("scroll", handleScroll);
      el.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      el.removeEventListener("touchstart", handleTouchStart);
      el.removeEventListener("touchmove", handleTouchMove);
      el.removeEventListener("touchend", handleMouseUp);

      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [handleWheel, isDragging, updateActiveDot]);

  // Render media component
  const renderMedia = useCallback((mediaSrc, key, className = "h-full w-full object-cover") => {
    if (isVideo(mediaSrc)) {
      return (
        <video
          key={key}
          src={mediaSrc}
          muted
          preload='metadata'
          playsInline
          loop
          className={className}
          onLoadedMetadata={(e) => handleVideoMetadata(key, e)}
          onError={() => handleMediaLoad(key)}
        />
      );
    } else if (isImage(mediaSrc) || isGif(mediaSrc)) {
      return (
        <img
          key={key}
          src={mediaSrc}
          alt={`Media ${key}`}
          className={className}
          loading="lazy"
          onLoad={() => handleMediaLoad(key)}
          onError={() => handleMediaLoad(key)}
        />
      );
    }
    return null;
  }, [handleVideoMetadata, handleMediaLoad]);

  // Render loading spinner
  const renderLoadingSpinner = (size = "w-10 h-10") => (
    <div className="absolute inset-0 flex items-center justify-center bg-[#0F172A] bg-opacity-70 z-10 backdrop-blur-sm">
      <div className={`${size} border-4 border-white border-t-[#33BD51] rounded-full animate-spin`}></div>
    </div>
  );

  return (
    <div className="relative pt-2 md:pt-10 bg-[#0F172A] text-white overflow-hidden">
      {/* Gradient overlays */}
      <div
        className="pointer-events-none absolute top-0 right-0 h-full w-[100px] md:w-[300px] z-10"
        style={{
          background: "linear-gradient(to left, rgba(15,23,42,1), rgba(15,23,42,0))",
        }}
      />
      <div
        className="pointer-events-none absolute top-0 left-0 h-full w-[50px] md:w-[100px] z-10"
        style={{
          background: "linear-gradient(to right, rgba(15,23,42,1), rgba(15,23,42,0))",
        }}
      />

      {/* Side text */}
      <div className="absolute right-0 top-1/2 md:top-2/3 -translate-y-1/2 z-20 md:pr-6 flex flex-col items-end gap-6">
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
        <div className="mt-auto pb-2 pr-2 animate-bounce">
          <img src={mouse} alt="mouse icon" className="w-[35px]" />
        </div>
      </div>

      {/* Scroll section */}
      <div
        id="works-scroll"
        ref={scrollRef}
        className="overflow-x-auto h-[600px] select-none"
        style={{
          scrollBehavior: "auto",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          WebkitOverflowScrolling: "touch",
        }}
      >
        <div className="flex gap-[10px] h-[600px] w-max items-center px-4">
          {items.map((item, idx) => {
            if (item.type === "single") {
              const isLoading = loadingStates[idx];
              const isHovered = hoveredIndex === idx;

              return (
                <div
                  key={idx}
                  className={`h-full w-[350px] flex items-center justify-center bg-[#0F172A] 
                     overflow-hidden relative cursor-pointer
                    transition-all duration-500 ease-out
                    ${isHovered
                      ? " shadow-2xl z-20"
                      : hoveredIndex !== null
                        ? "border-transparent opacity-40"
                        : "border-transparent opacity-100"
                    }`}
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {isLoading && renderLoadingSpinner()}
                  {renderMedia(item.content, idx)}
                </div>
              );
            }

            // Stacked layout
            return (
              <div
                key={idx}
                className="relative w-[350px] overflow-hidden flex flex-col gap-[10px]"
              >
                {item.content.map((subMedia, subIdx) => {
                  const flatIndex = `${idx}-${subIdx}`;
                  const isLoading = loadingStates[flatIndex];
                  const isHovered = hoveredIndex === flatIndex;
                  const mediaHeight = subIdx === 0 || subIdx === 1 ? 240 : 90;

                  return (
                    <div
                      key={subIdx}
                      style={{ height: `${mediaHeight}px` }}
                      className={`w-full flex items-center justify-center bg-[#0F172A] 
                          overflow-hidden relative cursor-pointer
                        transition-all duration-500 ease-out
                        ${isHovered
                          ? " shadow-2xl z-20"
                          : hoveredIndex !== null
                            ? "border-transparent opacity-40"
                            : "border-transparent opacity-100"
                        }`}
                      onMouseEnter={() => setHoveredIndex(flatIndex)}
                      onMouseLeave={() => setHoveredIndex(null)}
                    >
                      {isLoading && renderLoadingSpinner("w-8 h-8")}
                      {renderMedia(subMedia, flatIndex)}
                    </div>
                  );
                })}
              </div>
            );
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