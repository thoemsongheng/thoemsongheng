import { Fragment, ReactNode } from "react";
import styles from "./card.module.css";

const Card = ({
  children,
  inline,
}: {
  children?: ReactNode;
  inline?: boolean;
}) => {
  return (
    <div className={`${styles.card_container} ${inline && styles.inline}`}>
      {children}
    </div>
  );
};

Card.Header = ({ children }: { children?: ReactNode }) => {
  return <div className={styles.card_header}>{children && children}</div>;
};

Card.Content = ({ children }: { children?: ReactNode }) => {
  return <div className={styles.card_content}>{children && children}</div>;
};

Card.Title = ({
  title,
  subTitles,
}: {
  title?: string;
  subTitles?: string[];
}) => {
  return (
    <div className={styles.card_title}>
      <h4>{title}</h4>

      {subTitles && subTitles.length > 0 && (
        <h5>
          {subTitles.map((subTitle: string, index: number) => {
            return (
              <Fragment key={index}>
                {subTitle}
                {!(subTitles.length === index + 1) && (
                  <span>
                    <div className={styles.seperator} />
                  </span>
                )}
              </Fragment>
            );
          })}
        </h5>
      )}
    </div>
  );
};

Card.Description = ({ description }: { description?: string }) => {
  return (
    <div className={styles.card_description}>
      {description && <p>{description}</p>}
    </div>
  );
};

Card.Footer = ({ children }: { children?: ReactNode }) => {
  return <div className={styles.card_footer}>{children}</div>;
};

export default Card;
