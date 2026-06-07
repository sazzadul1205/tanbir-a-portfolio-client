// src/Pages/GIF/GIF.jsx

// React
import { Helmet } from "react-helmet-async";

// Components
import Cards from "../Home/Cards/Cards";
import GIFGallery from "./GIFGallery/GIFGallery";
import MyServices from "../Home/MyServices/MyServices";


const GIF = () => {
  return (
    <div>
      {/* SEO Meta Tags and Structured Data */}
      <Helmet>
        <title>GIF Advertising Gallery | Tanbir A Portfolio</title>
        <link rel="canonical" href="/gif" />
        <meta name="description" content="Browse our collection of GIF advertising banners in standard sizes like 300x250, 300x600, 160x600, and more. Optimized for digital campaigns." />
        <meta name="keywords" content="GIF gallery, advertising banners, digital ads, display ads, 300x250, 300x600, 160x600" />
        <meta name="robots" content="index, follow" />
        <meta property="og:url" content="/gif" />
        <meta property="og:title" content="GIF Advertising Gallery" />
        <meta property="og:description" content="High-quality GIF banners for digital advertising campaigns." />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* GIF Gallery */}
      <GIFGallery />

      {/* My Services */}
      <MyServices id="my-services" />

      {/* Cards */}
      <Cards id="blogs" />
    </div>
  );
};

export default GIF;