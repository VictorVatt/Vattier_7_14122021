/** ----------------------------------------------------------------- DOM ELEMENTS ---------------------------------------------------------------------------------- */
const filters = document.querySelectorAll(".filter-container")
const arrowDown = document.querySelectorAll(".fa-chevron-down")
const inputContainer = document.querySelectorAll(".input-container")
const tagsWrapper = document.querySelectorAll(".tags-wrapper")

const ingredientFilter = document.querySelector("#ingredients")
const appareilFilter = document.querySelector("#appareil")
const ustensileFilter = document.querySelector("#ustensiles")

const containerTitle = document.querySelector("p .container-title")
const tagSearchField = `<input class="input-field" type="search" placeholder="Rechercher par tag">`

/** Deploy filter and calls function to swtch title with input and calls function to find a  */
arrowDown.forEach((arrow) => arrow.addEventListener("click", () => {
    if (!arrow.classList.contains("deployed")) {
        arrow.classList.add("deployed")
        arrow.parentNode.classList.add("deployed")
        tagsWrapper.forEach(wrapper => wrapper.style.display = "block")  
        tagsWrapper.forEach(wrapper => wrapper.scrollTop = 0)
        replaceTitleBySearchField(ingredientFilter, 0, "Ingredients", "Rechercher un ingrédient" )
        replaceTitleBySearchField(appareilFilter, 1, "Appareil", "Rechercher un appareil")
        replaceTitleBySearchField(ustensileFilter, 2, "Ustensiles", "Rechercher un ustensile")
        if (arrow.parentNode.classList.contains("blue")) {
            new ResearchTags().researchIngredientsTags()
        } else if (arrow.parentNode.classList.contains("green")) {
            new ResearchTags().researchDevicesTags()
        } else if (arrow.parentNode.classList.contains("red")) {
            new ResearchTags().researchToolsTags()
        }
    } else {
        arrow.classList.remove("deployed")
        arrow.parentNode.classList.remove("deployed")
        tagsWrapper.forEach(wrapper => wrapper.style.display = "none") 
        tagsWrapper.forEach(wrapper => wrapper.scrollTop = 0) 
        replaceTitleBySearchField(ingredientFilter, 0, "Ingredients", "Rechercher un ingrédient" )
        replaceTitleBySearchField(appareilFilter, 1, "Appareil", "Rechercher un appareil")
        replaceTitleBySearchField(ustensileFilter, 2, "Ustensiles", "Rechercher un ustensile")
    }
}))


function replaceTitleBySearchField(element, index, word, placeholder) {
    if (element.classList.contains("deployed")) {
        inputContainer[index].innerHTML = `<input class="input-field-${word}" type="search" placeholder="${placeholder}">`;
    } else {
        inputContainer[index].innerHTML = `<p class="container-title">${word}</p>`;
    }
}
