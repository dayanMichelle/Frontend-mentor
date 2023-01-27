import { Imagen } from "../../atoms/imagen/Imagen";
export function ImagText({ children, img, styles }) {
  return (
    <div>
      <Imagen img={img} styles={styles} />
      {children}
    </div>
  );
}
