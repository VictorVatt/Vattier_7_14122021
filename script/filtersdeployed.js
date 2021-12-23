const filters = document.querySelectorAll(".filter-container")
const arrowDown = document.querySelector(".fa-chevron-down")

filters.forEach((filter) => filter.addEventListener("click", () => {
    if (!filter.classList.contains("deployed")) {
        filter.classList.add("deployed")
    } else {
        filter.classList.remove("deployed")
    }
}))