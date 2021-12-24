const secHand = document.getElementById("sec-hand")
const mintHand = document.getElementById("mint-hand")
const hourHand = document.getElementById("hour-hand")

let secondRotate = 1
let minuteRotate = 1
let hourRotate = 1

setInterval(() => {
  if (secondRotate === 360) secondRotate = 1
  secondRotate = secondRotate + 6
  secHand.style.transform = `rotate(${secondRotate}deg)`
}, 1000)

setInterval(() => {
  if (minuteRotate === 360) minuteRotate = 1
  minuteRotate = minuteRotate + 6
  secHand.style.transform = `rotate(${minuteRotate}deg)`
}, 60000)

setInterval(() => {
  if (hourRotate === 360) hourRotate = 1
  hourRotate = hourRotate + 6
  secHand.style.transform = `rotate(${hourRotate}deg)`
}, 3600000)
