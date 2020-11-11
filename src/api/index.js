const url = 'https://api.spoonacular.com/recipes';
const apiKey = '7fac5b9113244df680116b0d5d3ca51b';
//const apiKey = '4522e01865344780bc49eb6916dde771';

export const fetchRecipes = async (query) => {
    const response = await fetch(`${url}/complexSearch?query=${query}&instructionsRequired=true&addRecipeInformation=true&apiKey=${apiKey}`);
    const data = await response.json();
    const modifiedData = data.results.map((recipes) => ({
        title: recipes.title,
        image: recipes.image,    
        id: recipes.id,
        recipeInstructions: recipes.analyzedInstructions[0].steps.map((steps) =>({
            stepNumber: steps.number,
            step: steps.step
        }))
    }));
    return modifiedData;
};


export const fetchRecipeInformation = async (id) => {
    const response = await fetch(`${url}/${id}/information?includeNutrition=false&apiKey=${apiKey}`);
    const data = await response.json();
    const modifiedData = data.extendedIngredients.map((ingredients) => ({
        ingredient: ingredients.name,
        amount: ingredients.amount,
        unit: ingredients.measures.us.unitShort
    }));
    return modifiedData;
}

/*export const fetchRecipeInstructions = async (id) => {
    const response = await fetch(`${url}/${id}/analyzedInstructions?apiKey=${apiKey}`);
    const data = await response.json();
    //console.log(data.steps)
    const modifiedData = data[0].steps.map((steps) => ({
        number: steps.number,
        step: steps.step
    }));
    return modifiedData;
}*/
