import Normalize from "../Utils/normalize.js"

let ingredientTagList = document.querySelector("#ingredients-taglist-container")
let applianceTagList = document.querySelector("#appliance-taglist-container")
let toolsTagList = document.querySelector("#tools-taglist-container")

function displayTags(tags, ) {
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
    tagsArray.forEach(tag => { // for each tag in the array
        let template  = document.createElement("div") // create a div
        template.classList.add("tag-container") // add tag-container in the classList
        template.innerHTML = `<p class="tag">${Normalize.changeToUpper(tag)}<p>` // add the tag content
        HTMLelement.appendChild(template) // add to child
    })
}