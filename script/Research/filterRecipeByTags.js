class FilterRecipes {

   async filterRecipesByTags(recipes) {

        let recipesMatchedByTags = []

        let ingredientsSelected = await new DisplayTagCard().displaySelectedIngredientTag()
        let devicesSelected = await new DisplayTagCard().displaySelectedDevicesTag()
        let toolsSelected = await new DisplayTagCard().displaySelectedToolsTag()

        if (ingredientsSelected.length > 1 || devicesSelected.length > 1 || toolsSelected > 1) {
            console.log("Il y a " + ingredientsSelected.length + "ingredients selectionnés")
            recipes.forEach(recipe => {
                if (recipe.appliance.includes("B")) {
                    recipesMatchedByTags.push(recipe)
                    
                    return recipesMatchedByTags
                }
            })
        } else {
            console.log("Il y a aucun ingredients selectionnés")
            return recipes
        }

        document.querySelector("#logo-wrapper").addEventListener("click", () => {
            console.log(ingredientsSelected)
        })

    }
}
