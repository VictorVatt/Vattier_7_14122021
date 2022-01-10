/** Display les cartes par defaut sans aucune recherche */
new DisplayRecipe().display(allRecipesData)
new DisplayTagsList().displayAllTagList(allRecipesData)
/** Wrapper for all displayed Recipes */
let recipeWrapper = document.querySelector("#recipe-card-wrapper")
let searchInput = document.querySelector("#research-input")

searchInput.addEventListener("input", (search) => {
    let searchValue = search.target.value
    if(searchValue.length > 2) {
        let searchResult = Research.mainResearch(searchValue)
        if (searchResult.recipesMatched.length === 0){
            return console.log("recette inconnue")
        }
            recipeWrapper.innerHTML = ""

            new DisplayTagsList().displayToolsTagList(searchResult.toolsTags)
            new DisplayTagsList().displayIngredientTagList(searchResult.ingredientsTags)
            new DisplayTagsList().displayDevicesTagList(searchResult.devicesTags)
            new DisplayRecipe().display(searchResult.recipesMatched)
            return
    }
        recipeWrapper.innerHTML = ""
    new DisplayTagsList().displayAllTagList(allRecipesData)

    new DisplayRecipe().display(allRecipesData)
})

