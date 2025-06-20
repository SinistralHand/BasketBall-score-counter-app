let homeEl = document.getElementById("home-score")
console.log(homeEl)

let guestEl = document.getElementById("guest-score")
console.log(guestEl)

let homescore=0
let guestscore=0

function home1(){
    homescore +=1
    homeEl.textContent = homescore
}

function home2(){
    homescore +=2
    homeEl.textContent = homescore
}

function home3(){
    homescore +=3
    homeEl.textContent = homescore
}


function guest1(){
    guestscore +=1
    guestEl.textContent = guestscore
}

function guest2(){
    guestscore +=2
    guestEl.textContent = guestscore
}

function guest3(){
    guestscore +=3
    guestEl.textContent = guestscore
}

function zeroOut(){
    homescore=0
    guestscore=0
    homeEl.textContent = homescore
    guestEl.textContent = guestscore
}