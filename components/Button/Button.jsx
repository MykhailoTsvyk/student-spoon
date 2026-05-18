import styles from './Button.module.css'

export const Button = ({
    children,
    onClick,
    type = 'button',
    className = 'btn',
    variant = 'primary'
}) => {

    const btnClasses = `${styles.baseBtn} ${styles[variant]} || ${styles.primary} ${className}}`

    return (
        <button
            type={type} onClick={onClick} className={btnClasses}>
            {children}
        </button>
    )
}