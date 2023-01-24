import styles from './Banner.module.css'

type BannerProps = {
    text: string,
    content: string
}
export function Banner({text, content}: BannerProps){
    return(
        <div className={styles.bnInfo}>
            <h2>{text}</h2>
            <p>{content}</p>
        </div>
       
    )
}