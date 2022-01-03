const filters = document.querySelectorAll(".filter-container")
const arrowDown = document.querySelectorAll(".fa-chevron-down")
const inputContainer = document.querySelectorAll(".input-container")


const ingredientFilter = document.querySelector("#ingredients")
const appareilFilter = document.querySelector("#appareil")
const ustensileFilter = document.querySelector("#ustensiles")



const containerTitle = document.querySelector("p .container-title")
const tagSearchField = `<input class="input-field" type="search" placeholder="Rechercher par tag">`

arrowDown.forEach((arrow) => arrow.addEventListener("click", () => {
    if (!arrow.classList.contains("deployed")) {
        arrow.classList.add("deployed")
        arrow.parentNode.classList.add("deployed")
    } else {
        arrow.classList.remove("deployed")
        arrow.parentNode.classList.remove("deployed")
    }
    replaceTitleBySearchField(ingredientFilter, 0, "Ingredients", "Rechercher un ingrédient" )
    replaceTitleBySearchField(appareilFilter, 1, "Appareil", "Rechercher un appareil")
    replaceTitleBySearchField(ustensileFilter, 2, "Ustensiles", "Rechercher un ustensile")
}))


function replaceTitleBySearchField(element, index, word, placeholder) {
    if (element.classList.contains("deployed")) {
        inputContainer[index].innerHTML = `<input class="input-field" type="search" placeholder="${placeholder}">`;
    } else {
        inputContainer[index].innerHTML = `<p class="container-title">${word}</p>`;
    }
}

