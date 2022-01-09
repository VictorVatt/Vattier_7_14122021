class DisplayTagCard {

    displaySelectedIngredientTag() {
        const ingredientTag = document.querySelectorAll(".ingredient-tag")

        ingredientTag.forEach((tag) => tag.addEventListener("click", (e) => {
            let target = e.target.value
            target.style.display = "none"
        }))
    }

}
new DisplayTagCard().displaySelectedIngredientTag()