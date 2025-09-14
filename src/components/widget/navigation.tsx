"use client";

import {
  AnchorHTMLAttributes,
  DetailedHTMLProps,
  useEffect,
  useState,
} from "react";
import styles from "./navigation.module.css";

type NavigationProps = {
  items: {
    label: string;
    url: string;
    attribute?: DetailedHTMLProps<
      AnchorHTMLAttributes<HTMLAnchorElement>,
      HTMLAnchorElement
    >;
  }[];
};

export default function Navigation({ items }: NavigationProps) {
  const [active, setActive] = useState(items[0].url);

  useEffect(() => {
    const sections = items
      .map((item) => document.querySelector(item.url))
      .filter(Boolean) as Element[];

    const observer = new IntersectionObserver(
      (entries) => {
        let maxRatio = 0;
        let mostVisibleId = active;

        entries.forEach((entry) => {
          if (entry.intersectionRatio > maxRatio) {
            maxRatio = entry.intersectionRatio;
            mostVisibleId = `#${entry.target.id}`;
          }
        });

        if (mostVisibleId !== active) {
          setActive(mostVisibleId);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: Array.from({ length: 11 }, (_, i) => i / 10), // [0,0.1,...,1]
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [items, active]);

  return (
    <nav className={styles.navigation_container}>
      <ul className={styles.navigation_content}>
        {items.map((item, index) => {
          return (
            <li key={index}>
              <a
                className={styles.navigation_link}
                href={item.url}
                onClick={() => setActive(item.url)}
                data-active={active === item.url ? true : false}
                {...item.attribute}
              >
                <span className={styles.navigation_indicator} />
                <span>{item.label}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
