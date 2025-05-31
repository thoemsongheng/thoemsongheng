"use client";
import { AnchorHTMLAttributes, DetailedHTMLProps, useState } from "react";
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

const Navigation = ({ items }: NavigationProps) => {
  const [active, setActive] = useState("");
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
};

export default Navigation;
