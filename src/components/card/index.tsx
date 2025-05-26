import { ReactElement } from "react";
import styles from "./card.module.css";

interface CardProps {
  type: "project" | "experience";
  title?: string;
  company?: string;
  role?: string;
  description?: string;
  footer?: ReactElement;
  image?: ReactElement;
}

const Card = (props: CardProps) => {
  return (
    <div className={styles.card_container}>
      <div className={styles.card_header}>
        {props.type === "experience" ? <p>{props.title}</p> : props.image}
      </div>

      <div className={styles.card_content}>
        <div className={styles.card_title}>
          <h4>{props.role}</h4>
          <h5>{props.company}</h5>
        </div>
        <div className={styles.card_description}>
          <p>{props.description}</p>
        </div>
        <div className={styles.card_footer}>{props.footer}</div>
      </div>
    </div>
  );
};

export default Card;
