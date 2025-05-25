import styles from "./badge.module.css";

const Badge = ({ label }: { label?: string }) => {
  return <div className={styles.badge}>{label}</div>;
};

export default Badge;
