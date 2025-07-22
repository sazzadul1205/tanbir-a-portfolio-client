import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

const CountUpOnView = ({ targetNumber, duration = 2000, className }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let start = 0;
          const increment = targetNumber / (duration / 16); // roughly 60fps
          const step = () => {
            start += increment;
            if (start < targetNumber) {
              setCount(Math.floor(start));
              requestAnimationFrame(step);
            } else {
              setCount(targetNumber);
            }
          };
          requestAnimationFrame(step);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [targetNumber, duration]);

  return (
    <p ref={ref} className={className}>
      {count}+
    </p>
  );
};

CountUpOnView.propTypes = {
  targetNumber: PropTypes.number.isRequired,
  duration: PropTypes.number,
  className: PropTypes.string,
};

export default CountUpOnView;
