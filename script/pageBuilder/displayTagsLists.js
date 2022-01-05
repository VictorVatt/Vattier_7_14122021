class DisplayTagsList {
    constructor() {
        this.IngredientTaglistContainer = document.querySelector("#ingredient-taglist-container")
        this.DevicesTaglistContainer = document.querySelector("#devices-taglist-container")
        this.CookingToolsTaglistContainer = document.querySelector("#tools-taglist-container")
    }
    displayIngredientTagList(ingredients) {
        let list = document.createElement("ul")
        list.classList.add("taglist-ingredients")
        this.IngredientTaglistContainer.appendChild(list)

        ingredients.forEach((ingredient) => {
            let ingredientLiTag = document.createElement("li")

            list.appendChild(ingredientLiTag)
            ingredientLiTag.innerHTML = `${ingredient}`
            ingredientLiTag.classList.add("ingredient-tag")
        })
    }

    displayDevicesTagList(devices) {
        let list = document.createElement("ul")
        list.classList.add("taglist-devices")
        this.DevicesTaglistContainer.appendChild(list)

        devices.forEach((device) => {
            let devicesLiTag = document.createElement("li")

            list.appendChild(devicesLiTag)
            devicesLiTag.innerHTML = `${device}`
            devicesLiTag.classList.add("device-tag")
        })
    }
    displayToolsTagList(tools) {
        let list = document.createElement("ul")
        list.classList.add("taglist-tools")
        this.CookingToolsTaglistContainer.appendChild(list)

        tools.forEach((tool) => {
            let toolLiTag = document.createElement("li")

            list.appendChild(toolLiTag)
            toolLiTag.innerHTML = `${tool}`
            toolLiTag.classList.add("tool-tag")
        })
    }
}
new DisplayTagsList().displayIngredientTagList(new GetData().getIngredients(allRecipesData))
new DisplayTagsList().displayDevicesTagList(new GetData().getDevices(allRecipesData))
new DisplayTagsList().displayToolsTagList(new GetData().getCookingTools(allRecipesData))