class Research {
    
    static mainResearch(inputValue) {
        let recipesMatched = []

        allRecipesData.forEach(recipe => {
            if (recipe.ingredients.some(element => element.ingredient.includes(inputValue)) || recipe.name.includes(inputValue) || recipe.description.includes(inputValue)) {
                recipesMatched.push(recipe)
            }
        })
        return {
            "recipesMatched" : recipesMatched,
            
        }
    }
}