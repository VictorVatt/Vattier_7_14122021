class GetData {

    getIngredients(ing) {
        let ingredients = []
        ing.forEach(recipe => {
            recipe.ingredients.forEach(ing => {
                if (!ingredients.includes(ing.ingredient)) {
                    ingredients.push(ing.ingredient)
                }
            })
        })
        return ingredients
    }

    getDevices(dev) {
        let devices = []
        dev.forEach(recipe => {
                if (!devices.includes(recipe.appliance)) {
                    devices.push(recipe.appliance)
                }
        })
        return devices
    }

    getCookingTools(tools) {
        let cookingTools = []
        tools.forEach(recipe => {
            recipe.ustensils.forEach(ust => {
                if (!cookingTools.includes(ust)) {
                    cookingTools.push(ust)
                }
            })
        })
        return cookingTools
    }
}