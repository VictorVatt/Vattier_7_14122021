/** Display les cartes par defaut sans aucune recherche */
new DisplayRecipe().display(allRecipesData)
new DisplayTagsList().displayIngredientTagList(new GetData().getIngredients(allRecipesData))
new DisplayTagsList().displayDevicesTagList(new GetData().getDevices(allRecipesData))
new DisplayTagsList().displayToolsTagList(new GetData().getCookingTools(allRecipesData))

let searchInput = document.querySelector("#research-input")

searchInput.addEventListener("input", (search) => {
    let searchValue = search.target.value
    if(searchValue.length > 2) {
        let searchResult = Research.mainResearch(searchValue)
        if (searchResult.recipesMatched.length === 0){
            return console.log("recette inconnue")
        }
            document.querySelector("#recipe-card-wrapper").innerHTML = ""

            new DisplayTagsList().displayToolsTagList(searchResult.toolsTags)
            new DisplayTagsList().displayIngredientTagList(searchResult.ingredientsTags)
            new DisplayTagsList().displayDevicesTagList(searchResult.devicesTags)
            new DisplayRecipe().display(searchResult.recipesMatched)
            return
        
    }
    document.querySelector("#recipe-card-wrapper").innerHTML = ""
    new DisplayTagsList().displayIngredientTagList(new GetData().getIngredients(allRecipesData))
    new DisplayTagsList().displayDevicesTagList(new GetData().getDevices(allRecipesData))
    new DisplayTagsList().displayToolsTagList(new GetData().getCookingTools(allRecipesData))

    new DisplayRecipe().display(allRecipesData)
})

