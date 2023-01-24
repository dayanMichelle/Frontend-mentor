import styles from './Anuncio.module.css'
type AnuncioProps = {
    children : React.ReactNode
}
export function Anuncio({children}: AnuncioProps) {
    return (
        <div className={styles.anInfo}>
           {children}
        </div>
    )
}