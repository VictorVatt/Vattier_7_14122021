/** Wrapper for all displayed Recipes */
let recipeWrapper = document.querySelector("#recipe-card-wrapper")
let searchInput = document.querySelector("#research-input")

/** Display les cartes par defaut sans aucune recherche */
async function researchAlgorithm() {
    new DisplayTagsList().displayAllTagList(allRecipesData)
    await new DisplayRecipe().display(await new FilterRecipes().filterRecipesByTags(allRecipesData))


    searchInput.addEventListener("input", async (search) => {
        let searchValue = Normalize.normalizationText(search.target.value)
        if(searchValue.length > 2) {
            let searchResult = Research.mainResearch(searchValue)
            
            if (searchResult.recipesMatched.length === 0){

                return console.log("recette inconnue")
            } else {
                recipeWrapper.innerHTML = ""

                new DisplayTagsList().displayToolsTagList(searchResult.toolsTags)
                new DisplayTagsList().displayIngredientTagList(searchResult.ingredientsTags)
                new DisplayTagsList().displayDevicesTagList(searchResult.devicesTags)
                await new DisplayRecipe().display(await new FilterRecipes().filterRecipesByTags(searchResult.recipesMatched))
                return
            }
        }
        recipeWrapper.innerHTML = ""
        await new DisplayRecipe().display(await new FilterRecipes().filterRecipesByTags(allRecipesData))

    })
}

researchAlgorithm()
