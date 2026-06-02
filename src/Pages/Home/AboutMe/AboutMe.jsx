// Packages
import PropTypes from "prop-types";
import { useState, useEffect } from "react";

// Assets
import Desktop from "../../../assets/Desktop.png";
import { Link } from "react-router";

const AboutMe = ({ id }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  // Preload image
  useEffect(() => {
    const img = new Image();
    img.src = Desktop;
    img.onload = () => setImageLoaded(true);
  }, []);

  // JSON-LD structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Tanbir Ahmed",
    "jobTitle": "Motion Graphics Designer & Ad Creative Specialist",
    "description": "Motion graphics services delivering fast, stunning visuals for brands, agencies, and marketing teams. Specializing in After Effects animation, HTML5 banner design, and social media ad production.",
    "url": "https://www.upwork.com/freelancers/tanbirahmed2",
    "knowsAbout": [
      "Motion Graphics",
      "After Effects Animation",
      "HTML5 Banner Design",
      "Social Media Ad Production",
      "Digital Marketing",
      "Video Content Creation"
    ],
    "makesOffer": {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Motion Graphics & Ad Creative Services",
        "description": "High-impact motion graphics, scroll-stopping ads, and compelling video content for digital marketing success",
        "serviceType": "Creative Design"
      }
    }
  };

  return (
    <section id={id} className="py-1 pt-10 md:pt-16 md:py-10 px-1 md:px-4">
      {/* JSON-LD Structured Data for SEO */}
      <script type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </script>

      {/* Title */}
      <h4 className="text-2xl sm:text-3xl md:text-4xl font-semibold inter max-w-5xl text-center leading-snug md:leading-tight text-white mx-auto">
        Motion Graphics & High-Impact
        <span className="overline decoration-[#2FA94C] decoration-2 sm:decoration-3 ml-1 sm:ml-2 text-white">
          Ad Creative
        </span>
        <br className="hidden sm:block" />
        for
        <span className="relative inline-block ml-1 sm:ml-2 custom-underline text-white">
          Digital Marketing
        </span>{" "}
        Success
      </h4>

      {/* About Me */}
      <div className="inter pt-10 pb-9 px-5 max-w-[986px] mx-auto text-center text-white text-lg sm:text-base leading-relaxed">
        <p className="pt-1">
          Looking for motion graphics services that deliver fast, look stunning,
          and drive results?
        </p>
        <p className="pt-1">
          I help brands, agencies, and marketing teams bring their ideas to life
          with dynamic visuals, scroll-stopping ads, and <br /> compelling video
          content — all tailored for today&apos;s top platforms.
        </p>
        <p className="pt-1">
          With years of hands-on experience in After Effects animation, HTML5
          banner design, and social media ad <br /> production, I specialize in
          creating digital campaigns that not only perform — they convert.
        </p>
        <p className="pt-1">
          Need it done fast? No problem. I deliver top-level creative with
          express turnaround — without sacrificing quality.
        </p>
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
        <Link
          to={"https://www.upwork.com/freelancers/tanbirahmed2?mp_source=share"}
          target="_blank"
        >
          <button className="flex items-center gap-2 bg-white text-black py-2 px-6 rounded-full shadow hover:shadow-lg transition cursor-pointer">
            <span
              className="p-1 bg-[#33BD51] rounded-full w-2 h-2"
              style={{
                animation: "blink 1.5s infinite",
                animationTimingFunction: "ease-in-out",
              }}
            />
            <p className="text-sm font-semibold inter">Hire Me Now</p>
          </button>
        </Link>
      </div>

      {/* Image with loading optimization */}
      <div className="mt-10 mx-auto w-full md:max-w-7xl px-0 md:px-4">
        <div className="relative w-full md:max-w-[1200px] mx-auto">
          {/* Low-quality placeholder or skeleton loader */}
          {!imageLoaded && (
            <div className="w-full h-48 md:h-96 bg-gray-800 rounded-md animate-pulse" />
          )}

          {/* Actual image */}
          <img
            src={Desktop}
            alt="Desktop Visual showing motion graphics and ad creative portfolio"
            className={`w-full rounded-md shadow-md transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0 absolute inset-0'
              }`}
            loading="lazy"
            onLoad={() => setImageLoaded(true)}
          />
        </div>
      </div>
    </section>
  );
};

// Prop Validation
AboutMe.propTypes = {
  id: PropTypes.string.isRequired,
};

export default AboutMe;