import styles from './Imagen.module.css'
export function Imagen({ img, styles }) {
  return (
      <img className={styles.img} style={styles}  src={img} />
  );
}
