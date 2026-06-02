// Packages
import PropTypes from "prop-types";
import { useState, useEffect } from "react";

// Assets
import Frame from "../../../assets/Tools/Frame.png";
import Midjourney from "../../../assets/Tool/Midjourney.svg";
import AdRoll from "../../../assets/Tool/AdRoll.svg";
import Double from "../../../assets/Tool/Double.svg";
import HTML5 from "../../../assets/Tool/HTML5.svg";
import Adobe from "../../../assets/Tool/Adobe.svg";
import Meta from "../../../assets/Tool/Meta.svg";
import GWD from "../../../assets/Tool/GWD.svg";
import CSS from "../../../assets/Tool/CSS.svg";
import JS from "../../../assets/Tool/JS.svg";

// Tools Data
const toolsData = [
  { icon: HTML5, name: "HTML5", desc: "Semantic markup for structured, accessible ad creatives and web content" },
  { icon: CSS, name: "CSS3", desc: "Advanced styling and animations for responsive, visually engaging designs" },
  { icon: Meta, name: "Meta Ads", desc: "Campaign management and creative optimization for Facebook and Instagram" },
  { icon: JS, name: "JavaScript", desc: "Interactive elements and dynamic functionality for rich-media experiences" },
  { icon: Adobe, name: "Adobe Creative Suite", desc: "Industry-standard tools for motion graphics, video editing, and design" },
  { icon: GWD, name: "Google Web Designer", desc: "Building interactive HTML5 ads for Google Ads and DV360 platforms" },
  { icon: Double, name: "DoubleClick", desc: "Ad serving and campaign management for programmatic advertising" },
  { icon: Midjourney, name: "Midjourney", desc: "AI-powered generative art for conceptual design and visual exploration" },
  { icon: AdRoll, name: "AdRoll", desc: "Retargeting and programmatic advertising platform for brand awareness" },
];

