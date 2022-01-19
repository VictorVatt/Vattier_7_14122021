class GetData {

    getIngredients(ing) {
        let ingredients = []
        ing.forEach(recipe => {
            recipe.ingredients.forEach(ing => {
                if (!ingredients.includes(ing.ingredient.toLowerCase())) {
                    ingredients.push(ing.ingredient.toLowerCase())
                }
            })
        })
        return ingredients
    }

    getDevices(dev) {
        let devices = []
        dev.forEach(recipe => {
                if (!devices.includes(recipe.appliance.toLowerCase())) {
                    devices.push(recipe.appliance.toLowerCase())
                }
        })
        return devices
    }

    getCookingTools(tools) {
        let cookingTools = []
        tools.forEach(recipe => {
            recipe.ustensils.forEach(ust => {
                if (!cookingTools.includes(ust.toLowerCase())) {
                    cookingTools.push(ust.toLowerCase())
                }
            })
        })
        return cookingTools
    }
}