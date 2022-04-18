import { allRecipesData } from "../data/recipes.js";
import RecipeCard from "./displayRecipe.js";

let recipeCardSection = document.querySelector("#recipe-card-wrapper")

function Algorithm() {
    
    allRecipesData.forEach(recipe => {
        let template = new RecipeCard(recipe).htmlCardCreator()
        recipeCardSection.innerHTML += template
    })
}
Algorithm()

