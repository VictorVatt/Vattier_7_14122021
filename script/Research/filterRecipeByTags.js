class FilterRecipes {

   async filterRecipesByTags(recipes) {

        let recipesMatchedByTags = []

        let ingredientsSelected = await new DisplayTagCard().displaySelectedIngredientTag()
        let devicesSelected = await new DisplayTagCard().displaySelectedDevicesTag()
        let toolsSelected = await new DisplayTagCard().displaySelectedToolsTag()
        console.log(ingredientsSelected)
        if (ingredientsSelected.length > 0) {
            recipes.forEach(recipe => {
                if (recipe.ingredients.some(elt => elt.ingredient.includes(ingredientsSelected))) {
                    recipesMatchedByTags.push(recipe)
                }
                
            })
            return recipesMatchedByTags
        } else {
            return recipes
        }
    }
}
