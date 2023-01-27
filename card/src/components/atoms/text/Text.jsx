import styles from "./Text.module.css";
export function Text({ text, color, size,top,left }) {
  return (
    <p
      className={styles.p}
      style={{
        color: color,
        fontSize: size,
        top: top,
        left: left,
      }}
    >
      {text}
    </p>
  );
}
