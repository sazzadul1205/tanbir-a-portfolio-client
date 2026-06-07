// src/Pages/GIF/GIFGallery/GIFGallery.jsx

// React
import { useState, useMemo } from "react";

// Packages
import PropTypes from "prop-types";

// Motion
import { motion, AnimatePresence } from "framer-motion";

// Icons
import { IoClose } from "react-icons/io5";

// Masonry
import Masonry from "react-masonry-css";

/**
 * GIFGallery Component
 * 
 * A responsive masonry gallery for GIF images grouped by "families".
 * Clicking any image shows the family's main 300x250 image in detail view,
 * with related images and a "More GIFs" section.
 * 
 * @param {string} initialFilter - Initial filter value ("All" or a size string)
 * @param {function} onImageSelect - Callback when an image is selected (after mapping to main family image)
 */
const GIFGallery = ({ initialFilter = "All", onImageSelect = null }) => {
  // State: active filter and currently selected image (null = gallery view)
  const [activeFilter, setActiveFilter] = useState(initialFilter);
  const [selectedGif, setSelectedGif] = useState(null);

  /**
   * Helper: parse "WxH" string into numbers
   * @param {string} size - e.g. "300x250"
   * @returns {{w: number, h: number}}
   */
  const parseSize = (size) => {
    const [w, h] = size.split("x").map((s) => parseInt(s.trim(), 10));
    return { w, h };
  };

  /**
   * Generate placeholder image URL for a given size and ID.
   * Uses placehold.co service.
   */
  const getPlaceholderUrl = (size, id) => {
    const { w, h } = parseSize(size);
    return `https://placehold.co/${w}x${h}?text=GIF+${id}`;
  };

  // Available sizes (each family contains one of each size)
  const baseItems = [
    { size: "300x250" },
    { size: "300x600" },
    { size: "160x600" },
    { size: "320x100" },
    { size: "300x50" },
  ];

  // Generate 40 GIF objects, grouped into families of 5 (each family has all 5 sizes)
  const [gifs] = useState(() => {
    const result = [];
    for (let i = 0; i < 40; i++) {
      const base = baseItems[i % baseItems.length];
      const id = i + 1;
      const { w, h } = parseSize(base.size);
      const familyId = Math.ceil(id / 5); // families 1..8
      result.push({
        id,
        size: base.size,
        url: getPlaceholderUrl(base.size, id),
        width: w,
        height: h,
        title: `GIF Image ${id}`,
        description: `This is a ${base.size} GIF image designed for digital advertising campaigns. The dimensions of ${base.size.split('x')[0]}×${base.size.split('x')[1]} pixels make it ideal for various placement strategies across websites and platforms.`,
        category: "Digital Ad",
        format: "GIF",
        likes: Math.floor(Math.random() * 500),
        familyId: familyId,
        tags: [`size-${base.size}`, `ad-${base.size}`, `banner-${base.size}`, `family-${familyId}`],
      });
    }
    return result;
  });

  /**
   * Get the "main" image (300x250) of a given family.
   * Used to display the hero image when any family member is clicked.
   */
  const getMainImageOfFamily = (familyId) => {
    return gifs.find(gif => gif.familyId === familyId && gif.size === "300x250");
  };

  /**
   * Handle click on any GIF thumbnail.
   * Shows the family's main 300x250 image instead of the clicked one.
   * Calls onImageSelect callback if provided.
   */
  const handleImageClick = (clickedGif) => {
    const mainImage = getMainImageOfFamily(clickedGif.familyId);
    const imageToShow = mainImage || clickedGif; // fallback (should never happen)
    setSelectedGif(imageToShow);
    if (onImageSelect) onImageSelect(imageToShow);
  };

  /**
   * Get all other images belonging to the same family as the selected image.
   * Used for the "Related Images" section.
   */
  const getRelatedImages = (selectedImage) => {
    return gifs.filter(
      gif => gif.familyId === selectedImage.familyId && gif.id !== selectedImage.id
    );
  };

  // Filters: "All" + each distinct size
  const filters = ["All", ...baseItems.map(item => item.size)];

  // Memoized filtered GIFs based on active filter
  const filteredGifs = useMemo(() =>
    activeFilter === "All"
      ? gifs
      : gifs.filter((gif) => gif.size === activeFilter),
    [activeFilter, gifs]
  );

  // Helper: count items per filter for display badges
  const getFilterCount = (filter) => {
    if (filter === "All") return gifs.length;
    return gifs.filter(gif => gif.size === filter).length;
  };

  // Responsive breakpoints for Masonry layout (columns)
  const breakpointColumns = {
    default: 4,   // ≥1100px
    1100: 3,
    700: 2,
    500: 1
  };

  /**
   * Individual grid item component with hover animation and size badge.
   */
  const GridItem = ({ gif, onClick }) => (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300 }}
      onClick={() => onClick(gif)}
      className="relative cursor-pointer z-10"
    >
      <div className="relative rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
        <img
          src={gif.url}
          alt={`GIF ${gif.id} - ${gif.size}`}
          width={gif.width}
          height={gif.height}
          className="block"
          style={{ width: gif.width, height: gif.height }}
          loading="lazy"
          onError={(e) => {
            e.target.src = `https://placehold.co/${gif.width}x${gif.height}/666666/white?text=Error`;
          }}
        />
        {/* Size badge (visible on hover) */}
        <div className="absolute bottom-3 left-3 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded-md opacity-0 hover:opacity-100 transition-opacity backdrop-blur-sm">
          {gif.size}
        </div>
      </div>
    </motion.div>
  );

  GridItem.propTypes = {
    gif: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  return (
    <>
      <div className="mx-auto max-w-7xl">
        {/* Gallery Header */}
        <h2 className="text-4xl font-semibold text-center py-3">
          GIF Gallery
          <p className="mx-auto bg-white mt-2 w-[300px] h-[3px]"></p>
        </h2>

        {/* Filter Buttons (hidden when detail view is open) */}
        {!selectedGif && (
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            {filters.map((filter) => {
              const count = getFilterCount(filter);
              const isActive = activeFilter === filter;
              return (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`relative text-sm font-medium tracking-wide px-1 py-2 transition-colors duration-200 group
                    ${isActive ? "text-white font-bold" : "text-gray-200 hover:text-white"}
                  `}
                  aria-pressed={isActive}
                  aria-label={`Filter by ${filter} (${count} items)`}
                >
                  {filter}
                  <span className="ml-1 text-xs opacity-70">({count})</span>
                  {/* Underline animation (similar to Navbar) */}
                  <span
                    className={`absolute left-1/2 -translate-x-1/2 bottom-0 h-[1.5px] bg-white transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                  />
                </button>
              );
            })}
          </div>
        )}

        {/* Animated content: either detail view or grid view */}
        <AnimatePresence mode="wait">
          {selectedGif ? (
            // DETAIL VIEW
            <motion.div
              key="detail"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <div className="mb-8 relative">
                {/* Close button (returns to gallery) */}
                <button
                  onClick={() => setSelectedGif(null)}
                  className="absolute -right-12 top-4 w-10 h-10 bg-white hover:bg-gray-100 rounded-full shadow-lg flex items-center justify-center z-10 transition-transform hover:rotate-90"
                  aria-label="Close detail view"
                >
                  <IoClose className="w-6 h-6 text-gray-600" />
                </button>

                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Selected image (original size) */}
                  <div className="lg:w-auto flex-shrink-0 flex justify-center">
                    <div className="rounded-lg overflow-hidden shadow-2xl inline-block">
                      <img
                        src={selectedGif.url}
                        alt={selectedGif.title}
                        width={selectedGif.width}
                        height={selectedGif.height}
                        className="block"
                        style={{ width: selectedGif.width, height: selectedGif.height }}
                        onError={(e) => {
                          e.target.src = `https://placehold.co/${selectedGif.width}x${selectedGif.height}/666666/white?text=Error`;
                        }}
                      />
                    </div>
                  </div>

                  {/* Image metadata */}
                  <div className="flex-1 space-y-6">
                    <div>
                      <h2 className="text-3xl font-bold mb-2">{selectedGif.title}</h2>
                      <div className="flex gap-2 flex-wrap">
                        <span className="inline-block bg-black text-white text-sm px-3 py-1 rounded-full">
                          {selectedGif.size}
                        </span>
                        <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                          {selectedGif.format}
                        </span>
                        <span className="inline-block bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">
                          {selectedGif.category}
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-200 leading-relaxed text-lg">
                      {selectedGif.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Related Images (other family members) */}
              {getRelatedImages(selectedGif).length > 0 && (
                <div className="border-t pt-8 mt-8">
                  <h3 className="text-xl font-semibold mb-6 text-center">Related Images</h3>
                  <Masonry
                    breakpointCols={breakpointColumns}
                    className="masonry-grid"
                    columnClassName="masonry-grid_column"
                  >
                    {getRelatedImages(selectedGif).map((gif) => (
                      <div
                        key={gif.id}
                        onClick={() => handleImageClick(gif)}
                        className="cursor-pointer transition-transform hover:scale-105"
                      >
                        <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                          <img
                            src={gif.url}
                            alt={`${gif.title} - ${gif.size}`}
                            width={gif.width}
                            height={gif.height}
                            className="block"
                            style={{ width: gif.width, height: gif.height }}
                            loading="lazy"
                            onError={(e) => {
                              e.target.src = `https://placehold.co/${gif.width || 400}x${gif.height || 300}/666666/white?text=Error`;
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </Masonry>
                </div>
              )}

              {/* More GIFs (rest of the gallery excluding current selected) */}
              <div className="border-t pt-8 mt-8">
                <h3 className="text-xl font-semibold mb-6 text-center">More GIFs</h3>
                {filteredGifs.filter(gif => gif.id !== selectedGif.id).length > 0 ? (
                  <Masonry
                    breakpointCols={breakpointColumns}
                    className="masonry-grid"
                    columnClassName="masonry-grid_column"
                  >
                    {filteredGifs
                      .filter(gif => gif.id !== selectedGif.id)
                      .map((gif) => (
                        <GridItem key={gif.id} gif={gif} onClick={handleImageClick} />
                      ))}
                  </Masonry>
                ) : (
                  <p className="text-gray-500 text-center py-12">No more GIFs to display.</p>
                )}
              </div>
            </motion.div>
          ) : (
            // GRID VIEW (masonry gallery)
            <motion.div
              key="grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {filteredGifs.length > 0 ? (
                <Masonry
                  breakpointCols={breakpointColumns}
                  className="masonry-grid"
                  columnClassName="masonry-grid_column"
                >
                  {filteredGifs.map((gif) => (
                    <GridItem key={gif.id} gif={gif} onClick={handleImageClick} />
                  ))}
                </Masonry>
              ) : (
                // Empty state when no GIFs match the filter
                <div className="text-center py-20">
                  <div className="text-6xl mb-4">🔍</div>
                  <h3 className="text-xl font-semibold mb-2">No GIFs found</h3>
                  <p className="text-gray-500">
                    No GIFs match the &quot;{activeFilter}&quot; filter.
                  </p>
                  <button
                    onClick={() => setActiveFilter("All")}
                    className="mt-4 px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition"
                  >
                    Show All GIFs
                  </button>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Masonry grid custom CSS (required for react-masonry-css) */}
        <style>{`
          .masonry-grid {
            display: flex;
            margin-left: -20px;
            width: auto;
          }
          .masonry-grid_column {
            padding-left: 20px;
            background-clip: padding-box;
          }
          .masonry-grid_column > div {
            margin-bottom: 20px;
          }
        `}</style>
      </div>
    </>
  );
};

GIFGallery.propTypes = {
  initialFilter: PropTypes.oneOf(["All", "300x250", "300x600", "160x600", "320x100", "300x50"]),
  onImageSelect: PropTypes.func,
};

GIFGallery.defaultProps = {
  initialFilter: "All",
  onImageSelect: null,
};

export default GIFGallery;