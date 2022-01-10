class DisplayTagCard {

    displaySelectedIngredientTag() {
        const ingredientTag = document.querySelectorAll(".ingredient-tag")

        ingredientTag.forEach((tag) => tag.addEventListener("click", (e) => {
            let tagContent = e.target.innerText
            let tagsContainer = document.querySelector("#tags-container")

            let tagCard = document.createElement("div")
            tagCard.classList.add("blue-selected-tag")

            tagCard.innerHTML = `<p>${tagContent}<i class="far fa-times-circle"></i></p>`
            tagsContainer.appendChild(tagCard)
            tag.style.display = "none"

            let tagCross = document.querySelectorAll(".far")
            tagCross.forEach(cross => cross.addEventListener("click", (e) => {
                e.target.parentNode.parentNode.outerHTML = ""
                tag.style.display = "block"
            }))
            
        }))

    }

}
new DisplayTagCard().displaySelectedIngredientTag()