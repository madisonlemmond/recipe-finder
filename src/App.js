import React, {useEffect, useState} from 'react';
import RecipeCard from './components/RecipeCard/RecipeCard';
import { fetchRecipes, fetchRecipeInformation, fetchRecipeInstructions } from './api';
import SearchBar from './components/SearchBar/SearchBar';
import RecipePage from './components/RecipePage/RecipePage';


const App = () => {
  
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');
  const [id, setId] = useState(null);
  const [recipeInformation, setRecipeInformation] = useState([]);
  const [recipeInstructions, setRecipeInstructions] = useState([]);

  useEffect(() => {
    const getRecipes = async () => {
      if (query !== '') {
        let fetchedRecipes = await fetchRecipes(query);
        setRecipes(fetchedRecipes);
        setSearch('');
        setId(null);
        return fetchedRecipes;
      }
    }
    getRecipes();
  }, [query]);

  useEffect(() => {
    const getRecipeInformation = async () => {
      if (id !== null) {
        let fetchedRecipeInformation = await fetchRecipeInformation(id);
        setRecipeInformation(fetchedRecipeInformation);
        //return fetchedRecipeInformation;
      }
    }
    getRecipeInformation();
  }, [id]);
  
  useEffect(() => {
    const getRecipeInstructions = async () => {
      if (id !== null) {
        let fetchedRecipeInstructions = await fetchRecipeInstructions(id);
        setRecipeInstructions(fetchedRecipeInstructions);
        //return fetchedRecipeInstructions;
      }
    }
    getRecipeInstructions();
  }, [id]);


  

  return (
    <div className="App">
      <div className="SearchBar">
        { id === null
        ? <SearchBar value={search} handleChange={e => setSearch(e.target.value)} handleSubmit={() => setQuery(search)} />
        : null
        }
      </div>
      <div className="RecipeCard">
        { id === null 
        ?         
          recipes.map(recipe => (
            <RecipeCard 
              title={recipe.title}
              image={recipe.image}
              id={recipe.id}
              handleRecipeClick={() => {setId(recipe.id)
                                        setTitle(recipe.title)
                                        setImage(recipe.image)}}
            />
          ))
        : null
        }
      </div>
      <div className="RecipePage">
        {id === null
          ? null
          : 
          <RecipePage 
            title={title}
            image={image}
            id={id}
            ingredientInformation={recipeInformation}
            recipeInstructions={recipeInstructions}
          />
        }
      </div>
    </div>
  )
}

export default App;
