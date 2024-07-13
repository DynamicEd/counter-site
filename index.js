let allPpl = document.getElementById("all-ppl")
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0
let finalCt = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    // add counts together
    finalCt += count
    
    // all people
    allPpl.textContent = finalCt

    let countStr = count + " - "

    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}

// function minus() {
//     count -= 1
//     countEl.textContent = count
// }

function reset() {
    count = 0
    countEl.textContent = 0
    saveEl.textContent = ""
    finalCt = 0
    allPpl.textContent = 0
}