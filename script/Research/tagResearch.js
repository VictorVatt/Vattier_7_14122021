import Normalize from "../Utils/normalize.js"
import { recipeCardCreator } from "../App.js"

let recipeCardSection = document.querySelector("#recipe-card-wrapper")

function addNewTag(recipes) {
    createAnRemoveSelectedTagHTML(recipes)
}
export default addNewTag


// fucntion to create and remove HTML element in the DOM
function createAnRemoveSelectedTagHTML(recipes) {
    let tagContainer = document.querySelectorAll(".tag-container")
    let selectedTagSection = document.querySelector("#tags-container")

    let selectedTags = {
        ingredients : [],
        appliance : [],
        tools: [],
    }

    tagContainer.forEach((tag) => tag.addEventListener("click", (e) => {
        let tagContent = Normalize.changeToUpper(e.target.innerText)
        
        if (e.target.parentNode.id === "ingredients-taglist-container") {

            let template = `<span class="blue-selected-tag" ><p>${tagContent}</p><i class="fa-regular fa-circle-xmark"></i></span>`
            selectedTagSection.innerHTML += template
            selectedTags.ingredients.push(tagContent)
            let ingredientFilter = filterRecipeByTags(selectedTags, recipes)
            recipeCardCreator(ingredientFilter, recipeCardSection)

        } else if (e.target.parentNode.id === "appliance-taglist-container") {



            let template = `<span class="green-selected-tag" ><p>${Normalize.changeToUpper(tagContent)}</p><i class="fa-regular fa-circle-xmark"></i></span>`
            selectedTagSection.innerHTML += template
            selectedTags.appliance.push(tagContent)
            
            let applianceFilter = filterRecipeByTags(selectedTags, recipes)
            
            return applianceFilter



        } else if (e.target.parentNode.id === "tools-taglist-container") {



            let template = `<span class="red-selected-tag" ><p>${Normalize.changeToUpper(tagContent)}</p><i class="fa-regular fa-circle-xmark"></i></span>`
            selectedTagSection.innerHTML += template
            selectedTags.tools.push(tagContent)
            
            let toolsFilter = filterRecipeByTags(selectedTags, recipes)
            
            return toolsFilter


        }


        let cross = document.querySelectorAll(".fa-circle-xmark")
        cross.forEach((cross) => cross.addEventListener("click", (e) => {
            e.target.parentNode.remove()
            }))
    }))

    let noTagsSelected = filterRecipeByTags(selectedTags, recipes)
    recipeCardCreator(noTagsSelected, recipeCardSection)

}

function filterRecipeByTags(selectedTags, recipes) {
    let ingredientsTags = selectedTags.ingredients
    let appliancesTags = selectedTags.appliance
    let toolsTags = selectedTags.tools

    let matchedRecipes = []

    if (ingredientsTags.length > 0 || appliancesTags.length > 0 || toolsTags.length > 0  ) {

        recipes.forEach(recipe => {
            if (recipe.ingredients.some(elt => elt.ingredient.includes(ingredientsTags))) {
                matchedRecipes.push(recipe)
                
            }
        })
        console.log(matchedRecipes.length + " recette(s) trouvé")
        console.log(matchedRecipes)
        return matchedRecipes
    }

    console.log("Pas de tags selectionnés")
    return recipes
}