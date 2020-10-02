import React from 'react';
import styles from './RecipePage.module.css';

const RecipePage = ({ id, title, image, ingredientInformation, recipeInstructions }) => {
    return(
        <div className={styles.RecipePage}>
            <h1>{title}</h1>
            <img className={styles.image} src={image} alt=""/>
            <p>
                {ingredientInformation.map(ingredients => (
                    <li key={id}>
                        {`${ingredients.amount} ${ingredients.unit} ${ingredients.ingredient}`}
                    </li>
                ))}
            </p>
            <p>
                {recipeInstructions.map(steps => (
                    <li key={id}>
                        {`${steps.number}. ${steps.step}`}
                    </li>
                ))}
            </p>
        </div>
    )
}

export default RecipePage;