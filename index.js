let homeEl = document.getElementById("home-score-el")
let guestEl = document.getElementById("guest-score-el")
let homeScore = 0
let guestScore = 0

function increment1home() {
    homeScore += 1
    homeEl.textContent = homeScore
}

function increment2home() {
    homeScore += 2
    homeEl.textContent = homeScore
}

function increment3home() {
    homeScore += 3
    homeEl.textContent = homeScore
}

function increment1guest() {
    guestScore += 1
    guestEl.textContent = guestScore
}

function increment2guest() {
    guestScore += 2
    guestEl.textContent = guestScore
}

function increment3guest() {
    guestScore += 3
    guestEl.textContent = guestScore
}

let saveEl = document.getElementById("save-el")

function save() {
    scoreStr = " Home: " + homeScore + " vs " + "Guest: " + guestScore + " || "
    saveEl.textContent += scoreStr
    homeEl.textContent = 0
    guestEl.textContent = 0
    homeScore = 0
    guestScore = 0
}

function reset() {
    saveEl.textContent = "None"
}