let blur = document.getElementById("blur")
let spacing = document.getElementById("spacing")
let color = document.getElementById("color")

color.addEventListener("change", (e) => {
  document.getElementById("container").style.background = e.target.value
})

spacing.addEventListener("change", (e) => {
  document.querySelector("img").style.padding = `${e.target.value}px`
})

blur.addEventListener("change", (e) => {
  document.querySelector("img").style.filter = `blur(${e.target.value}px)`
})
