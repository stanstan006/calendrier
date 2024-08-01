/* declaration d'une constante pour chaque id en html et 
une constant date = new Date() 
pour recupere la date d'aujoud'huit*/

const monthName = document.querySelector("#month-name")

const dayName = document.querySelector("#day-name")

const dayNum = document.querySelector("#day-number")

const yearEl = document.querySelector("#year")

const date= new Date()

const leMois = date.getMonth()
monthName.innerText = date.toLocaleString("en", {
    month: "long"
})

dayName.innerText = date.toLocaleString("en", {
    weekday: "long"
})

dayNum.innerText = date.getDate()

yearEl.innerText = date.getFullYear()

