import Badge from "../badge";
import styles from "./card.module.css";

const Card = () => {
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
    </div>
  );
};

export default Card;
