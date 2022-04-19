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

            let template = `<span class="blue-selected-tag" ><p>${tagContent}</p><i class="fa-regular fa-circle-xmark"></i></span>` // html template 
            selectedTagSection.innerHTML += template // create the html of the tag

            selectedTags.ingredients.push(tagContent) // push the tag string in an array

            let goodsTags = removeTag(selectedTags, e.target, recipes)
            console.log(goodsTags)
            let ingredientFilter = filterRecipeByTags(goodsTags, recipes) // filter wished recipes with the tags

            recipeCardCreator(ingredientFilter, recipeCardSection) // create cards



            e.target.style.display = "none"

        } else if (e.target.parentNode.id === "appliance-taglist-container") {



            let template = `<span class="green-selected-tag" ><p>${Normalize.changeToUpper(tagContent)}</p><i class="fa-regular fa-circle-xmark"></i></span>`
            selectedTagSection.innerHTML += template
            selectedTags.appliance.push(tagContent)
            
            let applianceFilter = filterRecipeByTags(selectedTags, recipes)
            
            recipeCardCreator(applianceFilter, recipeCardSection)



        } else if (e.target.parentNode.id === "tools-taglist-container") {



            let template = `<span class="red-selected-tag" ><p>${Normalize.changeToUpper(tagContent)}</p><i class="fa-regular fa-circle-xmark"></i></span>`
            selectedTagSection.innerHTML += template
            selectedTags.tools.push(tagContent)
            
            let toolsFilter = filterRecipeByTags(selectedTags, recipes)
            
            recipeCardCreator(toolsFilter, recipeCardSection)


        }
        // function remove tag : remove in the array and also the DOM element SPAN



    }))
    // return the default behavior (display all recipes)
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
        return matchedRecipes
    }

    console.log("Pas de tags selectionnés")
    return recipes
}

// function remove tag : remove in the array and also the DOM element

function removeTag(selectedTags, eventTarget, recipes) {
    let cross = document.querySelectorAll(".fa-circle-xmark")

        cross.forEach((cross) => cross.addEventListener("click", (e) => {
            if (e.target.parentNode.className === "blue-selected-tag") {
                let ingredients = selectedTags.ingredients // recover the selected tags
                let removedTag = e.target.parentNode.innerText // revover the content of the tag we wan't to delete
                let indexRemoved = ingredients.indexOf(removedTag) // find the index od deltedTag in the ingredient seleted array
                ingredients.splice(indexRemoved, 1) // remove the tag with the good index

                e.target.parentNode.remove() // remove the tag from the DOM
                eventTarget.style.display = "flex"
                let ingredientFilter = filterRecipeByTags(selectedTags, recipes)
                recipeCardCreator(ingredientFilter, recipeCardSection)

                return selectedTags
            }

            if (e.target.parentNode.className === "green-selected-tag") {
                e.target.parentNode.remove()
            }
            
            if (e.target.parentNode.className === "red-selected-tag") {
                e.target.parentNode.remove()
            }
            }))

    return selectedTags
}