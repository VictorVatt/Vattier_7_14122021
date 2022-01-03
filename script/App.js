class DisplayRecipe {
    constructor() {
        this.recipesMatched = []
    }
    async display() {
        const wrapper = document.getElementById("recipe-card-wrapper")
        
        allRecipesData.map(element => this.recipesMatched.push(element))
        this.recipesMatched.forEach(recipe => {
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
                                </div>`
            template.innerHTML = recipeCard
            wrapper.appendChild(template)
            
            })   
        }
        async returnRecipesMatched() {
            return this.recipesMatched
        }
}
new DisplayRecipe().display()
new DisplayRecipe().returnRecipesMatched()
