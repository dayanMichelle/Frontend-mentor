import { useState } from "react";
import styles from "./App.module.css";
import { CardBack } from "./components/organismos/Card/CardBack";
import { CardFront } from "./components/organismos/Card/CardFront";
import { Form } from "./components/organismos/Form/Form";

function App() {
  const [inputValues, setInputValues] = useState({
    cardNumber: "",
    cardName: "",
    cvc:"",
    mm:"",
    yy:""
  });

  const handleChange = (e) => {
    const changeInput = { [e.target.name]: e.target.value };
    setInputValues({ ...inputValues, ...changeInput });
  };

  return (
    <div className={styles.container}>
      <div className={styles.bgviolet}>
        <div className={styles.imgFront}>
          <CardFront
            mm={inputValues.mm}
            yy={inputValues.yy}
            number={inputValues.cardNumber}
            name={inputValues.cardName}

          />
          <CardBack cvc={inputValues.cvc} />
        </div>
      </div>
      <div className={styles.form}>
        <Form inputValues={inputValues} handleChange={handleChange} />
      </div>
    </div>
  );
}

export default App;
