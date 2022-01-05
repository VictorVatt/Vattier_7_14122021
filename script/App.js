/** Display les cartes par defaut sans aucune recherche */
new DisplayRecipe().display(allRecipesData)

let searchInput = document.querySelector("#research-input")

searchInput.addEventListener("input", (search) => {
    let searchValue = search.target.value
    if(searchValue.length > 2) {
        let searchResult = Research.mainResearch(searchValue)
        if (searchResult.recipesMatched.length === 0){
            return console.log("recette inconnue")
        } else {
            document.querySelector("#recipe-card-wrapper").innerHTML = ""
            new DisplayRecipe().display(searchResult.recipesMatched)
            return
        }
    }
    document.querySelector("#recipe-card-wrapper").innerHTML = ""
    new DisplayRecipe().display(allRecipesData)
})

