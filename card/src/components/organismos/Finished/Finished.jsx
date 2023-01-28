import { Button, Logo, Text } from "../../atoms";
import styles from "./Finished.module.css";
import imgCheck from '../../../assets/images/icon-complete.svg'
export function Finished() {
  return (
    <div className={styles.container}>
      <Logo  img={imgCheck}/>
      <Text text="thank you!" />
      <Text text="We've added your card details" size="10px" color="#ccc" />
      <Button text="continue" />
    </div>
  );
}
