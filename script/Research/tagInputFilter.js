
function ingredientTagFilter() {
    let ingredientTagInput = document.querySelector("#ingredients .input-container")
    let allIngredientsTags = document.querySelectorAll("#ingredients .tag-container")


    ingredientTagInput.addEventListener("keyup", (e) => {
            let inputValue = e.target.value
            console.log(inputValue)

    })
}



export default ingredientTagFilter