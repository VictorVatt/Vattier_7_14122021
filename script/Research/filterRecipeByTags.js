class FilterRecipes {

   async filterRecipesByTags(recipes) {

        let recipesMatchedByTags = []
        let ingredientsSelected = new DisplayTagCard().displaySelectedIngredientTag()
        let devicesSelected = new DisplayTagCard().displaySelectedDevicesTag()
        let toolsSelected = new DisplayTagCard().displaySelectedToolsTag()

        console.log(ingredientsSelected)
            recipes.forEach(recipe => {
                if (recipe.appliance.includes("B")) {
                    recipesMatchedByTags.push(recipe)
                    return recipesMatchedByTags
                    
                } else {
                    return recipes
                }
            });
        document.querySelector("#recipe-card-wrapper").addEventListener("click", () => {
            console.log(ingredientsSelected)
        })
    }
}
