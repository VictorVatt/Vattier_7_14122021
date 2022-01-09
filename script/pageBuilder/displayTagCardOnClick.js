class DisplayTagCard {

    displaySelectedIngredientTag() {
        const ingredientTag = document.querySelectorAll(".ingredient-tag")

        ingredientTag.forEach((tag) => tag.addEventListener("click", (e) => {
            let TagContent = e.target.innerText

            TagContent.forEach(element => )
            
        }))
    }

}
new DisplayTagCard().displaySelectedIngredientTag()