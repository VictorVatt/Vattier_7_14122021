class DisplayTagCard {

    async displaySelectedIngredientTag() {
        let selectedIngredientsTags = []
        const ingredientTag = document.querySelectorAll(".ingredient-tag")

        ingredientTag.forEach((tag) => tag.addEventListener("click", (e) => {
            let tagContent = e.target.innerText
            selectedIngredientsTags.push(e.target.innerText)

            let tagsContainer = document.querySelector("#tags-container")

            let tagCard = document.createElement("div")
            tagCard.classList.add("blue-selected-tag")

            tagCard.innerHTML = `<p>${tagContent}<i class="far fa-times-circle"></i></p>`
            tagsContainer.appendChild(tagCard)

            tag.style.display = "none"

            let tagCross = document.querySelectorAll(".far")
            tagCross.forEach(cross => cross.addEventListener("click", (e) => {
                let index = selectedIngredientsTags.indexOf(e.target.parentNode.innerText)
                if (index > -1) {
                    selectedIngredientsTags.splice(index, 1)
                }
                cross.parentNode.parentNode.remove()
                tag.style.display = "block"
            }))
        }))
        return selectedIngredientsTags
    } 
    async displaySelectedDevicesTag() {
        let selectedDevicesTags = []
        const deviceTag = document.querySelectorAll(".device-tag")

        deviceTag.forEach((tag) => tag.addEventListener("click", (e) => {
            let tagContent = e.target.innerText
            selectedDevicesTags.push(e.target.innerText)

            let tagsContainer = document.querySelector("#tags-container")


            let tagCard = document.createElement("div")
            tagCard.classList.add("green-selected-tag")

            tagCard.innerHTML = `<p>${tagContent}<i class="far fa-times-circle"></i></p>`
            tagsContainer.appendChild(tagCard)

            tag.style.display = "none"

            let tagCross = document.querySelectorAll(".far")
            tagCross.forEach(cross => cross.addEventListener("click", (e) => {
                let index = selectedDevicesTags.indexOf(e.target.parentNode.innerText)
                if (index > -1) {
                    selectedDevicesTags.splice(index, 1)
                }
                cross.parentNode.parentNode.remove()
                tag.style.display = "block"
            }))
        }))
        return selectedDevicesTags
    } 
    async displaySelectedToolsTag() {
        let selectedToolsTags = []
        const toolTag = document.querySelectorAll(".tool-tag")

        toolTag.forEach((tag) => tag.addEventListener("click", (e) => {
            let tagContent = e.target.innerText
            selectedToolsTags.push(e.target.innerText)

            let tagsContainer = document.querySelector("#tags-container")


            let tagCard = document.createElement("div")
            tagCard.classList.add("red-selected-tag")

            tagCard.innerHTML = `<p>${tagContent}<i class="far fa-times-circle"></i></p>`
            tagsContainer.appendChild(tagCard)

            tag.style.display = "none"

            let tagCross = document.querySelectorAll(".far")
            tagCross.forEach(cross => cross.addEventListener("click", (e) => {
                let index = selectedToolsTags.indexOf(e.target.parentNode.innerText)
                if (index > -1) {
                    selectedToolsTags.splice(index, 1)
                }
                cross.parentNode.parentNode.remove()
                tag.style.display = "block"
            }))
        }))
        return selectedToolsTags
    } 

}

