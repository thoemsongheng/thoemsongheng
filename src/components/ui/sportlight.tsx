"use client";

import { useEffect, useRef } from "react";
import styles from "./spotlight.module.css";

export default function Spotlight() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const spotlight = ref.current;

      const spotlightWidth = spotlight?.offsetWidth;
      const spotlightHeight = spotlight?.offsetHeight;

      const x = event?.clientX - Number(spotlightWidth ?? 0) / 2;
      const y = event?.clientY - Number(spotlightHeight ?? 0) / 2;

      if (ref.current) {
        ref.current.style.left = `${x}px`;
        ref.current.style.top = `${y}px`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [ref]);

  return <div className={styles.spotlight} ref={ref} />;
}
