import styles from './Text.module.css'
export function Text ({text, color, size}) {
    return (
        <p className={styles.p}
        style={{
            color:color,
            fontSize: size
        }}
        >{text}</p>
    )
}