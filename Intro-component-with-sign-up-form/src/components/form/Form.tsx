import { useState } from "react";
import { Anuncio } from "../anuncio";
import styles from "./Form.module.css";
import { Button } from "../button";
import { AnuncioFreeDays } from "../anuncio/AnuncioFreeDays";

export function Form() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {
      name,
      lastName,
      email,
      password,
    };
    console.log(data);
  };

  return (
    <div className={styles.container}>
      <AnuncioFreeDays />
      <form className={styles.formContainer} onSubmit={handleSubmit}>
        <input
          placeholder="First Name"
          required
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <input
          placeholder="Last Name"
          required
          onChange={(e) => setLastName(e.target.value)}
          value={lastName}
        />
        <input
          type="email"
          placeholder="Email Address"
          required
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          type="password"
          placeholder="Password"
          required
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <Button text="claim your free trial" />
        <p>
          By clicking the button. you are agreeing to our{" "}
          <span>Terms and Services</span>
        </p>
      </form>
    </div>
  );
}
