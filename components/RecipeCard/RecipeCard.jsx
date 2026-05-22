import React from 'react';
import styles from './RecipeCard.module.css';

export const RecipeCard = ({ recipe, onClick }) => {
    return (
        <div className={styles.card} onClick={onClick}>
            <div className={styles.imageWrapper}>
                <img src={recipe.image} alt={recipe.title} className={styles.image} />
            </div>
            <div className={styles.content}>
                <h2 className={styles.title}>{recipe.title}</h2>
                <span className={styles.time}>{recipe.cookTime} MINS</span>
            </div>
        </div>
    );
};