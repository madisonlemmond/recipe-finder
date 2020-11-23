import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";
import { fetchRecipes, fetchRecipeInformation } from "./api";
import RecipeCard from "./components/RecipeCard/RecipeCard";
import SearchBar from "./components/SearchBar/SearchBar";
import RecipePage from "./components/RecipePage/RecipePage";
import NavBar from "./components/NavBar/NavBar";

const App = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  const [id, setId] = useState(null);
  const [recipeInformation, setRecipeInformation] = useState([]);
  const [recipeInstructions, setRecipeInstructions] = useState([]);

  useEffect(() => {
    const getRecipes = async () => {
      if (query !== "") {
        let fetchedRecipes = await fetchRecipes(query);
        setRecipes(fetchedRecipes);
        setSearch("");
        setId(null);
        return fetchedRecipes;
      }
    };
    getRecipes();
  }, [query]);

  useEffect(() => {
    const getRecipeInformation = async () => {
      if (id !== null) {
        let fetchedRecipeInformation = await fetchRecipeInformation(id);
        setRecipeInformation(fetchedRecipeInformation);
      }
    };
    getRecipeInformation();
  }, [id]);

  // useEffect(() => {
  //   const getRecipeInstructions = async () => {
  //     if (id !== null) {
  //       let fetchedRecipeInstructions = await fetchRecipeInstructions(id);
  //       setRecipeInstructions(fetchedRecipeInstructions);
  //       //return fetchedRecipeInstructions;
  //     }
  //   }
  //   getRecipeInstructions();
  // }, [id]);

 const Home = () => {
    let history = useHistory();
    console.log("rendering");
    return (
      <div className="Home">
        <SearchBar
          value={search}
          key={`${search}_key`}
          handleChange={(e) => setSearch(e.target.value)}
          handleKeyDown={(e) => {
            if (e.key === "Enter") {
              setQuery(search);
              history.replace(`/query/${search}`);
            }
          }}
          handleSubmit={() => {
            setQuery(search);
            history.replace(`/query/${search}`);
          }}
        />
      </div>
    );
  };

  const QueryResults = () => {
    let history = useHistory();
    return (
      <div className="QueryResults">
        <SearchBar
          value={search}
          handleChange={(e) => setSearch(e.target.value)}
          handleSubmit={() => {
            setQuery(search);
            history.replace(`/query/${search}`);
          }}
        />
        {recipes.map((recipe) => (
          <RecipeCard
            title={recipe.title}
            image={recipe.image}
            id={recipe.id}
            key={recipe.id.toString()}
            recipeInstructions={recipe.recipeInstructions}
            handleRecipeClick={() => {
              setId(recipe.id);
              setTitle(recipe.title);
              setImage(recipe.image);
              setRecipeInstructions(recipe.recipeInstructions);
              history.replace(`/recipe/${recipe.id}`);
            }}
          />
        ))}
      </div>
    );
  };

  const RecipeResult = () => {
    let history = useHistory();
    return (
      <div className="RecipeResult">
        <SearchBar
          value={search}
          handleChange={(e) => setSearch(e.target.value)}
          handleSubmit={() => {
            setQuery(search);
            history.replace(`/query/${search}`);
          }}
        />
        <RecipePage
          title={title}
          image={image}
          id={id}
          ingredientInformation={recipeInformation}
          recipeInstructions={recipeInstructions}
        />
      </div>
    );
  };

  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact={true} path="/">
          <Home />
        </Route>
        <Route path="/query/:query">
          <QueryResults />
        </Route>
        <Route path="/recipe/:recipeId">
          <RecipeResult />
        </Route>
      </Switch>
    </Router>
  );
};


/*\\ <div className="App">
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
                key={recipe.id}
                recipeInstructions={recipe.recipeInstructions}
                handleRecipeClick={() => {setId(recipe.id)
                                          setTitle(recipe.title)
                                          setImage(recipe.image)
                                          setRecipeInstructions(recipe.recipeInstructions)}
                                  }
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
      </div> */

export default App;
