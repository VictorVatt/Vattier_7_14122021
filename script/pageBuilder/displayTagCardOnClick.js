class DisplayTagCard {
    constructor() {
        this.selectedIngredientsTags = []
        this.selectedDevicesTags = []
        
    }
    displaySelectedIngredientTag() {
        const ingredientTag = document.querySelectorAll(".ingredient-tag")

        ingredientTag.forEach((tag) => tag.addEventListener("click", (e) => {
            let tagContent = e.target.innerText
            this.selectedIngredientsTags.push(e.target.innerText)

            console.log(this.selectedIngredientsTags)

            let tagsContainer = document.querySelector("#tags-container")

            let tagCard = document.createElement("div")
            tagCard.classList.add("blue-selected-tag")

            tagCard.innerHTML = `<p>${tagContent}<i class="far fa-times-circle"></i></p>`
            tagsContainer.appendChild(tagCard)

            tag.style.display = "none"

            let tagCross = document.querySelectorAll(".far")
            tagCross.forEach(cross => cross.addEventListener("click", (e) => {
                let index = this.selectedIngredientsTags.indexOf(e.target.parentNode.innerText)
                if (index > -1) {
                    this.selectedIngredientsTags.splice(index, 1)
                    console.log(this.selectedIngredientsTags)
                }
                cross.parentNode.parentNode.remove()
                tag.style.display = "block"
            }))
        }))
    } 
    displaySelectedDevicesTag() {
        const deviceTag = document.querySelectorAll(".device-tag")

        deviceTag.forEach((tag) => tag.addEventListener("click", (e) => {
            let tagContent = e.target.innerText
            this.selectedDevicesTags.push(e.target.innerText)

            let tagsContainer = document.querySelector("#tags-container")

            console.log(this.selectedDevicesTags)

            let tagCard = document.createElement("div")
            tagCard.classList.add("green-selected-tag")

            tagCard.innerHTML = `<p>${tagContent}<i class="far fa-times-circle"></i></p>`
            tagsContainer.appendChild(tagCard)

            tag.style.display = "none"

            let tagCross = document.querySelectorAll(".far")
            tagCross.forEach(cross => cross.addEventListener("click", (e) => {
                let index = this.selectedDevicesTags.indexOf(e.target.parentNode.innerText)
                if (index > -1) {
                    this.selectedDevicesTags.splice(index, 1)
                    console.log(this.selectedDevicesTags)
                }
                cross.parentNode.parentNode.remove()
                tag.style.display = "block"
            }))
        }))
    } 

}
new DisplayTagCard().displaySelectedIngredientTag()
new DisplayTagCard().displaySelectedDevicesTag()

