import styles from './Input.module.css'
export const Input = ({width, placeholder}) => {
    return (
        <input  className={styles.input} style={{
            width:width
        }}
        placeholder={placeholder}/>
    )
}