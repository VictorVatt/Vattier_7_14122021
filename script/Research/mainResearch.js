class Research {
    
    static mainResearch(inputValue) {
        let recipesMatched = []
        
        allRecipesData.forEach(recipe => {
            if (recipe.ingredients.some(element => Normalize.normalizationText(element.ingredient).includes(inputValue)) || Normalize.normalizationText(recipe.name).includes(inputValue) || Normalize.normalizationText(recipe.description).includes(inputValue)) {
                recipesMatched.push(recipe)
            }
        })
        return {
            "recipesMatched" : recipesMatched,
            "ingredientsTags" : new GetData().getIngredients(recipesMatched),
            "devicesTags" : new GetData().getDevices(recipesMatched),
            "toolsTags" : new GetData().getCookingTools(recipesMatched),
        }
    }
}