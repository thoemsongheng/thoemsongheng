import { ReactNode } from "react";
import styles from "./section.module.css";

type SectionProps = {
  title: string;
  children?: React.ReactNode;
  id?: string;
};

const Section = ({ title, children, id }: SectionProps) => {
  return (
    <section id={id && id} className={styles.section_container}>
      <div className={styles.section_title}>
        <h3>{title}</h3>
      </div>
      {children}
    </section>
  );
};

type SectionConentProps = {
  children?: ReactNode;
  padding?: "small" | "medium" | "large";
};

Section.Content = ({ children, padding }: SectionConentProps) => {
  return (
    <div
      className={`${styles.section_content} ${
        padding ? styles[padding] : "sm"
      }`}
    >
      {children}
    </div>
  );
};

export default Section;
