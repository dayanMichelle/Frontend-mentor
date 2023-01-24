import styles from "./Banner.module.css";

type BannerProps = {
    title: string,
    content:string
}
export function Banner({ title, content }:BannerProps) {
  return (
    <div className={styles.bnInfo}>
      <h2>{title}</h2>
      {title}
      <p>{content}</p>
    </div>
  );
}
