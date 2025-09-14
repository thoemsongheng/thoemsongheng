import styles from "./badge.module.css";

export default function Badge({ label }: { label?: string }) {
  return <div className={styles.badge}>{label}</div>;
}
