import { allRecipesData } from "../data/recipes.js";
import RecipeCard from "./displayRecipe.js";
import {mainSearch} from './Research/mainSearch.js'
import { dropdownEventManager } from './page/dropdownEvents.js'
import GetData from './Utils/getAllData.js'
import displayTags from "./Utils/displayTags.js"
import addNewTag from "./Research/tagResearch.js"

let mainSearchInput = document.querySelector("#research-input")
let recipeCardSection = document.querySelector("#recipe-card-wrapper")

let tags = {
    ingredients : new GetData().getIngredients(allRecipesData),
    appliance : new GetData().getDevices(allRecipesData),
    tools : new GetData().getCookingTools(allRecipesData)
}

function Algorithm() {
    // default setup
    let defaultTags = getAllTags(allRecipesData)
    displayTags(defaultTags)

    addNewTag(allRecipesData)
    dropdownEventManager()

    mainSearchInput.addEventListener("keyup", (e) => {
        let inputValue = e.target.value.toLowerCase()
        if (inputValue.length > 2) {
            
            recipeCardSection.innerHTML = ""
            // recover recipes wich match with inputValue
            const recipesMatched = mainSearch(inputValue, allRecipesData)
            // create cards with the matched recipes
            recipeCardCreator(recipesMatched, recipeCardSection)

            let tags = getAllTags(recipesMatched)
            displayTags(tags)
            
            

        } else {
            displayTags(defaultTags)
            console.log("Aucun recette ne correspond à la recherche")
        }
    })
}
Algorithm()


export function recipeCardCreator(recipes, HTMLelement) {
    HTMLelement.innerHTML = ""
    recipes.forEach(recipe => {
        let template = new RecipeCard(recipe).htmlCardCreator()
        HTMLelement.innerHTML += template
    })
}

function getAllTags(recipes) {
    let tags = {
        ingredients : new GetData().getIngredients(recipes),
        appliance : new GetData().getDevices(recipes),
        tools : new GetData().getCookingTools(recipes)
    }
    return tags
}

