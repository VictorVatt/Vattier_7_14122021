import Normalize from "../Utils/normalize.js"
import { recipeCardCreator } from "../App.js"
import displayTags from '../Utils/displayTags.js'
import GetData from '../Utils/getAllData.js'

let recipeCardSection = document.querySelector("#recipe-card-wrapper")

function addNewTag(recipes) {
    let selectedTags = {
        ingredients : [],
        appliance : [],
        tools: [],
    }
    createAnRemoveSelectedTagHTML(recipes, selectedTags)
}
export default addNewTag


// fucntion to create and remove HTML element in the DOM
function createAnRemoveSelectedTagHTML(recipes, selectedTags) {
    let tagContainer = document.querySelectorAll(".tag-container")
    let selectedTagSection = document.querySelector("#tags-container")


    tagContainer.forEach((tag) => tag.addEventListener("click", (e) => {

        let tagContent = Normalize.changeToUpper(e.target.innerText)

        if (e.target.parentNode.id === "ingredients-taglist-container") {
    
            let template = `<span class="blue-selected-tag" ><p>${tagContent}</p><i class="fa-regular fa-circle-xmark"></i></span>` // html template 
            selectedTagSection.innerHTML += template // create the html of the tag

            selectedTags.ingredients.push(tagContent) // push the tag string in an array

            let goodsTags = removeTag(selectedTags, recipes)

            let ingredientFilter = filterRecipeByTags(goodsTags, recipes) // filter wished recipes with the tags

            if (ingredientFilter.length === 0) { recipeCardSection.innerHTML = ''}

            recipeCardCreator(ingredientFilter, recipeCardSection) // create cards

            let tagList = {
                ingredients: new GetData().getIngredients(ingredientFilter),
                appliance: new GetData().getDevices(ingredientFilter),
                tools: new GetData().getCookingTools(ingredientFilter) 
            }
            displayTags(tagList)
            createAnRemoveSelectedTagHTML(recipes, selectedTags)

            e.target.style.display = "none"

        } else if (e.target.parentNode.id === "appliance-taglist-container") {

            let template = `<span class="green-selected-tag" ><p>${Normalize.changeToUpper(tagContent)}</p><i class="fa-regular fa-circle-xmark"></i></span>`
            selectedTagSection.innerHTML += template

            selectedTags.appliance.push(tagContent)

            let goodsTags = removeTag(selectedTags, recipes)

            let applianceFilter = filterRecipeByTags(goodsTags, recipes)
            
            if (applianceFilter.length === 0) { recipeCardSection.innerHTML = ''}

            recipeCardCreator(applianceFilter, recipeCardSection)

            let tagList = {
                ingredients: new GetData().getIngredients(applianceFilter),
                appliance: new GetData().getDevices(applianceFilter),
                tools: new GetData().getCookingTools(applianceFilter) 
            }
            displayTags(tagList)
            createAnRemoveSelectedTagHTML(recipes, selectedTags)
            e.target.style.display = "none"

        } else if (e.target.parentNode.id === "tools-taglist-container") {



            let template = `<span class="red-selected-tag" ><p>${Normalize.changeToUpper(tagContent)}</p><i class="fa-regular fa-circle-xmark"></i></span>`
            selectedTagSection.innerHTML += template
            selectedTags.tools.push(tagContent)

            let goodsTags = removeTag(selectedTags, recipes)

            let toolsFilter = filterRecipeByTags(goodsTags, recipes)

            if (toolsFilter.length === 0) { recipeCardSection.innerHTML = ''}

            recipeCardCreator(toolsFilter, recipeCardSection)

            let tagList = {
                ingredients: new GetData().getIngredients(toolsFilter),
                appliance: new GetData().getDevices(toolsFilter),
                tools: new GetData().getCookingTools(toolsFilter) 
            }
            displayTags(tagList)
            createAnRemoveSelectedTagHTML(recipes, selectedTags)
            e.target.style.display = "none"
            
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
            if (ingredientsTags.every(element =>  recipe.ingredients.some(elt => elt.ingredient.includes(element))) && 
                appliancesTags.every(element => recipe.appliance.includes(element)) && 
                toolsTags.every(element => recipe.ustensils.some(elt => elt.toLowerCase().includes(Normalize.normalizationText(element))))) {

                matchedRecipes.push(recipe)
                
                
            }
        })
        console.log(matchedRecipes.length + " recettes correspondent")
        return matchedRecipes
    }

    return recipes
}

// function remove tag : remove in the array and also the DOM element

function removeTag(selectedTags, recipes) {
    let cross = document.querySelectorAll(".fa-circle-xmark")
        cross.forEach((cross) => cross.addEventListener("click", (e) => {
            if (e.target.parentNode.className === "blue-selected-tag") { // used to know if we are selecting a ingredient tag

                // array logic
                let ingredients = selectedTags.ingredients // recover the selected tags
                let removedTag = e.target.parentNode.innerText // revover the content of the tag we wan't to delete
                let indexRemoved = ingredients.indexOf(removedTag) // find the index od deltedTag in the ingredient seleted array
                ingredients.splice(indexRemoved, 1) // remove the tag with the good index

                e.target.parentNode.remove() // remove the tag from the DOM
                e.target.style.display = "flex" // display the tag in the list

                let ingredientFilter = filterRecipeByTags(selectedTags, recipes) // refilter with selected tags
                console.log(ingredientFilter)
                recipeCardCreator(ingredientFilter, recipeCardSection) // create recipes

                let tagList = {
                    ingredients: new GetData().getIngredients(ingredientFilter),
                    appliance: new GetData().getDevices(ingredientFilter),
                    tools: new GetData().getCookingTools(ingredientFilter) 
                }
                displayTags(tagList) // display those tags in the taglist

                createAnRemoveSelectedTagHTML(recipes, selectedTags) // cal the function to allow to reuse the tagselection
                
                return selectedTags
            }

            if (e.target.parentNode.className === "green-selected-tag") { // same logic for appliance remove

                let appliance = selectedTags.appliance
                let removeTag = e.target.parentNode.innerText
                let indexRemoved = appliance.indexOf(removeTag)
                appliance.splice(indexRemoved, 1)
                
                e.target.parentNode.remove()
                e.target.style.display = "flex"

                let applianceFilter = filterRecipeByTags(selectedTags, recipes)

                recipeCardCreator(applianceFilter, recipeCardSection)

                let tagList = {
                    ingredients: new GetData().getIngredients(applianceFilter),
                    appliance: new GetData().getDevices(applianceFilter),
                    tools: new GetData().getCookingTools(applianceFilter) 
                }
                displayTags(tagList)

                createAnRemoveSelectedTagHTML(recipes, selectedTags)

                return selectedTags
            }
            
            if (e.target.parentNode.className === "red-selected-tag") { // same logic for tools remove

                let tools = selectedTags.tools
                let removeTag = e.target.parentNode.innerText
                let indexRemoved = tools.indexOf(removeTag)
                tools.splice(indexRemoved, 1)

                e.target.parentNode.remove()
                e.target.style.display = "flex"

                let toolsFilter = filterRecipeByTags(selectedTags, recipes)

                recipeCardCreator(toolsFilter, recipeCardSection)

                let tagList = {
                    ingredients: new GetData().getIngredients(toolsFilter),
                    appliance: new GetData().getDevices(toolsFilter),
                    tools: new GetData().getCookingTools(toolsFilter) 
                }
                displayTags(tagList)

                createAnRemoveSelectedTagHTML(recipes, selectedTags)

                return selectedTags
            }

            }))
    return selectedTags
}