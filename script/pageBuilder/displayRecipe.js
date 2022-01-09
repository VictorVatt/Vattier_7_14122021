class DisplayRecipe {
    async display(searchResult) {
        const wrapper = document.getElementById("recipe-card-wrapper")
        
        searchResult.forEach(recipe => {
            const template = document.createElement("article")
            template.className = "recipe-card"

            const recipeCard = `<div class="grey-part"></div>
                                <div class="information-container">
                                    <div class="title-duration">
                                        <h2 class="title">${recipe.name}</h2>
                                        <div class="duration-container">
                                            <i class="far fa-clock"></i>
                                            <p class="duration">${recipe.time} min</p>
                                        </div>
                                    </div>
                                    <div class="recipe-information">
                                        <div class="recipe-ingredient">
                                            ${recipe.ingredients.map(element => `
                                            <p><b>${element.ingredient} </b> :
                                            ${ 'quantity' in element ? element.quantity : ''} ${ 'unit' in element ? element.unit : ''}</p>`).join(" ")}
                                        </div>
                                        <div class="recipe-instruction"
                                            <p>${recipe.description}</p>
                                        </div>
                                    </div>
                                </div>`
            template.innerHTML = recipeCard
            return wrapper.appendChild(template)
            })   
        }
}


