"use strict"

/* Burger Menu */

document.querySelector('.header__burger').addEventListener ('click', function(){
    this.classList.toggle('active');
    document.querySelector('.header__menu').classList.toggle('open');
})

/* Input Cleaning */

document.getElementById(`cleanInput`)
.addEventListener(`keydown`, function(event) {
    if(event.key === `Enter`) {
        this.value = ``
        event.preventDefault()
    }
})

/* Number Counter */

let members = 2245341
setInterval(() => {
    members++
    document.getElementById(`members`).textContent = members.toLocaleString(`en-US`)
}, 2000)

let clubs = 46328
setInterval(() => {
    clubs++
    document.getElementById(`clubs`).textContent = clubs.toLocaleString(`en-US`)
}, 5000)

let eventBookings = 828867
setInterval(() => {
    eventBookings++
    document.getElementById(`eventBookings`).textContent = eventBookings.toLocaleString(`en-US`)
}, 4000)

let payments = 828867
setInterval(() => {
    payments++
    document.getElementById(`payments`).textContent = payments.toLocaleString(`en-US`)
}, 3000)