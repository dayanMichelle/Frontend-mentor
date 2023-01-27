import { Button } from "../../atoms/button/Button";
import { DateForm } from "../../moleculas/Date/DateForm";
import { Label } from "../../moleculas/Label/Label";
import sytles from "./Form.module.css";

export function Form({ inputValues, handleChange }) {
  return (
    <form className={sytles.form}>
      <Label
        text="cardholder name"
        placeholder="e.g Jane Appleseed"
        width={300}
        setValue={handleChange}
        value={inputValues["cardName"]}
        name="cardName"
      />
      <Label
        setValue={handleChange}
        value={inputValues["cardNumber"]}
        text="card number"
        placeholder="e.g. 1234 5678 9123 0000"
        width={300}
        name="cardNumber"
      />
      <Label
        text="cvc"
        placeholder="e.g. 123"
        width={100}
        value={inputValues["cvc"]}
        setValue={handleChange}
        name="cvc"
      />
      <DateForm
        mmName="mm"
        yyName="yy"
        setValue={handleChange}
        mmValue={inputValues["mm"]}
        yyValue={inputValues["yy"]}
      />
      <Button text="confirm" />
    </form>
  );
}
