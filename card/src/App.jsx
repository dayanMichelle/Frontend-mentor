import { useState } from "react";
import styles from "./App.module.css";
import { CardBack } from "./components/organismos/Card/CardBack";
import { CardFront } from "./components/organismos/Card/CardFront";
import { Finished } from "./components/organismos/Finished/Finished";
import { Form } from "./components/organismos/Form/Form";

function App() {
  const [inputValues, setInputValues] = useState({
    cardNumber: "",
    cardName: "",
    cvc: "",
    mm: "",
    yy: "",
  });
  const [completed, setCompleted] = useState(false);
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
        {!completed ? (
          <Form
            setCompleted={setCompleted}
            inputValues={inputValues}
            handleChange={handleChange}
          />
        ) : (
          <Finished />
        )}
      </div>
    </div>
  );
}

export default App;
