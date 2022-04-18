class RecipeCard {
    constructor(recipes) {
        this.id = recipes.id
        this.name = recipes.name
        this.servings = recipes.servings
        this.ingredients = recipes.ingredients
        this.time = recipes.time
        this.description = recipes.description
        this.appliance = recipes.appliance
        this.ustensils = recipes.ustensils
    }


    htmlCardCreator() {
        return `<div class="recipe-card">
                    <div class="grey-part"></div>
                    <div class="information-container">
                        <div class="title-duration">
                            <h2 class="title">${this.name}</h2>
                            <div class="duration-container">
                                <i class="far fa-clock"></i>
                                <p class="duration">${this.time} min</p>
                            </div>
                        </div>
                        <div class="recipe-information">
                            <div class="recipe-ingredient">
                                ${this.ingredients.map(element => `
                                <p><b>${element.ingredient} </b> :
                                ${ 'quantity' in element ? element.quantity : ''} ${ 'unit' in element ? element.unit : ''}</p>`).join(" ")}
                            </div>
                            <div class="recipe-instruction"
                                <p>${this.description}</p>
                            </div>
                        </div>
                    </div>
                </div>`
    }
}

export default RecipeCard