import styles from './Banner.module.css'
export function Banner(){
    return(
        <div className={styles.bnInfo}>
            <h2>Learn to code by watching others</h2>
            <p>See how experienced developers solve problems in real-time.
                Watching scripted tutorials is great, but understanding how
                developers think is invaluable.
            </p>
        </div>
       
    )
}