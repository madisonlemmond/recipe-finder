//import React, { useState, useEffect } from 'react';
//import { fetchRecipes } from './api';
import React from 'react';
import styles from './RecipeCard.module.css';

const RecipeCard = ({title, image, handleRecipeClick, id}) => {
    return(
        <div className={styles.RecipeCard}>
            <button className={styles.recipeButton} type="button" onClick={handleRecipeClick} id={id}>
                <h1>{title}</h1>
                <img className={styles.image} src={image} alt=""/>
            </button>

        </div>
    )
}

export default RecipeCard;