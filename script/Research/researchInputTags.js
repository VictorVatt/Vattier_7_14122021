class ResearchTags {
    
    researchIngredientsTags() {
        let ingredientsTags = document.querySelectorAll("li.ingredient-tag")
        let ingredientsInputField = document.querySelector("input.input-field-Ingredients")

            ingredientsInputField.addEventListener("input", (e) => {
                let searchValue = e.target.value
                ingredientsTags.forEach(tag => {
                    if(tag.innerText.includes(searchValue)) {
                        tag.style.display = "block"
                        
                    } else {
                        tag.style.display = "none"
                    }
                        
                    
                })
            })
        
    }
    researchDevicesTags() {
        let devicesTags = document.querySelectorAll("li.device-tag")
        let devicesInputField = document.querySelector(".input-field-Appareil")
            devicesInputField.addEventListener("input", (e) => {
                let searchValue = e.target.value
                devicesTags.forEach(tag => {
                    if(tag.innerText.includes(searchValue)) {
                        tag.style.display = "block"
                    } else {
                        tag.style.display = "none"
                    }
                        
                    
                })
            })
        
    }
    researchToolsTags() {
        let toolsTags = document.querySelectorAll("li.tool-tag")
        let toolsInputField = document.querySelector("input.input-field-Ustensiles")
            toolsInputField.addEventListener("input", (e) => {
                let searchValue = e.target.value
                toolsTags.forEach(tag => {
                    if(tag.innerText.includes(searchValue)) {
                        tag.style.display = "block"
                    } else {
                        tag.style.display = "none"
                    }
                        
                    
                })
            })
        
    }
}
