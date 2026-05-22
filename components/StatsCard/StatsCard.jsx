import styles from './StatsCard.module.css'; // Import the CSS file for this card

// This component creates a single card.
// It takes three pieces of data (props): icon image, title text, and value text.
export const StatsCard = ({ icon, title, value }) => {
    return (
        /* The main white box for the card */
        <div className={styles.card}>
            <img src={icon} alt={`${title} icon`} className={styles.icon} />

            <span className={styles.title}>{title}</span>

            <h2 className={styles.value}>{value}</h2>
        </div>
    );
};