import { useState, useMemo } from "react";
import { IoClose } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";

const GIFGallery = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedGif, setSelectedGif] = useState(null);

  const parseSize = (size) => {
    const [w, h] = size.split("x").map((s) => parseInt(s.trim(), 10));
    return { w, h };
  };

  const getPlaceholderUrl = (size, title) => {
    const { w, h } = parseSize(size);
    return `https://placehold.co/${w}x${h}?text=${encodeURIComponent(title)}`;
  };

  const baseItems = [
    { size: "300x250" },
    { size: "300x600" },
    { size: "160x600" },
    { size: "320x100" },
    { size: "300x50" },
  ];

  const [gifs] = useState(() => {
    const result = [];

    for (let i = 0; i < 40; i++) {
      const base = baseItems[i % baseItems.length];
      const id = i + 1;
      const { w, h } = parseSize(base.size);

      const familyId = Math.ceil(id / 5);

      result.push({
        id,
        size: base.size,
        url: getPlaceholderUrl(base.size, `GIF ${id}`),
        width: w,
        height: h,
        title: `GIF Image ${id}`,
        description: `This is a ${base.size} GIF image designed for digital advertising campaigns. The dimensions of ${base.size.split('x')[0]}×${base.size.split('x')[1]} pixels make it ideal for various placement strategies across websites and platforms.`,
        category: "Digital Ad",
        format: "GIF",
        dateCreated: `2024-${String((id % 12) + 1).padStart(2, '0')}-${String((id % 28) + 1).padStart(2, '0')}`,
        author: `Creator ${familyId}`,
        license: "Standard",
        downloads: Math.floor(Math.random() * 1000),
        likes: Math.floor(Math.random() * 500),
        familyId: familyId,
        tags: [`size-${base.size}`, `ad-${base.size}`, `banner-${base.size}`, `family-${familyId}`],
      });
    }

    return result;
  });

  const getRelatedImages = (selectedImage) => {
    return gifs.filter(
      gif => gif.familyId === selectedImage.familyId && gif.id !== selectedImage.id
    );
  };

  const filters = ["All", ...baseItems.map(item => item.size)];

  const filteredGifs = useMemo(() =>
    activeFilter === "All"
      ? gifs
      : gifs.filter((gif) => gif.size === activeFilter),
    [activeFilter, gifs]
  );

  const getFilterCount = (filter) => {
    if (filter === "All") return gifs.length;
    return gifs.filter(gif => gif.size === filter).length;
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: { duration: 0.2 },
    },
  };

  const detailVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
    exit: {
      opacity: 0,
      x: -50,
      transition: { duration: 0.3 },
    },
  };

  const detailChildVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const relatedVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.4,
        staggerChildren: 0.08,
        delayChildren: 0.5,
      },
    },
  };

  const relatedItemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 15,
      },
    },
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Header */}
      <motion.div
        className="text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, type: "spring" }}
      >
        <h1 className="text-3xl font-bold mb-2">GIF Gallery</h1>
        <AnimatePresence>
          {!selectedGif && (
            <motion.p
              className="text-gray-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              Showing {filteredGifs.length} of {gifs.length} GIFs
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Filters */}
      <AnimatePresence>
        {!selectedGif && (
          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {filters.map((filter) => {
              const count = getFilterCount(filter);
              return (
                <motion.button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 
                    ${activeFilter === filter
                      ? "bg-black text-white shadow-lg scale-105"
                      : "bg-gray-200 hover:bg-gray-300 text-gray-700"
                    }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-pressed={activeFilter === filter}
                  aria-label={`Filter by ${filter} (${count} items)`}
                >
                  {filter}
                  <span className="ml-2 text-xs opacity-75">({count})</span>
                </motion.button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content Area */}
      <AnimatePresence mode="wait">
        {selectedGif ? (
          <motion.div
            key="detail-view"
            variants={detailVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Selected Image Detail View */}
            <motion.div
              className="mb-8 relative"
              variants={detailChildVariants}
            >
              {/* Floating Close Button */}
              <motion.button
                onClick={() => setSelectedGif(null)}
                className="absolute -right-12 top-4 w-10 h-10 bg-white hover:bg-gray-100 rounded-full shadow-lg flex items-center justify-center z-10"
                whileHover={{ scale: 1.2, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                aria-label="Close detail view"
              >
                <IoClose className="w-6 h-6 text-gray-600 group-hover:text-black transition-colors" />
              </motion.button>

              <div className="flex flex-col lg:flex-row gap-8">
                {/* Left Side - Selected Image at Original Size */}
                <motion.div
                  className="lg:w-auto flex-shrink-0"
                  initial={{ opacity: 0, x: -50, scale: 0.9 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 20,
                    delay: 0.1,
                  }}
                >
                  <motion.div
                    className="rounded-lg overflow-hidden shadow-lg bg-gray-100 inline-block"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={selectedGif.url}
                      alt={selectedGif.title}
                      width={selectedGif.width}
                      height={selectedGif.height}
                      className="block"
                    />
                  </motion.div>
                </motion.div>

                {/* Right Side - Image Details */}
                <motion.div
                  className="flex-1 space-y-6"
                  variants={detailChildVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <motion.div variants={detailChildVariants}>
                    <motion.h2
                      className="text-3xl font-bold mb-2"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      {selectedGif.title}
                    </motion.h2>
                    <motion.div
                      className="flex gap-2 flex-wrap"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      <span className="inline-block bg-black text-white text-sm px-3 py-1 rounded-full">
                        {selectedGif.size}
                      </span>
                      <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                        {selectedGif.format}
                      </span>
                      <span className="inline-block bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">
                        {selectedGif.category}
                      </span>
                    </motion.div>
                  </motion.div>

                  <motion.p
                    className="text-gray-600 leading-relaxed text-lg"
                    variants={detailChildVariants}
                  >
                    {selectedGif.description}
                  </motion.p>
                </motion.div>
              </div>
            </motion.div>

            {/* Related Images */}
            <AnimatePresence>
              {getRelatedImages(selectedGif).length > 0 && (
                <motion.div
                  className="border-t pt-8 mt-8"
                  variants={relatedVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <motion.h3
                    className="text-xl font-semibold mb-6"
                    variants={detailChildVariants}
                  >
                    Related Images
                  </motion.h3>
                  <div className="flex flex-wrap gap-4">
                    {getRelatedImages(selectedGif).map((gif) => (
                      <motion.div
                        key={gif.id}
                        onClick={() => setSelectedGif(gif)}
                        className="cursor-pointer group flex-shrink-0"
                        variants={relatedItemVariants}
                        whileHover={{
                          scale: 1.05,
                          transition: { duration: 0.2 },
                        }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <motion.img
                          src={gif.url}
                          alt={`${gif.title} - ${gif.size}`}
                          width={gif.width}
                          height={gif.height}
                          className="block rounded hover:opacity-80 transition-opacity"
                          loading="lazy"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                          onError={(e) => {
                            e.target.src = `https://placehold.co/${gif.width || 400}x${gif.height || 300}?text=Error`;
                            e.target.classList.add('opacity-50');
                          }}
                        />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Gallery Grid Below */}
            <motion.div
              className="border-t pt-8 mt-8"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <motion.h3
                className="text-xl font-semibold mb-6"
                variants={detailChildVariants}
              >
                More GIFs
              </motion.h3>
              <AnimatePresence>
                {filteredGifs.filter(gif => gif.id !== selectedGif.id).length > 0 ? (
                  <motion.div
                    className="columns-2 sm:columns-3 md:columns-4 lg:columns-5 gap-4 space-y-4"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    {filteredGifs
                      .filter(gif => gif.id !== selectedGif.id)
                      .map((gif) => (
                        <motion.div
                          key={gif.id}
                          onClick={() => setSelectedGif(gif)}
                          className="break-inside-avoid rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 relative cursor-pointer group"
                          variants={itemVariants}
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.98 }}
                          layout
                        >
                          <img
                            src={gif.url}
                            alt={`GIF ${gif.id} - ${gif.size}`}
                            width={gif.width}
                            height={gif.height}
                            className="w-full h-auto object-cover"
                            loading="lazy"
                            onError={(e) => {
                              e.target.src = `https://placehold.co/${gif.width || 400}x${gif.height || 300}?text=Error`;
                              e.target.classList.add('opacity-50');
                            }}
                          />
                          <div className="absolute bottom-2 left-2 bg-black bg-opacity-60 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                            {gif.size}
                          </div>
                        </motion.div>
                      ))}
                  </motion.div>
                ) : (
                  <motion.p
                    className="text-gray-500 text-center py-12"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    No more GIFs to display.
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            key="gallery-view"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <AnimatePresence>
              {filteredGifs.length > 0 ? (
                <motion.div
                  className="columns-2 sm:columns-3 md:columns-4 lg:columns-5 gap-4 space-y-4"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                >
                  {filteredGifs.map((gif) => (
                    <motion.div
                      key={gif.id}
                      onClick={() => setSelectedGif(gif)}
                      className="break-inside-avoid rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 relative cursor-pointer group"
                      variants={itemVariants}
                      whileHover={{ scale: 1.03, y: -5 }}
                      whileTap={{ scale: 0.98 }}
                      layout
                    >
                      <img
                        src={gif.url}
                        alt={`GIF ${gif.id} - ${gif.size}`}
                        width={gif.width}
                        height={gif.height}
                        className="w-full h-auto object-cover"
                        loading="lazy"
                        onError={(e) => {
                          e.target.src = `https://placehold.co/${gif.width || 400}x${gif.height || 300}?text=Error`;
                          e.target.classList.add('opacity-50');
                        }}
                      />
                      <div className="absolute bottom-2 left-2 bg-black bg-opacity-60 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                        {gif.size}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  className="text-center py-20"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div
                    className="text-6xl mb-4"
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, 10, -10, 0]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  >
                    🔍
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-2">No GIFs found</h3>
                  <p className="text-gray-500">
                    No GIFs match the &quot;{activeFilter}&quot; filter.
                  </p>
                  <motion.button
                    onClick={() => setActiveFilter("All")}
                    className="mt-4 px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Show All GIFs
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GIFGallery;