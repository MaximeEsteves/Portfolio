// src/components/Line/Line.jsx
import "./Line.scss";
import { useEffect, useState, useRef } from "react";
import { isFirstLine } from "../../lineTracker";

export default function Line() {
  const [offset, setOffset] = useState(0);
  const [containerWidth, setContainerWidth] = useState(null);
  const containerRef = useRef(null);
  const [isActive] = useState(() => isFirstLine());

  // Scroll pour le gradient
  useEffect(() => {
    if (!isActive) return;
    const handleScroll = () => {
      setOffset(Math.min(window.scrollY / 500, 1));
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isActive]);

  // Mesure de la largeur
  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const initialPx = 300;
  const initialPct = containerWidth
    ? Math.min((initialPx / containerWidth) * 100, 100)
    : 10;
  const dynamicPct = initialPct + offset * (100 - initialPct);

  const bgStyle = isActive
    ? {
        background:
          offset < 1
            ? `linear-gradient(
                to right,
                #e93232 0%,
                #808080 ${dynamicPct}%,
                #808080 100%
              )`
            : "#e93232",
      }
    : {
        background: `linear-gradient(
          to right,
          #e93232 0%,
          #808080 ${initialPct}%,
          #808080 100%
        )`,
      };

  return (
    <div className="line-container">
      <div ref={containerRef} className="contenair-line" style={bgStyle} />
      <div className="contenair-line-bis" />
    </div>
  );
}
