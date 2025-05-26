"use client";

import { useEffect, useRef } from "react";
import Badge from "../badge";
import styles from "./card.module.css";

const Card = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const cardBorder = ref.current;

      const x = event?.clientX;
      const y = event?.clientY;

      if (ref.current) {
        ref.current.style.setProperty("--mouse-x", `${x ?? 0}px`);
        ref.current.style.setProperty("--mouse-y", `${y ?? 0}px`);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [ref?.current]);

  return (
    <div className={styles.card_container}>
      <div className={styles.card_header}>
        <p>JAN, 2025 - PRESENT</p>
      </div>

      <div className={styles.card_content}>
        <div className={styles.card_title}>
          <h4>
            Fullstack developer
            <span>BONG-IT</span>
          </h4>

          <h5>Fullstack</h5>
        </div>
        <div className={styles.card_description}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore eum
            tenetur autem commodi vero magni et expedita. At ad aperiam
            voluptas, dolores, tempore commodi veritatis ipsum repellendus harum
            blanditiis ipsam magni? Necessitatibus optio eius, amet odit,
            voluptatibus debitis, sapiente repellat at maxime dignissimos
            dolorum neque.
          </p>
        </div>
        <div className={styles.card_footer}>
          <Badge label="NextJS" />
          <Badge label="TypeScript" />
          <Badge label="React" />
        </div>
      </div>

      <div className={styles.card_border} ref={ref} />
    </div>
  );
};

export default Card;
