const buttons = document.querySelectorAll("button")

document.addEventListener("keydown", (e) => {
  const keyName = e.key.toLowerCase()
  if (keyName.length === 1 && keyName.match(/[a-z]/i)) {
    const audio = new Audio(`./audios/${keyName}.mp3`)
    audio.currentTime = 0
    audio.play()
  }
})

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const innerText = e.target.innerText.toLowerCase()
    if (innerText.length === 1 && innerText.match(/[a-z]/i)) {
      const audio = new Audio(`./audios/${innerText}.mp3`)
      audio.currentTime = 0
      audio.play()
    }
  })
})
