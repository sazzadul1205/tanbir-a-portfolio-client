const AboutMe = () => {
  return (
    <div className="py-10">
      {/* Title */}
      <h4 className="text-[40px] font-semibold inter max-w-5xl text-center mx-auto leading-tight">
        Motion Graphics & High-Impact
        <span className="overline decoration-[#2FA94C] decoration-3 ml-2">
          Ad Creative
        </span>{" "}
        <br />
        for
        <span className="relative inline-block ml-2 custom-underline">
          Digital Marketing
        </span>{" "}
        Success
      </h4>

      {/* About Me */}
      <div className="py-9 max-w-4xl mx-auto text-center inter">
        <p className="pt-2">
          Looking for motion graphics services that deliver fast, look stunning,
          and drive results?
        </p>
        <p className="pt-2">
          I help brands, agencies, and marketing teams bring their ideas to life
          with dynamic visuals, scroll-stopping ads, and compelling video
          content — all tailored for today’s top platforms.
        </p>
        <p className="pt-2">
          With years of hands-on experience in After Effects animation, HTML5
          banner design, and social media ad production, I specialize in
          creating digital campaigns that not only perform — they convert.
        </p>
        <p className="pt-2">
          Need it done fast? No problem. I deliver top-level creative with
          express turnaround — without sacrificing quality.
        </p>
      </div>

      {/* Button */}
      <div className="flex justify-center gap-3">
        {/* Start Your Project */}
        <div className="flex items-center gap-2 bg-white text-black py-[6px] px-10 rounded-full">
          <span
            className="p-1 bg-[#33BD51] rounded-full w-2 h-2"
            style={{
              animation: "blink 1.5s infinite",
              animationTimingFunction: "ease-in-out",
            }}
          />
          <p className="text-sm font-medium">Start Your Project</p>
        </div>

        {/* Whats App Now */}
        <div className="flex items-center gap-2 bg-white text-black py-[6px] px-10 rounded-full">
          <span
            className="p-1 bg-[#33BD51] rounded-full w-2 h-2"
            style={{
              animation: "blink 1.5s infinite",
              animationTimingFunction: "ease-in-out",
            }}
          />
          <p className="text-sm font-medium">WhatsApp Now</p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
