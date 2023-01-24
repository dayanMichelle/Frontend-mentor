import { useState } from "react";
import { Anuncio } from "../anuncio/Anuncio";
import styles from './Form.module.css'

export function Form() {
    const [ name, setName] = useState('')
    const [ lastName, setLastName] = useState('')
    const [ email, setEmail] = useState('')
    const [ password, setPassword] = useState('')
    const handleSubmit = (e) =>{
        e.preventDefault()
        const data = {
            name,
            lastName,
            email,
            password
        }
        console.log(data)
    }
    return (
        <div className={styles.container}>
            <div>
                <Anuncio />
            </div>
           <form className={styles.formContainer} onSubmit={handleSubmit}>
            <input placeholder="First Name" required onChange={(e) => setName(e.target.value)} value={name}/>
            <input placeholder="Last Name" required onChange={(e) => setLastName(e.target.value)} value={lastName}/>
            <input type="email" placeholder="Email Address" required onChange={(e) => setEmail(e.target.value)} value={email} />
            <input type="password" placeholder="Password" required onChange={(e) => setPassword(e.target.value)} value={password}/>
            <button>claim your free trial</button>
            <p>By clicking the button. you are agreeing to our <span>Terms and Services</span></p>
           </form>
        </div>
    )
}