let allDropdownArrow = document.querySelectorAll(".fas.fa-chevron-down")
let allFilters = document.querySelectorAll(".filter-container")
let allFiltersTitles = document.querySelectorAll(".container-title")
let allTaglistContainer = document.querySelectorAll(".taglist-container")
let allTagsWrapper = document.querySelectorAll(".tags-wrapper")

export function dropdownEventManager() {
    let titles = ["Ingredients", "Appareils", "Ustensiles"]

    allDropdownArrow.forEach((arrow, index) => arrow.addEventListener("click" ,() => {

        if (allFilters[index].classList.contains("open")) {
            
            allFilters[index].classList.remove("open")
            allFiltersTitles[index].innerHTML = titles[index]
            allTagsWrapper[index].style.display = "none"
            allFilters[index].style.height = "69px"
        } else {
            
            allFilters[index].classList.add("open")
            allFiltersTitles[index].innerHTML = '<input type="text" class="filter-input" placeholder="Rechercher ..."/>'
            allTagsWrapper[index].style.display = "block"
            allFilters[index].style.height = "500px"
        }


    }))
}
