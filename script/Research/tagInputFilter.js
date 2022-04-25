
export function ingredientTagFilter() {
    let ingredientTagInput = document.querySelector("#ingredients .input-container")
    let allIngredientsTags = document.querySelectorAll("#ingredients .tag-container")


    ingredientTagInput.addEventListener("keyup", (e) => {
            let inputValue = e.target.value

            allIngredientsTags.forEach(element => {
                if (element.innerText.includes(inputValue)) {
                    element.style.display = "flex"
                } else {
                    element.style.display = "none"
                }
            })

    })
}


export function applianceTagFilter() {
    let applianceTagInput = document.querySelector("#appareil .input-container")
    let allApplianceTags = document.querySelectorAll("#appareil .tag-container")


    applianceTagInput.addEventListener("keyup", (e) => {
            let inputValue = e.target.value

            allApplianceTags.forEach(element => {
                if (element.innerText.includes(inputValue)) {
                    element.style.display = "flex"
                } else {
                    element.style.display = "none"
                }
            })

    })
}

export function toolsTagFilter() {
    let toolsTagInput = document.querySelector("#ustensiles .input-container")
    let allToolsTags = document.querySelectorAll("#ustensiles .tag-container")


    toolsTagInput.addEventListener("keyup", (e) => {
            let inputValue = e.target.value

            allToolsTags.forEach(element => {
                if (element.innerText.includes(inputValue)) {
                    element.style.display = "flex"
                } else {
                    element.style.display = "none"
                }
            })

    })
}
