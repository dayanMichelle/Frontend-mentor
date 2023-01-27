import styles from "./Input.module.css";

export const Input = ({
  width,
  placeholder,
  value,
  setValue,
  name,
}) => {

  return (
    <input
      onChange={setValue}
      value={value}
      className={styles.input}
      style={{
        width,
      }}
      placeholder={placeholder}
      name={name}
    />
  );
};
