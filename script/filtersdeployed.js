const filters = document.querySelectorAll(".filter-container")
const arrowDown = document.querySelector(".fa-chevron-down")

filters.forEach(filter => filter.addEventListener("click", (e) => {
    if (!filter.classList.contains("deployed")) {
        filter.classList.add("deployed")
        arrowDown.style.transform = "rotate(180deg)"
    } else {
        filter.classList.remove("deployed")
        arrowDown.style.transform = "rotate(0deg)"
    }
}))