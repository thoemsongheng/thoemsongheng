"use client";

import { ReactElement, ReactNode, useEffect, useRef } from "react";
import styles from "./stack-card.module.css";

const TechStack = ({ children }: { children: ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;
    const cards = container.children;

    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;

      for (const card of cards) {
        const rect = (card as HTMLElement).getBoundingClientRect();
        const x = clientX - rect.left;
        const y = clientY - rect.top;

        (card as HTMLElement).style.setProperty("--mouse-x", `${x}px`);
        (card as HTMLElement).style.setProperty("--mouse-y", `${y}px`);
      }
    };

    container.addEventListener("mousemove", handleMouseMove);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div ref={ref} className={styles.container}>
      {children}
    </div>
  );
};

const TechStackItem = ({ children }: { children: ReactNode }) => {
  return (
    <div className={styles.card}>
      <div className={styles.card_border} />
      <div className={styles.card_content}>{children}</div>
    </div>
  );
};

export { TechStack, TechStackItem };
