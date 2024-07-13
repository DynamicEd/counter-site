// The Date
let today = new Date().toLocaleDateString()
console.log(today)
let myDate = document.getElementById("my-date")
myDate.textContent = today

// 1. Deliver Options
// - Toggle class hidden
// - Remove hidden for +1
// - Add hidden for X
// -- Check if hidden on Types

const packSize = document.querySelector(".package-size")
// console.log(packSize.className)
// console.log(packSize.classList.toggle("hidden"))
const packRemove = document.querySelector(".package-remove")

const deliveryBtnNew = document.querySelector(".delivery-btn-new")
const deliveryBtnCancel = document.querySelector(".delivery-btn-cancel")

// const packRemoveCheck = document.querySelector(".package-remove-check")

// New Delivery
function deliveryNew() {
    if (packRemove.classList.contains("hidden")) { // Is Cancel Package hidden On?
        packSize.classList.toggle("hidden") // Yes, Turn Packages Off/On
        deliveryBtnCancel.classList.remove("active") // Turn Active Class Off
        deliveryBtnNew.classList.toggle("active") // Turn Active Class On/Off
        // packRemoveCheck.classList.add("hidden") // Turn Cancel Check Off
        // console.log(packSize.className)
    } else {
        packRemove.classList.add("hidden") // No, Turn Cancel Package Off
        packSize.classList.remove("hidden") // Now, Turn Packages On
        deliveryBtnCancel.classList.remove("active") // Turn Active Class Off
        deliveryBtnNew.classList.add("active") // Turn Active Class On
        // packRemoveCheck.classList.add("hidden") // Turn Cancel Check Off
    }
}

// Cancel Delivery
function deliveryCancel() {
    if (packSize.classList.contains("hidden")) { // Is Packages Hidden?
        packRemove.classList.toggle("hidden") // Yes, Turn Cancel Package On/Off
        deliveryBtnNew.classList.remove("active") // Turn Active Class Off
        deliveryBtnCancel.classList.toggle("active") // Turn Active Class On/Off
        // packRemoveCheck.classList.add("hidden") // Turn Cancel Check Off
    } else {
        packSize.classList.add("hidden") // No, Turn Packages Off
        packRemove.classList.remove("hidden") // Now, Turn Cancel Package On
        deliveryBtnNew.classList.remove("active") // Turn Active Class Off
        deliveryBtnCancel.classList.add("active") // Turn Active Class On
        // packRemoveCheck.classList.add("hidden") // Turn Cancel Check Off
    }
}

// // Cancel Check
// function checkCancel() {
//     if (packRemove.classList.contains("hidden")) { // Is Cancel Package Hidden?
//         packRemove.classList.add("hidden") // Turn Cancel Delivery Off
//         packRemoveCheck.classList.remove("hidden") // Yes, Turn Cancel Check On
        
//     } else {
//         packRemove.classList.add("hidden") // No, Turn Cancel Package Off
//         packRemoveCheck.classList.remove("hidden") // Now, Turn Cancel Check On
//     }
// }

// 2. Deliver Types
// Update Deliveries - Add
// - Add to Recent Delivery
// - Add to Total Deliveries
// - Add to Recent Sale
// - Add to Total Sales
// - Add to Recent Credits
// - Add to Total Credits

let deliveryUnits = null
let deliveryCount = 0
let deliveryCountLast = null
let deliveryCountTemp = null

let deliveryCountTotal = document.getElementById("total-delivered")
let deliveryCountRemove = document.getElementById("remove-last-count")
console.log(deliveryCountRemove.textContent)

// let buttonTitle = document.getElementsByClassName("btn-title")

// let recentSale = 0
// let totalSales = document.getElementById("total-sales")


// Delivery Types
function deliveryPersonal() { // deliverP deliverS deliverM deliverL
    console.log("NEW DELIVERY MADE")
    console.log("Delivery Personal")
    deliveryUnits = 1 // How many Units in the delivery?
    deliveryUpdate() // Update Deliveries Function
    deliveryNew() // Hide Add Delivery
}

function deliverySmall() {
    console.log("NEW DELIVERY MADE")
    console.log("Delivery Small")
    deliveryUnits = 2 // How many Units in the delivery?
    deliveryUpdate() // Update Deliveries Function
    deliveryNew() // Hide Add Delivery
}

function deliveryMedium() {
    console.log("NEW DELIVERY MADE")
    console.log("Delivery Medium")
    deliveryUnits = 4 // How many Units in the delivery?
    deliveryUpdate() // Update Deliveries Function
    deliveryNew() // Hide Add Delivery
}

function deliveryLarge() {
    console.log("NEW DELIVERY MADE")
    console.log("Delivery Large")
    deliveryUnits = 10 // How many Units in the delivery?
    deliveryUpdate() // Update Deliveries Function
    deliveryNew() // Hide Add Delivery
}

function deliveryUpdate() {
    deliveryCount += deliveryUnits // Add the Units to the Delivery Count
    // console.log("Deliveries: " + deliveryCount)
    deliveryCountTotal.textContent = deliveryCount // Update Deliveries Completed Text
    console.log("Delivery Total: " + deliveryCountTotal.textContent)
    deliveryLast()
}

function deliveryLast() {
    deliveryCountLast = deliveryUnits // Last Delivery Count equals Delivery Unit(s)
    console.log("Delivery Last: " + deliveryCountLast)
    deliveryCountTotal.textContent += " ( + " + deliveryCountLast + " )" // Add Last Delivery to Deliveries Completed Text
    deliveryCountRemove.textContent = " - " + deliveryCountLast // Replace Remove Delivery w/ Last Count Text
    console.log("Delivery Remove Text: " + deliveryCountRemove.textContent)
}

// 2. Deliver Types
// Update Deliveries - Remove
// - Remove from Recent Delivery
// - Remove from Total Deliveries
// - Remove from Recent Sale
// - Remove from Total Sales
// - Remove from Recent Credits
// - Remove from Total Credits

function removeLast() {
    if (deliveryCount <= 0) {
        console.log("Delivery Count Zero")
        deliveryCountTotal.textContent = "Go Deliver! (" + deliveryCount + ")" // No Deliveries Get to Work
    } else {
        console.log("Check Last Delivery: " + deliveryCountLast)
        console.log("OLD Delivery Total: " + deliveryCount)
        deliveryCount -= deliveryCountLast // Minus Delivery From Count
        console.log("NEW Delivery Total: " + deliveryCount)
        deliveryCountTotal.textContent = deliveryCount // Update Deliveries Completed Text
        deliveryCountRemove.textContent = "Removed" // Replace Remove Delivery w/ Last Count Text
        deliveryCountLast = 0 // Clear Last Delivery
    }
}

function clearData() {
    console.log("Data Cleared")
    // Store Total Deliveries Temporarily
    deliveryCountTemp = deliveryCount
    // deliveryCountTemp = deliveryCount.valueOf()
    // Reset Delivery Count to 0
    deliveryCount = 0
    // Reset Deliveries Completed Text to 0/Total
    deliveryCountTotal.textContent = "Total"
    console.log("Temp Delivery Count: " + deliveryCountTemp)
    console.log("New Delivery Count: " + deliveryCount)
    deliveryCountRemove.textContent = "No Deliveries"
    deliveryCancel()
    // Create a function called Initialize?
}

