import React from 'react';
import styles from './RecipePage.module.css';

const RecipePage = ({ id, title, image, ingredientInformation, recipeInstructions }) => {
    return(
        <div className={styles.RecipePage}>
            <div className={styles.recipeCard}>
                <h1>{title}</h1>
                <img className={styles.image} src={image} alt=""/>
            </div>
            <div className={styles.ingredients}>
            <h2>Ingredients</h2>
                <p>
                    {ingredientInformation.map(ingredients => (
                        <li key={id}>
                            {`${ingredients.amount} ${ingredients.unit} ${ingredients.ingredient}`}
                        </li>
                    ))}
                </p>
            </div>
            <div className={styles.instructions}>
            <h2>Instructions</h2>
                <p>
                    {recipeInstructions.map(steps => (
                        <li key={id}>
                            {`${steps.number}. ${steps.step}`}
                        </li>
                    ))}
                </p>
            </div>
        </div> 
    )
}



export default RecipePage;