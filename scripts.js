/**
 * w3schools - Countdown Timer step by step:
 *      Link: https://www.w3schools.com/howto/howto_js_countdown.asp
 *
 *
 */

let release = new Date("2022-04-30 00:00:00").getTime()

function getTimeRemaining(release) {
  const today = new Date().getTime()
  const timeToRelease = release - today
  const days = Math.floor(timeToRelease / (1000 * 60 * 60 * 24))
  const hours = Math.floor(
    (timeToRelease % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  )
  const minutes = Math.floor((timeToRelease % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((timeToRelease % (1000 * 60)) / 1000)
  //let milliseconds = timeToRelease

  return { timeToRelease, days, hours, minutes, seconds }
  /*console.log(
    `${String(days).padStart(2, "0")}:${String(hours).padStart(
      2,
      "0"
    )}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`
  )*/
  //"Falta(m) ", days, " dia(s) e ", hours, ":", minutes, ":", seconds)
}

function initializeCountdownTimer(id, release) {
  const clock = document.getElementById(id)
  const timeInterval = setInterval(() => {
    const cdt = getTimeRemaining(release)
    clock.innerHTML = `${String(getTimeRemaining(release).days).padStart(
      2,
      "0"
    )}:${String(getTimeRemaining(release).hours).padStart(2, "0")}:${String(
      getTimeRemaining(release).minutes
    ).padStart(2, "0")}:${String(getTimeRemaining(release).seconds).padStart(
      2,
      "0"
    )}`

    if (cdt.timeToRelease <= 0) {
      clearInterval(timeInterval)
    }
  }, 1000)

  /*
  function updateClock() {
    const cdt = getTimeRemaining(release)
    clock.innerHTML = `${String(getTimeRemaining(release).days).padStart(
      2,
      "0"
    )}:${String(getTimeRemaining(release).hours).padStart(2, "0")}:${String(
      getTimeRemaining(release).minutes
    ).padStart(2, "0")}:${String(getTimeRemaining(release).seconds).padStart(
      2,
      "0"
    )}`

    if (cdt.timeToRelease <= 0) {
      clearInterval(timeInterval)
    }
  }
  updateClock()
  let setInterval = setInterval(updateClock, 1000)
  */
}

initializeCountdownTimer("show-timer", release)

//console.log(timeToRelease)
/*
const release = new Date()
release.setDate(today.getDate() + 1)
//release.setHours(today.getHours() + 1)
console.log(release)
*/
/*
let miliseconds = release - today
let seconds = Math.floor((release - today) / 1000)
let minutes = Math.floor(seconds / 60)
let hours = Math.floor(minutes / 60)
let days = Math.floor(hours / 24)

console.log("----------------------")
console.log("Milissegundos: ", "\n", miliseconds)
console.log("Milissegundos em Segundos: ", "\n", seconds)
console.log("Segundos em Minutos: ", "\n", minutes)
console.log("Minutos em Horas: ", "\n", hours)
console.log("Horas em Dias: ", "\n", days)
console.log("----------------------")


// Após milissegundos, pegar horas.
// hours = hours - (days * 24)
hours = hours - days * 24
// minutes = minutes - (days * 24 * 60) - (hours * 60)
minutes = minutes - days * 24 * 60 - hours * 60
// seconds = seconds - (days * 24 * 60 * 60) - (hours * 60  * 60) - (minutes * 60)
seconds = seconds - days * 24 * 60 * 60 - hours * 60 * 60
  - minutes * 60
*/

/*
console.log("----------------------")
console.log("Milissegundos em Dias: ", "\n", days)
console.log("Milissegundos em Horas: ", "\n", hours)
console.log("Milissegundos em Minutos: ", "\n", minutes)
console.log("Milissegundos em Segundos: ", "\n", seconds)
console.log("Milissegundos: ", "\n", miliseconds)
console.log("----------------------")
console.log(hours)
console.log(minutes)
console.log(seconds)
console.log("Falta(m) ", days, " dia(s) e ", hours, ":", minutes, ":", seconds)
console.log("----------------------")
*/

/*
//var dateFuture = new Date(new Date().getFullYear() + 1, 0, 1)
var dateFuture = new Date("2022-02-16 21:00:00")
console.log(dateFuture)
var dateNow = new Date()
console.log(dateNow)
console.log("----------------------")

var seconds = Math.floor((dateFuture - dateNow) / 1000)
var minutes = Math.floor(seconds / 60)
var hours = Math.floor(minutes / 60)
var days = Math.floor(hours / 24)

console.log(seconds)
console.log(minutes)
console.log(hours)
console.log(days)

hours = hours - days * 24
minutes = minutes - days * 24 * 60 - hours * 60
seconds = seconds - days * 24 * 60 * 60 - hours * 60 * 60 - minutes * 60

console.log("----------------------")
console.log(hours)
console.log(minutes)
console.log(seconds)
console.log(days)
*/
/*
let countdown = release.getTime() - today.getTime()
console.log(Date(countdown))

let days = Math.floor(countdown / (1000 * 60 * 60 * 24))
console.log(days)
*/

/**
 * Contagem de tempo de um dia
 *  Milisegundos  Segundos    Minutos
 *      1000    *    60     *   60
 *  Tempo em milisegundos de uma HORA: 3600000
 *
 *  Milisegundos  Segundos    Minutos    Dias
 *      1000    *    60     *   60    *   24
 *  Tempo em milisegundos de um DIA: 86400000
 *
 * Diferença entre uma data e outra:
 *    Data_2 - Data_1
 */
