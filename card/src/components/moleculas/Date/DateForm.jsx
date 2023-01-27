import { Input } from "../../atoms/input/Input";
import { Label } from "../Label/Label";
import styles from "./DateForm.module.css";
export function DateForm({ setValue, mmName, yyName, mmValue, yyValue }) {
  return (
    <div className={styles.container}>
      <div>
        <Label
          setValue={setValue}
          text="exp.date(mm/yy)"
          placeholder="MM"
          width={50}
          name={mmName}
          value={mmValue}
        />
        <Input
          value={yyValue}
          name={yyName}
          setValue={setValue}
          placeholder="YY"
          width={50}
        />
      </div>
    </div>
  );
}
