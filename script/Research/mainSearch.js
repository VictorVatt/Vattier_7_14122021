
export function mainSearch(inputValue, recipes) {
    let recipesMatched = []

    recipes.forEach(recipe => {
        if (recipe.name.includes(inputValue) || recipe.description.includes(inputValue) || recipe.ingredients.some(elt => elt.ingredient.includes(inputValue))) {
            recipesMatched.push(recipe);
        }
    })

    return recipesMatched
}