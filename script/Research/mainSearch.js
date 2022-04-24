
export function mainSearch(inputValue, recipes) {
    let recipesMatched = []

    for (let i = 0; i < recipes.length; i++) {
        if (recipes[i].name.includes(inputValue) || recipes[i].description.includes(inputValue) || recipes[i].ingredients.some(elt => elt.ingredient.includes(inputValue))) {
            recipesMatched.push(recipes[i]);
        }
    }

    return recipesMatched
}