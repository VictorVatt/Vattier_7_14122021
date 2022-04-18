let ingredientTagList = document.querySelector("#ingredients-taglist-container")
let applianceTagList = document.querySelector("#appliance-taglist-container")
let toolsTagList = document.querySelector("#tools-taglist-container")

function displayTags(tags) {
    let ingredients = tags.ingredients
    let appliance = tags.appliance
    let tools = tags.tools

    fillTags(ingredients, ingredientTagList)
    fillTags(appliance, applianceTagList)
    fillTags(tools, toolsTagList)

}

export default displayTags

function fillTags(tagsArray, HTMLelement) {
    HTMLelement.innerHTML = ''
    tagsArray.forEach(tag => {
        let template  = document.createElement("div")
        template.classList.add("tag-container")
        template.innerHTML = `<p class="tag">${tag}<p>`
        HTMLelement.appendChild(template)
    })
}