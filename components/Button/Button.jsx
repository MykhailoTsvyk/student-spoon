// Button.jsx
import styles from './Button.module.css';

export const Button = ({
                           children,
                           onClick,
                           type = 'button',
                           className = '', // Default to empty string if no extra class is passed
                           variant = 'primary'
}) => {
    // Clean string concatenation utilizing your module variables safely
    const btnClasses = `${styles.baseBtn} ${styles[variant]} ${className}`.trim();

    return (
        <button type={type} onClick={onClick} className={btnClasses}>
            {children}
        </button>
    );
};