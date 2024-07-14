import RecipeName from "./RecipeComponents/RecipeName";
import { useState, useEffect } from "react";
import axios from "axios";

function Recipe() {
  const [recipe, setRecipe] = useState([]);

  useEffect(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/random.php`)
      .then((res) => {
        const initRecipe = res.data;
        setRecipe(initRecipe.meals[0]);
      })
      .catch((error) => {
        console.error("Error fetching the recipe:", error);
      });
  }, []);

  return (
    <div className="bg-white w-2/4 px-6 py-6 rounded-2xl">
      <RecipeName recipeName={recipe} />
    </div>
  );
}

export default Recipe;