const Tools = ({ id }) => {
  const [loadedImages, setLoadedImages] = useState({});
  const [frameLoaded, setFrameLoaded] = useState(false);

  // Preload all tool icons and frame image
  useEffect(() => {
    // Preload frame
    const frameImg = new Image();
    frameImg.src = Frame;
    frameImg.onload = () => setFrameLoaded(true);

    // Preload all tool icons
    toolsData.forEach((tool) => {
      const img = new Image();
      img.src = tool.icon;
      img.onload = () => {
        setLoadedImages((prev) => ({
          ...prev,
          [tool.icon]: true,
        }));
      };
    });
  }, []);

  // JSON-LD structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Tools & Technologies",
    "description": "Professional tools and technologies used for motion graphics, digital advertising, and creative design",
    "itemListElement": toolsData.map((tool, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "SoftwareApplication",
        "name": tool.name,
        "description": tool.desc,
        "applicationCategory": "DesignApplication"
      }
    }))
  };

  return (
    <section id={id} className="bg-white">
      {/* JSON-LD Structured Data for SEO */}
      <script type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </script>

      {/* Title */}
      <h3 className="inter mx-auto font-semibold text-3xl md:text-[40px] text-center text-black pt-16 max-w-[90%] md:max-w-2xl">
        Tools & Technologies I Use
      </h3>

      {/* Sub Title */}
      <p className="inter mx-auto text-base md:text-lg text-center text-black pt-4 pb-4 md:pb-[210px] max-w-[90%] md:max-w-3xl">
        To deliver performance-driven creative, I work with industry-standard
        platforms and next-gen generative tools
      </p>

      {/* Icons Container – Mobile Only */}
      <div className="grid grid-cols-3 justify-items-center gap-y-6 gap-x-4 mx-auto md:hidden">
        {toolsData.map((tool, idx) => (
          <div
            key={idx}
            className="relative w-20 h-20 flex items-center justify-center bg-[#172C5C] rounded-full group cursor-pointer hover:[animation:spinOnce_1.2s_ease-in-out]"
          >
            {/* Skeleton loader */}
            {!loadedImages[tool.icon] && (
              <div className="absolute inset-0 bg-[#1a3a6e] rounded-full animate-pulse" />
            )}

            {/* Tool icon */}
            <img
              src={tool.icon}
              alt={`${tool.name} tool icon`}
              className={
                tool.name === "AdRoll"
                  ? `w-[71px] h-[11px] transition-opacity duration-300 ${loadedImages[tool.icon] ? 'opacity-100' : 'opacity-0'
                  }`
                  : `w-10 h-10 transition-opacity duration-300 ${loadedImages[tool.icon] ? 'opacity-100' : 'opacity-0'
                  }`
              }
              loading="lazy"
              onLoad={() =>
                setLoadedImages((prev) => ({
                  ...prev,
                  [tool.icon]: true,
                }))
              }
            />
          </div>
        ))}
      </div>

      {/* Desktop Layout */}
      <div className="relative w-full max-w-4xl mx-auto">
        {/* Primary Frame Image with loading state */}
        <div className="relative w-full max-w-[682px] h-auto mx-auto">
          {/* Skeleton loader for frame */}
          {!frameLoaded && (
            <div className="w-full aspect-[682/407] bg-gray-200 rounded-md animate-pulse" />
          )}

          {/* Frame image */}
          <img
            src={Frame}
            alt="Tools and technologies framework"
            className={`w-full max-w-[682px] h-auto mx-auto object-contain transition-opacity duration-300 ${frameLoaded ? 'opacity-100' : 'opacity-0 absolute inset-0'
              }`}
            loading="lazy"
            onLoad={() => setFrameLoaded(true)}
          />
        </div>

        {/* Icons Container - Desktop Only */}
        <div className="absolute w-[823px] h-[406px] mx-auto inset-0 hidden md:flex">
          {[
            { tool: toolsData[0], bottom: "100px", right: "763px" },  // HTML5
            { tool: toolsData[1], bottom: "202px", right: "702px" },  // CSS
            { tool: toolsData[2], bottom: "292px", right: "622px" },  // Meta
            { tool: toolsData[3], bottom: "352px", right: "522px" },  // JS
            { tool: toolsData[4], bottom: "392px", right: "422px" },  // Adobe
            { tool: toolsData[5], bottom: "392px", left: "452px" },   // GWD
            { tool: toolsData[6], bottom: "352px", left: "552px" },   // Double
            { tool: toolsData[7], bottom: "292px", left: "652px" },   // Midjourney
            { tool: toolsData[8], bottom: "192px", left: "722px" },   // AdRoll
          ].map(({ tool, bottom, right, left }, idx) => (
            <div
              key={idx}
              className="absolute group cursor-pointer hover:z-20"
              style={{ bottom, right, left }}
            >
              <div className="bg-[#172C5C] rounded-full h-20 w-20 transition-all duration-500 ease-in-out overflow-hidden flex items-center px-2 origin-left relative group-hover:delay-[300ms] group-hover:w-[220px]">
                <div className="relative w-full h-full flex items-center">
                  {/* Tool icon with loading state */}
                  <div className="relative flex-shrink-0 z-10">
                    {!loadedImages[tool.icon] && (
                      <div className="absolute inset-0 bg-[#1a3a6e] rounded-full animate-pulse" />
                    )}
                    <img
                      src={tool.icon}
                      alt={`${tool.name} tool`}
                      className={`transition-all duration-300 ease-in-out group-hover:scale-[0.8] ${tool.name === "AdRoll"
                          ? "w-[71px] h-[11px]"
                          : tool.name === "GWD" || tool.name === "Double" || tool.name === "Midjourney"
                            ? "w-[70px] h-[40px]"
                            : "w-[65px] h-[40px]"
                        } ${loadedImages[tool.icon] ? 'opacity-100' : 'opacity-0'
                        }`}
                      loading="lazy"
                      onLoad={() =>
                        setLoadedImages((prev) => ({
                          ...prev,
                          [tool.icon]: true,
                        }))
                      }
                    />
                  </div>

                  {/* Tool description text */}
                  <p className="absolute left-[80px] opacity-0 transition-opacity duration-300 ease-in-out delay-[800ms] group-hover:opacity-100 pointer-events-none text-white text-[10px] leading-4 w-[120px] z-0 pr-2 py-3">
                    {tool.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

Tools.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Tools;