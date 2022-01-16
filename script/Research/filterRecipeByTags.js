class FilterRecipes {

   async filterRecipesByTags(recipes) {

        let recipesMatchedByTags = []

        let ingredientsSelected = await new DisplayTagCard().displaySelectedIngredientTag()
        let devicesSelected = await new DisplayTagCard().displaySelectedDevicesTag()
        let toolsSelected = await new DisplayTagCard().displaySelectedToolsTag()
        console.log(ingredientsSelected)
        console.log(ingredientsSelected.length)

        if (ingredientsSelected) {
            console.log("Il y a " + ingredientsSelected.length + " ingredients selectionnés")
            recipes.forEach(recipe => {
                if (recipe.ingredients.some(elt => elt.ingredient.includes("Car"))) {
                    recipesMatchedByTags.push(recipe)
                }
                
            })
            console.log(recipesMatchedByTags)
            return recipesMatchedByTags
        } else {
            console.log("Il y a aucun ingredients selectionnés")
            return recipes
        }
    }
}
