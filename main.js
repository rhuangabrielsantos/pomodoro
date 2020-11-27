const arrows = document.querySelectorAll('.arrow')
const actions = {
    arrowUpJob,
    arrowDownJob,
    arrowUpPause,
    arrowDownPause,
    arrowUpSection,
    arrowDownSection,
}

arrows.forEach(arrow => {
    arrow.addEventListener("click", changeNumber)
})

function changeNumber(event) {
    const action = event.target.id
    const changeNumberAction = actions[action]

    if (changeNumberAction) {
        changeNumberAction()
    }
}

function arrowUpJob() {
    incrementNumberForFieldId("numberJob")
}

function arrowDownJob() {
    decrementNumberForFieldId("numberJob")
}

function arrowUpPause() {
    incrementNumberForFieldId("numberPause")
}

function arrowDownPause() {
    decrementNumberForFieldId("numberPause")
}

function arrowUpSection() {
    incrementNumberForFieldId("numberSession")
}

function arrowDownSection() {
    decrementNumberForFieldId("numberSession")
}

function incrementNumberForFieldId(fieldId) {
    const field = document.querySelector("#" + fieldId)
    let number = parseInt(field.textContent)
    
    number++

    field.innerHTML = number
}

function decrementNumberForFieldId(fieldId) {
    const field = document.querySelector("#" + fieldId)
    let number = parseInt(field.textContent)
    
    number--

    if (number < 0) {
        return
    }

    field.innerHTML = number
}