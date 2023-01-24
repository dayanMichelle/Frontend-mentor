type ButtonProps = {
    text: string,
    onClick? : () => void
}
export function Button({text}: ButtonProps) {
    return(
        <button>{text}</button>
    )
}