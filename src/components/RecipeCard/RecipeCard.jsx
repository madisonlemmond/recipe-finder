//import React, { useState, useEffect } from 'react';
//import { fetchRecipes } from './api';
import React from 'react';
import { CardActionArea, Card, CardMedia, CardContent, Typography } from '@material-ui/core';
import styles from './RecipeCard.module.css';

const RecipeCard = ({title, image, handleRecipeClick, id}) => {
    return(
        <div>
            <CardActionArea className={styles.RecipeCard} onClick={handleRecipeClick}>
                <Card className={styles.container}>
                    <CardMedia image={image} className={styles.image} />
                    <CardContent id={id}  className={styles.cardContent} >
                        <Typography variant="h2">
                            {title}
                        </Typography>
                    </CardContent>
                </Card>
            </CardActionArea>
        </div>
    )
}

export default RecipeCard;