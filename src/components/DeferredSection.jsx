import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

const DeferredSection = ({ children, className = "", rootMargin = "200px" }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element || isVisible) return;

    if (typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [isVisible, rootMargin]);

  return (
    <section ref={ref} className={className}>
      {isVisible ? children : <div className="min-h-[240px]" aria-hidden="true" />}
    </section>
  );
};

DeferredSection.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  rootMargin: PropTypes.string,
};

export default DeferredSection;
